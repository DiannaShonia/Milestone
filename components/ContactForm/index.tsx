import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CustomSnackbar from "../CustomSnackbar";

import styles from "./styles.module.css";

import sendIconSrc from "@/assets/images/send-icon.svg";
import happyIconSrc from "@/assets/images/input-happy-icon.svg";

const ContactForm = () => {
  const { t, i18n } = useTranslation(["common", "home"]);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    formik.resetForm();
  }, [i18n.language]);

  const validationSchema = yup.object({
    name: yup.string().required(t("required")),
    email: yup.string().email(t("invalid-email")).required(t("required")),
    phoneNumber: yup
      .string()
      .required(t("required"))
      .matches(/^\+?[0-9]{9,15}$/, t("invalid-phone-number")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      comment: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch(
          "https://milestone.bitrix24.com/rest/27/r4n0j6hmi27znafj/crm.lead.add.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: {
                TITLE: "Lead from Contact Form",
                NAME: values.name,
                EMAIL: [{ VALUE: values.email }],
                PHONE: [{ VALUE: values.phoneNumber }],
                COMMENTS: values.comment,
              },
            }),
          }
        );
        const data = await response.json();

        if (data.result) {
          setSnackbarSeverity("success");
          setSnackbarMessage(t("common:success-message"));
          resetForm();
        } else {
          setSnackbarSeverity("error");
          setSnackbarMessage(t("common:error-message"));
        }
      } catch (error) {
        setSnackbarSeverity("error");
        setSnackbarMessage(t("common:error-message"));
      }
      setOpenSnackbar(true);
    },
  });

  return (
    <>
      <h3 className={styles.headlineTitle}>
        {/* {t("common:footer-form-title") */}
        ᲓᲐᲒᲕᲘᲢᲝᲕᲔ ᲡᲐᲙᲝᲜᲢᲐᲥᲢᲝ
      </h3>
      <div className={styles.formBox}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.left}>
            <div className={styles.inputField}>
              <div className="Mui-IconBox">
                <Image src={happyIconSrc} alt="name" width={33} height={36} />
              </div>
              <FormControl fullWidth>
                <TextField
                  label="როგორ მოგმართოთ?"
                  name="name"
                  variant="standard"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name ? formik.errors.name : ""}
                  autoComplete="off"
                  slotProps={{ inputLabel: { shrink: true } }}
                  size="small"
                />
              </FormControl>
            </div>
            <div className={styles.inputField}>
              <FormControl fullWidth>
                <TextField
                  label={t("თქვენი მეილი")}
                  name="email"
                  variant="standard"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email ? formik.errors.email : ""}
                  autoComplete="off"
                  slotProps={{ inputLabel: { shrink: true } }}
                />
              </FormControl>
            </div>
            <div className={styles.inputField}>
              <FormControl fullWidth>
                <TextField
                  label={"მობილურის ნომერი"}
                  name="phoneNumber"
                  variant="standard"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber ? formik.errors.phoneNumber : ""
                  }
                  autoComplete="off"
                  slotProps={{ inputLabel: { shrink: true } }}
                />
              </FormControl>
            </div>
            <div className={styles.inputField}>
              <FormControl fullWidth>
                <TextField
                  label={t("გაქვთ რაიმე კომენტარი?")}
                  name="comment"
                  variant="standard"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.comment && Boolean(formik.errors.comment)
                  }
                  autoComplete="off"
                  slotProps={{ inputLabel: { shrink: true } }}
                />
              </FormControl>
            </div>
          </div>
          <div className={styles.sendBox}>
            {/* <div className={styles.agreeText}>
              By sending, I agree to the{" "}
              <Link href="/" target="_blank">
                terms and conditions.
              </Link>
            </div> */}
            <button type="submit" className={styles.sendBtn}>
              <Image
                className={styles.sendIcon}
                src={sendIconSrc}
                width={26}
                height={24}
                alt={t("გაგზავნა")}
              />
              {t("გაგზავნა")}
            </button>
          </div>
        </form>
      </div>
      <CustomSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </>
  );
};

export default memo(ContactForm);
