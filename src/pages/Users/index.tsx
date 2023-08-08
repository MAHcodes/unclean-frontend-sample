import AddNewFAButton from "../../components/AddNewFAButton";
import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import { openFormDialog, useFormDialog } from "../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../redux/hooks";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";
import UsersForm from "./components/UsersForm";
import { defs } from "./components/UsersGrid";

const Users = () => {
  const dispatch = useAppDispatch();
  const { target } = useFormDialog();
  const isUsersTarget = target === ENTITY.USERS;

  return (
    <>
      <AgGridContainer defs={defs} />
      <AddNewFAButton
        entityName={ENTITY.USERS}
        action={() => dispatch(openFormDialog(ENTITY.USERS))}
      />
      {isUsersTarget && <UsersForm />}
    </>
  );
};

export default Users;
