import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import TagsForm from "./components/TagsForm";
import { defs } from "./components/TagsGrid";

const Tags = () => {
  return <>
    <AgGridContainer defs={defs} />
    <TagsForm />
  </>
};

export default Tags;
