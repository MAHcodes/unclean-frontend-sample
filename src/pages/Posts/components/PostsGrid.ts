import { ColDef } from "ag-grid-community";

export const defs: ColDef[] = [
  { field: "id", filter: "agTextColumnFilter" },
  { field: "title", editable: true, filter: "agTextColumnFilter" },
  { field: "description", editable: true, filter: "agTextColumnFilter" },
  {
    field: "user.username",
    headerName: "Author",
    filter: "agTextColumnFilter",
  },
  { field: "tagIds", headerName: "Tags", filter: "agTextColumnFilter" },
  {
    field: "postedDate",
    headerName: "Post Date",
    flex: 1,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Delete",
    cellRenderer: "DeleteButton",
    filter: "agTextColumnFilter",
  },
];
