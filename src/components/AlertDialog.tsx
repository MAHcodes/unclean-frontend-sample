import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { cancel } from "../redux/features/dialogSlice";

const AlertDialog = () => {
  const {
    open = false,
    title,
    context,
    agree,
  } = useSelector((state: RootState) => state.dialog);
  const dispatch = useDispatch();

  const handleAgree = () => {
    agree();
    dispatch(cancel());
  };

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(cancel())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {context}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(cancel())}>Disagree</Button>
        <Button onClick={handleAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
