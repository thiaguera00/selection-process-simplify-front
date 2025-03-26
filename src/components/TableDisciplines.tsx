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
import { Subject } from "../types/subject";

interface SubjectTableProps {
  subjects: Subject[];
}

const SubjectTable: FC<SubjectTableProps> = ({ subjects }) => {
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
            {subjects.map((subject, index) => (
              <TableRow key={index}>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.department}</TableCell>
                <TableCell>{subject.credits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SubjectTable;
