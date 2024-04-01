import React from "react";
import { useTheme, Button } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import Tooltip from "@mui/material/Tooltip";
import { ActionButtonStyle } from "../../components/customstyles/SuperAdminStyle";
const useStyles = () => {
  const theme = useTheme();
  return ActionButtonStyle(theme);
};
const SuperAdminActionButton = (props) => {
  const styles = useStyles();

  const handleViewAllCondidates = () => {
    props.handleCondidateList(props.stateId);
  };

  return (
    <div sx={styles.root}>
      <Tooltip title="View Condidates" placement="top" arrow>
        <Button
          color="inherit"
          aria-haspopup="true"
          onClick={handleViewAllCondidates}
          sx={styles.ActnBtn}
        >
          <TableViewIcon sx={styles.actionFontSize} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SuperAdminActionButton;
