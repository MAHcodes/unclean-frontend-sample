import AddNewFAButton from "../../components/AddNewFAButton";
import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import {
    openFormDialog,
    useFormDialog
} from "../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../redux/hooks";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";
import PostsForm from "./components/PostsForm";
import { defs } from "./components/PostsGrid";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { target } = useFormDialog();
  const isPostsTarget = target === ENTITY.POSTS;

  return (
    <>
      <AgGridContainer defs={defs} />
      <AddNewFAButton
        entityName={ENTITY.POSTS}
        action={() => dispatch(openFormDialog(ENTITY.POSTS))}
      />
      {isPostsTarget && <PostsForm />}
    </>
  );
};

export default Posts;
