import { Autocomplete, Chip, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, useState } from "react";
import AddNewFAButton from "../../../components/AddNewFAButton";
import Dialog from "../../../components/Dialog";
import { Api } from "../../../configs/axios";
import useTags from "../../../hooks/useTags";
import useUsers from "../../../hooks/useUsers";
import { useAppDispatch } from "../../../redux/hooks";
import { createSnack } from "../../../redux/Snacks/slices/snacks";
import { ENTITY } from "../../../services/Abstractions/EntitiesNames";

const validate = (values: {
  title: string;
  description: string;
  tags: [number, string][];
  user: { [id: number]: string };
}) => {
  const errors: { title?: string; description?: string; userId?: string } = {};

  if (!values.title) {
    errors.title = "Post title is requiered";

    if (!values.description) {
      errors.description = "Post description is requiered";
    }

    if (!values.user) {
      errors.userId = "User is requiered";
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
      user: { id: 0, name: "" },
    },
    validate,
    onSubmit: (values) => {
      const { title, description, tags, user } = values;
      Api.post("/Posts", {
        title,
        description,
        tagIds: tags.map((tagId: [number]) => tagId[0]),
        userId: user.id,
      }).then((res) => {
        if (res.status === 200) {
          dispatch(
            createSnack({
              severity: "success",
              message: `Post User ${res?.data?.data?.title}!`,
            }),
          );
        }
        closeForm();
      });
    },
  });

  const tags = useTags();
  const users = useUsers();
  const [open, setOpen] = useState(false);

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <>
      <AddNewFAButton entityName={ENTITY.POSTS} action={openForm} />
      <Dialog
        open={open}
        handleClose={closeForm}
        handleSubmit={formik.handleSubmit}
        title="Create Post"
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
              options={Object.entries(tags)}
              getOptionLabel={(option) => option[0]} // BUG: getOptionLabel is used as a key by mui?
              freeSolo
              multiple
              value={formik.values.tags}
              onChange={(_, newValue) => {
                formik.setFieldValue("tags", newValue);
              }}
              renderTags={(value, props) =>
                value.map((option, index) => (
                  <Chip
                    label={<>{option[1]}</>}
                    {...props({ index })}
                    key={option[0]}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField label="Add Tags" {...params} />
              )}
            />
            <Autocomplete
              sx={{ width: "100%" }}
              options={Object.entries(users)}
              getOptionLabel={(option) => option[1]} // BUG: getOptionLabel is used as a key by mui?
              freeSolo
              value={formik.values.user.name}
              onChange={(_, newValue) => {
                formik.setFieldValue("userId", newValue ? newValue[0] : "");
              }}
              renderInput={(params) => <TextField label="User" {...params} />}
            />
          </Stack>
        </form>
      </Dialog>
    </>
  );
};

export default UsersForm;
