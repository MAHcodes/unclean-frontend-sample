import { yupResolver } from "@hookform/resolvers/yup";
import { Autocomplete, Chip, Stack, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import useTags from "../../../hooks/useTags";
import useUsers from "../../../hooks/useUsers";
import {
    closeFormDialog,
    useFormDialog
} from "../../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    tags: yup.array(yup.object({ id: yup.number(), name: yup.string() })),
    user: yup.object({ id: yup.number(), username: yup.string() }),
  })
  .required();

interface IUsersFormProps { }

const UsersForm: FC<IUsersFormProps> = () => {
  const dispatch = useAppDispatch();
  const { data: editData } = useFormDialog();
  const allTags = useTags();
  const users = useUsers();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const { title, description, tags, user } = data;

    Api.post("/Posts", {
      title,
      description,
      tagIds: tags.map((tag: any) => tag.id),
      userId: user.id,
    }).then((res) => {
      if (res.status === 200) {
        dispatch(
          createSnack({
            severity: "success",
            message: `Created post ${res?.data?.data?.title}!`,
          }),
        );
      }
      closeForm();
    });
  };

  const closeForm = () => {
    reset();
    dispatch(closeFormDialog());
  };

  return (
    <Dialog
      open
      handleClose={closeForm}
      handleSubmit={handleSubmit(onSubmit)}
      title="Create New Post"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            error={!!errors.title?.message}
            helperText={errors.title?.message}
            defaultValue={editData?.title}
            {...register("title")}
          />
          <TextField
            fullWidth
            multiline
            label="Description"
            error={!!errors.description?.message}
            helperText={!!errors.description?.message}
            defaultValue={editData?.description}
            {...register("description")}
          />
          <Autocomplete
            sx={{ width: "100%" }}
            options={allTags}
            getOptionLabel={(option: any) => option.name}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
            freeSolo
            multiple
            {...register("tags")}
            onChange={(_, newValue: any) => {
              setValue("tags", newValue);
            }}
            defaultValue={
              allTags.filter((tag) => editData?.tagIds.includes(tag.id))
            }
            renderTags={(value, props) =>
              value.map((option, index) => (
                <Chip
                  label={<>{option.name}</>}
                  {...props({ index })}
                  key={option.id}
                />
              ))
            }
            // TODO: isOptionEqualToValue
            renderInput={(params) => <TextField label="Add Tags" {...params} />}
          />
          <Autocomplete
            sx={{ width: "100%" }}
            options={users}
            getOptionLabel={(option: any) => option.username || ""}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.username}
              </li>
            )}
            freeSolo
            {...register("user")}
            onChange={(_, newValue: any) => {
              setValue("user", newValue);
            }}
            defaultValue={editData?.user}
            renderTags={(value, props) =>
              value.map((option, index) => (
                <Chip
                  label={<>{option.username}</>}
                  {...props({ index })}
                  key={option.id}
                />
              ))
            }
            renderInput={(params) => <TextField label="User" {...params} />}
          />
        </Stack>
      </form>
    </Dialog>
  );
};

export default UsersForm;
