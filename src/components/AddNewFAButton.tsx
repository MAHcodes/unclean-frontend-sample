import { Add } from "@mui/icons-material";
import { Fab, styled, Tooltip } from "@mui/material";
import { FC } from "react";
import { ENTITY } from "../services/Abstractions/EntitiesNames";

const StyledFAB = styled(Fab)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.text.primary,
  position: "fixed",
  bottom: theme.spacing(1),
  right: theme.spacing(1),
}));

interface IAddNewFAButtonProps {
  entityName: ENTITY;
  action: () => void;
}

const AddNewFAButton: FC<IAddNewFAButtonProps> = ({ entityName, action }) => {
  // removes the last character: Users => User
  const oneEntity = entityName.substring(0, entityName.length - 1);

  return (
    <>
      <Tooltip placement="top-end" title={`Create New ${oneEntity}`}>
        <StyledFAB color="primary" aria-label="add" onClick={action}>
          <Add />
        </StyledFAB>
      </Tooltip>
    </>
  );
};

export default AddNewFAButton;
