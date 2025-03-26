import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { FC } from "react";
import { Disciplines } from "../types/disciplines";

interface SubjectTableProps {
  disciplines: Disciplines[];
}

const SubjectTable: FC<SubjectTableProps> = ({ disciplines }) => {
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        fontSize="32px"
        sx={{ mb: 1 }}
      >
        Subjects
      </Typography>

      <Divider sx={{ backgroundColor: "#E5E5EA" }} />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#8E8E93" }}>
                Code
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#8E8E93" }}>
                Title
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#8E8E93" }}>
                Department
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#8E8E93" }}>
                Credits
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {disciplines.map((discipline, index) => (
              <TableRow key={index}>
                <TableCell>{discipline.code}</TableCell>
                <TableCell>{discipline.name}</TableCell>
                <TableCell>{discipline.department}</TableCell>
                <TableCell>{discipline.credits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SubjectTable;
