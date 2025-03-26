import {
  Box,
  Card,
  Typography,
  Avatar,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { Add, ArrowBackIos, ArrowForwardIos, Person, Edit, Delete } from "@mui/icons-material";
import { FC, useState } from "react";
import { Student } from "../types/students";
import ModalCreateStudent from "./StudentModal";

interface StudentCardProps {
  student: Student;
  onPrev: () => void;
  onNext: () => void;
  onCreate?: (formData: FormData) => void;
  onUpdate?: (id: number, formData: FormData) => void;
  onDelete?: (id: number) => void;
}

const statusColor = {
  Active: "success.main",
  Graduated: "primary.main",
  Inactive: "text.disabled",
  "On Leave": "warning.main",
};

const StudentCard: FC<StudentCardProps> = ({ student, onPrev, onNext, onCreate, onUpdate, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleOpenCreate = () => {
    setEditMode(false);
    setOpenModal(true);
  };

  const handleOpenEdit = () => {
    setEditMode(true);
    setOpenModal(true);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        position: "relative",
      }}
    >
      {/* Botão de adicionar */}
      <IconButton
        sx={{ position: "absolute", top: 10, right: 10 }}
        onClick={handleOpenCreate}
      >
        <Add />
      </IconButton>

      {/* Botões de editar/deletar */}
      <Box sx={{ position: "absolute", top: 10, right: 50, display: "flex", gap: 1 }}>
        <IconButton onClick={handleOpenEdit}>
          <Edit fontSize="small" />
        </IconButton>
        <IconButton onClick={() => onDelete && onDelete(student.id)}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>

      {/* Topo - Avatar e Navegação */}
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        gap={2}
      >
        <IconButton onClick={onPrev}>
          <ArrowBackIos />
        </IconButton>

        <Avatar
          src={student.photoUrl}
          alt={student.name}
          sx={{ width: 80, height: 80 }}
        />

        <IconButton>
          <Person />
        </IconButton>

        <IconButton onClick={onNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Typography
        variant="h6"
        fontWeight="bold"
        width="90%"
        textAlign="center"
      >
        {student.name}
      </Typography>

      <Box
        sx={{
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          width: "100%",
        }}
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box width="50%">
            <Typography fontSize="14px" color="text.secondary">
              Status
            </Typography>
            <Typography fontSize="14px" color={statusColor[student.status]}>
              ● {student.status}
            </Typography>
          </Box>

          <Box width="50%">
            <Typography fontSize="14px" color="text.secondary">
              Registration
            </Typography>
            <Typography fontSize="14px">{student.registration}</Typography>
          </Box>
        </Box>

        <Box width="100%">
          <Typography fontSize="14px" color="text.secondary">
            Course
          </Typography>
          <Typography fontSize="14px">{student.course}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" width="100%">
          <Box width="50%">
            <Typography fontSize="14px" color="text.secondary">
              GPA
            </Typography>
            <Typography fontSize="14px">{student.gpa}</Typography>
          </Box>

          <Box width="50%">
            <Typography fontSize="14px" color="text.secondary">
              Age
            </Typography>
            <Typography fontSize="14px">{student.age}</Typography>
          </Box>
        </Box>

        <Box width="80%">
          <Typography fontSize="14px" color="text.secondary" mb={0.5}>
            Credits progress
          </Typography>

          <Box display="flex" alignItems="center" gap={0.2}>
            <Typography
              fontSize="14px"
              color="#00C7BE"
              fontWeight="bold"
              minWidth="35px"
            >
              {student.progress}%
            </Typography>

            <LinearProgress
              variant="determinate"
              value={student.progress}
              sx={{
                flexGrow: 1,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#E5F7F6",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#00C8B3",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Modal dentro do card */}
      <ModalCreateStudent
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={(formData) => {
          if (editMode) {
            onUpdate && onUpdate(student.id, formData);
          } else {
            onCreate && onCreate(formData);
          }
        }}
        initialData={editMode ? student : undefined}
      />
    </Card>
  );
};

export default StudentCard;
