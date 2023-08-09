import { ICellRendererParams } from "ag-grid-community";
import useTags from "../../hooks/useTags";

const TagNames = (props: ICellRendererParams) => {
  const { data } = props;

  const tags = useTags(data.tagIds);

  return tags.map((tag) => tag.name).join(", ");
};

export default TagNames;
