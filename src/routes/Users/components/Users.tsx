import DeleteButton from "../../../components/DeleteButton";

export const defs = [
  { field: "id" },
  { field: "username" },
  { field: "email" },
  { headerName: "Delete", cellRenderer: DeleteButton },
];
