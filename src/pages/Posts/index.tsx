import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import PostsForm from "./components/PostsForm";
import { defs } from "./components/PostsGrid";

const Posts = () => {
  return (
    <>
      <AgGridContainer defs={defs} />
      <PostsForm />
    </>
  );
};

export default Posts;
