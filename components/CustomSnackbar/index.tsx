import React, { useEffect, useState } from "react";
import Image from "next/image";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

import successIconSrc from "@/assets/images/success-icon.svg";
import errorIconSrc from "@/assets/images/error-icon.svg";

export interface CustomSnackbarProps {
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  open?: boolean;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = ({
  message,
  severity = "success",
  autoHideDuration = 3000,
  open = false,
  onClose,
}: CustomSnackbarProps) => {
  const [localOpen, setLocalOpen] = useState(open);

  useEffect(() => {
    setLocalOpen(open);
  }, [open]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setLocalOpen(false);
    onClose?.();
  };

  return (
    <Snackbar
      open={localOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        icon={
          severity === "success" ? (
            <Image src={successIconSrc} alt="Success" width={24} height={24} />
          ) : (
            <Image src={errorIconSrc} alt="Error" width={24} height={24} />
          )
        }
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
