import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AddNewFAButton from "../../../components/AddNewFAButton";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";
import { ENTITY } from "../../../services/Abstractions/EntitiesNames";

const schema = yup
  .object({
    name: yup.string().required().min(2),
    email: yup.string().email().required(),
  })
  .required();

interface IUsersFormProps { }

const UsersForm: FC<IUsersFormProps> = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data: any) => {
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
    reset();
    closeForm();
  };

  return (
    <>
      <AddNewFAButton entityName={ENTITY.POSTS} action={openForm} />
      <Dialog
        open={open}
        handleClose={closeForm}
        handleSubmit={handleSubmit(onSubmit)}
        title="Create User"
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
    </>
  );
};

export default UsersForm;
