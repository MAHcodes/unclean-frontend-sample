import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { dialogIt } from "../redux/features/dialogSlice";
import { useLocation } from "react-router-dom";
import { Api } from "../configs/axios";
import { routesMap } from "../routes/settings";
import { ICellRendererParams } from "ag-grid-community";
import { useAppDispatch } from "../redux/hooks";
import { createSnack } from "../redux/Snacks/slices/snacks";

const DeleteButton = (props: ICellRendererParams) => {
  const { data, api } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const deleteIt = () => {
    Api.delete(routesMap[pathname as keyof typeof routesMap], {
      data: {
        id: data.id,
      },
    }).then((res) => {
      if (res.status === 200) {
        api.applyTransaction({ remove: [data] });
        dispatch(
          createSnack({
            severity: "success",
            message: "Record Deleted!",
          }),
        );
      }
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
