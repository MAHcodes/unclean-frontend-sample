import { ICellRendererParams } from "ag-grid-community";
import useTags from "../../hooks/useTags";

const TagNames = (props: ICellRendererParams) => {
  const { data } = props;

  const tags = useTags(data.tagIds);

  return Object.values(tags).join(", ");
};

export default TagNames;
