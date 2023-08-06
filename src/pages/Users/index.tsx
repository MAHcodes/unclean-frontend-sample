import AgGridContainer from "../../components/AgGrid/AgGridContainer";
import UsersForm from "./components/UsersForm";
import { defs } from "./components/UsersGrid";

const Users = () => {
  return (
    <>
      <AgGridContainer defs={defs} />
      <UsersForm />
    </>
  );
};

export default Users;
