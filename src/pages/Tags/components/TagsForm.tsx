import { Stack, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import {
    closeFormDialog,
    useFormDialog
} from "../../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";

interface ITagsFormProps {}

interface ITagsFormInput {
  tagname: string;
}

const TagsForm: FC<ITagsFormProps> = () => {
  const dispatch = useAppDispatch();
  const { data: editData } = useFormDialog();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ITagsFormInput>({
    defaultValues: {
      tagname: editData?.name,
    },
  });

  const closeForm = () => {
    reset();
    dispatch(closeFormDialog());
  };

  const onSubmit = (data: ITagsFormInput) => {
    if (editData) {
      Api.put("/Tags", {
        id: editData?.id,
        name: data.tagname,
        postIds: editData?.posts?.map((post: { id: number }) => post.id),
      }).then((res) => {
        if (res.status === 200) {
          dispatch(
            createSnack({
              severity: "success",
              message: `Updated tag ${res?.data?.data?.name}!`,
            }),
          );
        }
      });
    } else {
      Api.post("/Tags", {
        name: data.tagname,
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
    }

    reset();
    closeForm();
  };

  return (
    <Dialog
      open
      handleClose={closeForm}
      handleSubmit={handleSubmit(onSubmit)}
      title="Create New Tag"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Name"
            error={!!errors.tagname?.message}
            helperText={errors.tagname?.message}
            {...register("tagname", { required: true })}
          />
        </Stack>
      </form>
    </Dialog>
  );
};

export default TagsForm;
