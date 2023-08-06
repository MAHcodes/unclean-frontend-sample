import { TextField } from "@mui/material";
import { useState } from "react";
import AddNewFAButton from "../../../components/AddNewFAButton";
import Dialog from "../../../components/Dialog";
import { ENTITY } from "../../../services/Abstractions/EntitiesNames";

interface IPostsFormProps { }

const PostsForm = () => {
  const [open, setOpen] = useState(false);

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <>
      <AddNewFAButton entityName={ENTITY.POSTS} action={openForm} />
      <Dialog open={open} handleClose={closeForm}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </Dialog>
    </>
  );
};

export default PostsForm;
