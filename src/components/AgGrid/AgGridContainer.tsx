import { GetRowIdFunc } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import Options from "./Options";
import TagNames from "./TagNames";

interface IAgGridContainerProps {
  defs: any[];
}

const AgGridContainer: FC<IAgGridContainerProps> = ({ defs }) => {
  const data = useLoaderData();

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    [],
  );

  const components = useMemo(
    () => ({
      Options: Options,
      TagNames: TagNames,
    }),
    [],
  );

  const getRowId: GetRowIdFunc = (params) => params.data.id.toString();

  return (
    <div
      className="ag-theme-material"
      style={{ width: "100%", aspectRatio: "2/1" }}
    >
      <AgGridReact
        getRowId={getRowId}
        animateRows
        rowData={data as any[]}
        defaultColDef={defaultColDef}
        columnDefs={defs}
        rowSelection="multiple"
        enableRangeSelection
        components={components}
        sideBar
        pagination
      />
    </div>
  );
};

export default AgGridContainer;
