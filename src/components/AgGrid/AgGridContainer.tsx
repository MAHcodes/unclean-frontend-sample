import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import DeleteButton from "./DeleteButton";
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
      DeleteButton: DeleteButton,
      TagNames: TagNames,
    }),
    [],
  );

  return (
    <div
      className="ag-theme-alpine"
      style={{ width: "100%", aspectRatio: "2/1" }}
    >
      <AgGridReact
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
