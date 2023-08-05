import { Alert, Snackbar } from "@mui/material";
import { closeSnack, useSnacks } from "../redux/Snacks/slices/snacks";
import { useAppDispatch } from "../redux/hooks";

const CustomSnackbar = () => {
  const snack = useSnacks();
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(closeSnack());

  return (
    <Snackbar
      {...snack}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={snack.severity}
        sx={{ width: "100%" }}
        onClose={handleClose}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
