import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { dialogIt } from "../redux/features/dialogSlice";

interface IDeleteButtonProps {
  action: () => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ data }) => {
  const dispatch = useDispatch();

  const deleteIt = () => {
    console.log("deleted");
  };

  const handleDelete = () => {
    dispatch(
      dialogIt({
        title: `Delete Post!`,
        context: `Are you sure you want to delete permenently?`,
        agree: deleteIt,
      }),
    );
  };

  return (
    <Tooltip title="Delete record">
      <IconButton color="error" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
