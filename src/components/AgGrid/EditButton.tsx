import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import { ICellRendererParams } from "ag-grid-community";
import { useLocation } from "react-router-dom";
import {
    openFormDialog,
    setFormData
} from "../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../redux/hooks";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";

const EditButton = (props: ICellRendererParams) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleEdit = () => {
    dispatch(setFormData(data));
    switch (pathname) {
      case "/tags":
        dispatch(openFormDialog(ENTITY.TAGS));
        break;
      case "/users":
        dispatch(openFormDialog(ENTITY.USERS));
        break;
      case "/posts":
        dispatch(openFormDialog(ENTITY.POSTS));
        break;
    }
  };

  return (
    <Tooltip title="Edit record">
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
