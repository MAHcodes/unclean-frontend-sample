import { Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import AddNewFAButton from "../../../components/AddNewFAButton";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";
import { ENTITY } from "../../../services/Abstractions/EntitiesNames";

interface ITagsFormProps { }

interface ITagsFormInput {
  tag: string;
}

const TagsForm: FC<ITagsFormProps> = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ITagsFormInput>();

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data: ITagsFormInput) => {
    Api.post("/Tags", {
      name: data.tag,
    }).then((res) => {
      if (res.status === 200) {
        dispatch(
          createSnack({
            severity: "success",
            message: `Created tag ${res?.data?.data?.name}!`,
          }),
        );
      }
    });
    reset();
    closeForm();
  };

  return (
    <>
      <AddNewFAButton entityName={ENTITY.TAGS} action={openForm} />
      <Dialog
        open={open}
        handleClose={closeForm}
        handleSubmit={handleSubmit(onSubmit)}
        title="Create New Tag"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              error={!!errors.tag?.message}
              helperText={errors.tag?.message}
              {...register("tag", { required: true })}
            />
          </Stack>
        </form>
      </Dialog>
    </>
  );
};

export default TagsForm;
