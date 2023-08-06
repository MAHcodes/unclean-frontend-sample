import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FC, ReactNode } from "react";

interface ICustomDialogProps {
  handleClose: () => void;
  handleSubmit: () => void;
  children: ReactNode;
  open: boolean;
  title: string;
}

const CustomDialog: FC<ICustomDialogProps> = ({
  open,
  title,
  handleClose,
  handleSubmit,
  children,
}) => {
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomDialog;
