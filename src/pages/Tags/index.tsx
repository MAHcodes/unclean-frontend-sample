import AddNewFAButton from "../../components/AddNewFAButton";
import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";
import { defs } from "./components/TagsGrid";

const Tags = () => {
  return <>
    <AgGridContainer defs={defs} />;
    <AddNewFAButton entityName={ENTITY.TAGS} />
  </>
};

export default Tags;
