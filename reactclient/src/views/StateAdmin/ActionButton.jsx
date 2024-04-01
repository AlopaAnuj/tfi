import React from "react";
import { useTheme, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { ActionButtonStyle } from "../../components/customstyles/SuperAdminStyle";
const useStyles = () => {
  const theme = useTheme();
  return ActionButtonStyle(theme);
};
const ActionButton = (props) => {
  const styles = useStyles();

  const handleEditCondidateClick = () => {
    props.handleEditCondidate(props.id);
  };
  const handleDeleteCondidateClick = () => {
    props.handleDeleteCondidate(props.id);
  };
  return (
    <div sx={styles.root}>
      <Tooltip title="Edit" placement="top" arrow>
        <Button
          color="inherit"
          aria-haspopup="true"
          onClick={handleEditCondidateClick}
          sx={styles.ActnBtn}
        >
          <EditIcon sx={styles.actionFontSize} />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="top" arrow>
        <Button
          color="inherit"
          aria-haspopup="true"
          onClick={handleDeleteCondidateClick}
          sx={styles.ActnBtn}
        >
          <DeleteIcon sx={styles.deleteActionFontSize} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default ActionButton;
