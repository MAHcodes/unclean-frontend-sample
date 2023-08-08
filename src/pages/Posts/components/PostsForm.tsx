// TODO: migrate to react-hook-form
import { Autocomplete, Chip, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import useTags from "../../../hooks/useTags";
import useUsers from "../../../hooks/useUsers";
import { closeFormDialog } from "../../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";

const validate = (values: {
  title: string;
  description: string;
  tags: { id: number; name: string }[];
  user: { id: number; username: string };
}) => {
  const errors: { title?: string; description?: string; user?: string } = {};

  if (!values.title) {
    errors.title = "Post title is requiered";

    if (!values.description) {
      errors.description = "Post description is requiered";
    }

    if (!values.user) {
      errors.user = "User is requiered";
    }

    return errors;
  }
};

interface IUsersFormProps { }

const UsersForm: FC<IUsersFormProps> = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      tags: [],
      user: { id: 0, username: "" },
    },
    validate,
    onSubmit: (values) => {
      const { title, description, tags, user } = values;
      Api.post("/Posts", {
        title,
        description,
        tagIds: tags.map((tag) => tag.id),
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
    },
  });

  const tags = useTags();
  const users = useUsers();

  const closeForm = () => {
    formik.resetForm();
    dispatch(closeFormDialog());
  };

  return (
    <Dialog
      open
      handleClose={closeForm}
      handleSubmit={formik.handleSubmit}
      title="Create New Post"
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            error={formik.touched.title && !!formik.errors.title}
            helperText={formik.errors.title ? formik.errors.title : ""}
            {...formik.getFieldProps("title")}
          />
          <TextField
            fullWidth
            multiline
            label="Description"
            error={formik.touched.description && !!formik.errors.description}
            helperText={
              formik.errors.description ? formik.errors.description : ""
            }
            {...formik.getFieldProps("description")}
          />
          <Autocomplete
            sx={{ width: "100%" }}
            options={tags}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
            freeSolo
            multiple
            value={formik.values.tags}
            onChange={(_, newValue) => {
              formik.setFieldValue("tags", newValue);
            }}
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
            getOptionLabel={(option) => option.username || ""}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.username}
              </li>
            )}
            freeSolo
            value={formik.values.user.toString()}
            onChange={(_, newValue) => {
              formik.setFieldValue("user", newValue);
            }}
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
