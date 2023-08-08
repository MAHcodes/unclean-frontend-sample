import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import {
    closeFormDialog,
    useFormDialog
} from "../../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";

const schema = yup
  .object({
    name: yup.string().required().min(2),
    email: yup.string().email().required(),
  })
  .required();

interface IUsersFormProps {}

const UsersForm: FC<IUsersFormProps> = () => {
  const dispatch = useAppDispatch();
  const { data: editData } = useFormDialog();

  console.log(editData);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: editData?.username,
      email: editData?.email,
    },
  });

  const closeForm = () => {
    reset();
    dispatch(closeFormDialog());
  };

  const onSubmit = (data: any) => {
    if (editData) {
      Api.put("/Users", {
        id: editData.id,
        name: data.name,
        email: data.email,
        postIds: editData?.posts?.map((post: { id: number }) => post.id),
      }).then((res) => {
        if (res.status === 200) {
          dispatch(
            createSnack({
              severity: "success",
              message: `Updated User ${res?.data?.data?.username}!`,
            }),
          );
        }
      });
    } else {
      Api.post("/Users", data).then((res) => {
        if (res.status === 200) {
          dispatch(
            createSnack({
              severity: "success",
              message: `Created User ${res?.data?.data?.username}!`,
            }),
          );
        }
      });
    }
    reset();
    closeForm();
  };

  return (
    <Dialog
      open
      handleClose={closeForm}
      handleSubmit={handleSubmit(onSubmit)}
      title="Create New User"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Name"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <TextField
            fullWidth
            label="Email"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            {...register("email")}
          />
        </Stack>
      </form>
    </Dialog>
  );
};

export default UsersForm;
