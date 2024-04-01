import React, { memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, row1, row2, row3, row4, row5, row6, row7, row8) {
  return { name, row1, row2, row3, row4, row5, row6, row7, row8 };
}

const tableRowColor = {
  color: "white",
};

function BasicTable(props) {
  const { tableData = null } = props;

  const rows = [
    createData("Data1", ...tableData?.ai_forecast?.quarter_data),
    createData("Data2", ...tableData?.final_forecast?.quarter_data),
    createData("Data3", ...tableData?.consumption),
  ];

  return (
    <TableContainer component={Paper} style={{ background: "#444" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows?.map((row) => {
            return (
              <TableRow
                key={row?.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="right" style={tableRowColor}>
                  {row?.name}
                </TableCell>
                <TableCell component="th" scope="row" style={tableRowColor}>
                  {row?.row1}
                </TableCell>
                <TableCell align="right" style={tableRowColor}>
                  {row?.row2}
                </TableCell>
                <TableCell align="right" style={tableRowColor}>
                  {row?.row3}
                </TableCell>
                <TableCell align="right" style={tableRowColor}>
                  {row?.row4}
                </TableCell>
                <TableCell align="right" style={tableRowColor}>
                  {row?.row5}
                </TableCell>
                <TableCell align="right" style={tableRowColor}>
                  {row?.row6}
                </TableCell>
                <TableCell align="right " style={tableRowColor}>
                  {row?.row7}
                </TableCell>
                <TableCell align="right" style={tableRowColor}>
                  {row?.row8}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(BasicTable);
