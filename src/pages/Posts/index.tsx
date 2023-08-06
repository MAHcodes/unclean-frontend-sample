import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import withAddNewFAButton from "../../components/HOC/withAddNewFAButton";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";
import { defs } from "./components/PostsGrid";

const Posts = () => {
  return <AgGridContainer defs={defs} />;
};

export default withAddNewFAButton(Posts, ENTITY.POSTS);
