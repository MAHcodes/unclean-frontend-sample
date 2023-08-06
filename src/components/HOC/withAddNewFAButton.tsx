import { Add } from "@mui/icons-material";
import { Fab, styled, Tooltip } from "@mui/material";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";

const StyledFAB = styled(Fab)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.text.primary,
  position: "fixed",
  bottom: theme.spacing(1),
  right: theme.spacing(1),
}));

const withAddNewFAButton = (Comp: JSX.ElementType, entityName: ENTITY) => {
  // removes the last character: Users => User
  const oneEntity = entityName.substring(0, entityName.length - 1);

  const handleClick = () => {
    console.count(entityName);
  };

  const WithFABComp = (props: any) => {
    return (
      <>
        <Comp {...props} />
        <Tooltip placement="top-end" title={`Create New ${oneEntity}`}>
          <StyledFAB color="primary" aria-label="add" onClick={handleClick}>
            <Add />
          </StyledFAB>
        </Tooltip>
      </>
    );
  };
  return WithFABComp;
};

export default withAddNewFAButton;
