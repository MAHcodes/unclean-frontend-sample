import { ColDef } from "ag-grid-community";

export const defs: ColDef[] = [
  { field: "id" },
  { field: "title", editable: true },
  { field: "description", editable: true },
  { field: "user.username", headerName: "Author" },
  { field: "tagIds", headerName: "Tags" },
  { field: "postedDate", headerName: "Post Date", flex: 1 },
  { headerName: "Delete", cellRenderer: "DeleteButton" },
];
