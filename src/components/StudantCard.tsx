import {
    Box,
    Card,
    Typography,
    Avatar,
    IconButton,
    LinearProgress,
  } from "@mui/material";
  import { ArrowBackIos, ArrowForwardIos, Person } from "@mui/icons-material";
  import { FC } from "react";
  import { Student } from "../types/students";
  
  interface StudentCardProps {
    student: Student;
    onPrev: () => void;
    onNext: () => void;
  }
  
  const statusColor = {
    Active: "success.main",
    Graduated: "primary.main",
    Inactive: "text.disabled",
    "On Leave": "warning.main",
  };
  
  const StudentCard: FC<StudentCardProps> = ({ student, onPrev, onNext }) => {
    return (
        
      <Card
        sx={{
          borderRadius: 3,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        {/* Topo - Avatar e Navegação */}
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
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
  
        {/* Nome */}
        <Typography variant="h6" fontWeight="bold" width="100%" textAlign="center">
          {student.name}
        </Typography>
        
        {/*Box de alinhamento de texto */}
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

        <Box display="flex" justifyContent="space-between" width="100%" >
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
  
        {/* Curso */}
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
  
       {/* Progresso */}
        <Box width="80%">
            <Typography fontSize="14px" color="text.secondary" mb={0.5}>
                Credits progress
            </Typography>

            <Box display="flex" alignItems="center" gap={0.2}>
                <Typography
                fontSize="14px"
                color="primary"
                fontWeight="bold"
                minWidth="35px"
                >
                {student.creditProgress}%
                </Typography>

                <LinearProgress
                variant="determinate"
                value={student.creditProgress}
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
      </Card>
    );
  };
  
  export default StudentCard;
  