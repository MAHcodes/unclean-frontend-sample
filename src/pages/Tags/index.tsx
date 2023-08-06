import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import withAddNewFAButton from "../../components/HOC/withAddNewFAButton";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";
import { defs } from "./components/TagsGrid";

const Tags = () => {
  return <AgGridContainer defs={defs} />;
};

export default withAddNewFAButton(Tags, ENTITY.TAGS);
