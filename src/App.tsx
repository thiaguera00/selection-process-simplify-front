import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SubjectTable from "./components/TableDisciplines";
import StudentCard from "./components/StudentCard";
import { Student } from "./types/students";
import { getAllStudents, createStudent, deleteStudent, updateStudent } from "./services/studentService";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [students, setStudents] = useState<Student[]>([]);


  useEffect(() => {
    getAllStudents().then(setStudents);
  }, []);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % students.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  const handleCreateStudent = async (formData: FormData) => {
    try {
      const newStudent = await createStudent(formData);
      setStudents((prev) => [...prev, newStudent]);
      setSelectedIndex(students.length);
    } catch (error) {
      console.error("Erro ao criar estudante:", error);
    }
  };

  const handleUpdateStudent = async (id: number, formData: FormData) => {
    try {
      const updated = await updateStudent(id, formData);
      setStudents((prev) =>
        prev.map((s) => (s.id === id ? updated : s))
      );
    } catch (error) {
      console.error("Erro ao atualizar estudante:", error);
    }
  };
  
  const handleDeleteStudent = async (id: number) => {
    try {
      await deleteStudent(id);
      const updatedList = students.filter((s) => s.id !== id);
      setStudents(updatedList);
      setSelectedIndex((prev) =>
        updatedList.length === 0 ? 0 : Math.min(prev, updatedList.length - 1)
      );
    } catch (error) {
      console.error("Erro ao deletar estudante:", error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={5}
          order={{ xs: 1, md: 2 }}
        >
          {students.length === 0 ? (
            <Typography>Loading student...</Typography>
          ) : (
            <StudentCard
              student={students[selectedIndex]}
              onNext={handleNext}
              onPrev={handlePrev}
              onCreate={handleCreateStudent}
              onUpdate={handleUpdateStudent}
              onDelete={handleDeleteStudent}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          order={{ xs: 2, md: 1 }}
        >
          {students.length === 0 ? (
            <Typography>Loading student...</Typography>
          ) : (
            <SubjectTable disciplines={students[selectedIndex].disciplines} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
