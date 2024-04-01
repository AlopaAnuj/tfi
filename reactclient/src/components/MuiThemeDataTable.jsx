import React from "react";
import MUIDataTable from "mui-datatables";
import { useMediaQuery } from "@mui/material";

function MuiThemeDataTable(props) {
  let options = {
    sortOrder: props.sortOrder,
    onRowClick: props.onRowClick,
    expandableRows: props.expandableRows,
    renderExpandableRow: (rowData, rowMeta) =>
      props.renderExpandableRow(rowData, rowMeta),
    filterType: "checkbox",
    selectableRows: "none",
    download: props.hideDownloadIcon,
    search: props.hideSearchIcon,
    filter: props.hideFilterIcon,
    elevation: 0,
    viewColumns: props.viewColumnsIcon,
    rowHover: false,
    pagination: props.pagination !== false ? true : false,
    rowsPerPageOptions: [10, 25, 50],
    responsive: "standard",
    print: false,
    customSort: props.customSort,
    customRowRender: props.customRowRender,
    textLabels: {
      body: {
        noMatch: "No data available in table",
        toolTip: "",
      },
      pagination: {
        rowsPerPage: "Rows per page:",
        displayRows: "of",
      },
      toolbar: {
        search: "Search...",
        downloadCsv: "Download CSV",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
      filter: {
        title: "Filters",
        reset: "Reset",
      },
      viewColumns: {
        title: "Show Columns",
      },
    },
  };
  let columns = [];
  const isSmallerScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "md")
  );
  if (isSmallerScreen) {
    props.smallScreenTableColumnDisplayIndex.forEach((element) => {
      columns.push(props.columns[element]);
    });
  } else {
    options.expandableRows = false;
    columns = props.columns;
  }
  return props.rows.length > 0 ? (
    <MUIDataTable
      key={columns.length}
      title={props.title}
      data={props.rows}
      columns={columns}
      options={options}
    />
  ) : (
    <>
      <MUIDataTable
        key={columns.length}
        title={props.title}
        columns={columns}
        options={options}
        className="hidetableBody"
      />
    </>
  );
}
export default MuiThemeDataTable;
