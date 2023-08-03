import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

interface IMainGridProps {
  defs: any[];
}

const MainGrid: FC<IMainGridProps> = ({ defs }) => {
  const data = useLoaderData();

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
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
        sideBar
      />
    </div>
  );
};

export default MainGrid;
