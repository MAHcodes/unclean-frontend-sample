import AddNewFAButton from "../../components/AddNewFAButton";
import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import {
    openFormDialog,
    useFormDialog
} from "../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../redux/hooks";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";
import TagsForm from "./components/TagsForm";
import { defs } from "./components/TagsGrid";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { target } = useFormDialog();
  const isTagsTarget = target === ENTITY.TAGS;

  return (
    <>
      <AgGridContainer defs={defs} />
      <AddNewFAButton
        entityName={ENTITY.TAGS}
        action={() => dispatch(openFormDialog(ENTITY.TAGS))}
      />
      {isTagsTarget && <TagsForm />}
    </>
  );
};

export default Tags;
