import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CustomSnackbar from "@/components/CustomSnackbar";

import styles from "./styles.module.css";

import sendIconSrc from "@/assets/images/send-icon.svg";
import imageSrc from "@/assets/images/contact-img.png";

const Contact = () => {
  // const { t, i18n } = useTranslation(["common", "home"]);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    formik.resetForm();
  }, []);

  const validationSchema = yup.object({
    name: yup.string().required("required"),
    email: yup.string().email("invalid-email").required("required"),
    phoneNumber: yup
      .string()
      .required("required")
      .matches(/^\+?[0-9]{9,15}$/, "invalid-phone-number"),
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
          setSnackbarMessage("common:success-message");
          resetForm();
        } else {
          setSnackbarSeverity("error");
          setSnackbarMessage("common:error-message");
        }
      } catch (error) {
        setSnackbarSeverity("error");
        setSnackbarMessage("common:error-message");
      }
      setOpenSnackbar(true);
    },
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={styles.wrapper}
    >
      <div className={styles.imageBox}>
        <div className={styles.innerImg}>
          <Image src={imageSrc} alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.formWrapper}>
        <h3 className={styles.headlineTitle}>
          {/* {t("common:footer-form-title") */}
          ᲓᲐᲒᲕᲘᲢᲝᲕᲔ ᲡᲐᲙᲝᲜᲢᲐᲥᲢᲝ
        </h3>
        <div className={styles.formBox}>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.left}>
              <div className={styles.inputField}>
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
                    label={"თქვენი მეილი"}
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
                      formik.touched.phoneNumber
                        ? formik.errors.phoneNumber
                        : ""
                    }
                    autoComplete="off"
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                </FormControl>
              </div>
              <div className={styles.inputField}>
                <FormControl fullWidth>
                  <TextField
                    label={"გაქვთ რაიმე კომენტარი?"}
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
              <button type="submit" className={styles.sendBtn}>
                {"გაგზავნა"}
                <Image
                  className={styles.sendIcon}
                  src={sendIconSrc}
                  width={26}
                  height={24}
                  alt={"გაგზავნა"}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <CustomSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </motion.div>
  );
};

export default memo(Contact);
