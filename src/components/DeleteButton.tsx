import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { dialogIt } from "../redux/features/dialogSlice";
import { useLocation } from "react-router-dom";
import { Api } from "../configs/axios";
import { routesMap } from "../routes/settings";

const DeleteButton = ({ data }: { data: any }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const deleteIt = () => {
    Api.delete(routesMap[pathname as keyof typeof routesMap], {
      data: {
        id: data.id,
      },
    });
  };

  const handleDelete = () => {
    dispatch(
      dialogIt({
        title: "Delete!",
        context: `Are you sure you want to DELETE this record permanently?`,
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
