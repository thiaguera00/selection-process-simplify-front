import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import SubjectTable from "./components/TableDataStudants";
import StudentCard from "./components/StudantCard";
import { Subject } from "./types/subject";
import { Student } from "./types/students" 

// Dados mockados
const mockSubjects: Subject[] = [
  { code: "BUS310", title: "Principles of Marketing", department: "Business", credits: 3 },
  { code: "CHEM301", title: "Organic Chemistry", department: "Chemistry", credits: 3 },
  { code: "CHEM301", title: "Introduction to Biology", department: "Biology", credits: 4 },
  { code: "CHEM301", title: "Introduction to Programming", department: "Computer Science", credits: 3 },
  { code: "CHEM301", title: "Art History", department: "Fine Arts", credits: 2 },
  { code: "CHEM301", title: "Principles of Microeconomics", department: "Economics", credits: 3 },
  { code: "CHEM301", title: "Classical Mechanics", department: "Physics", credits: 4 },
  { code: "CHEM301", title: "Probability and Statistics", department: "Statistics", credits: 3 },
  { code: "CHEM301", title: "Introduction to Ethics", department: "Philosophy", credits: 3 },
  { code: "CHEM301", title: "Literary Analysis", department: "English", credits: 2 },
];

const mockStudents: Student[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 21,
    registration: "20231234",
    gpa: 3.8,
    course: "Biotechnology and bioinformatics",
    status: "Active",
    creditProgress: 78,
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "2",
    name: "Lucas Silva",
    age: 22,
    registration: "20231235",
    gpa: 3.5,
    course: "Computer Engineering",
    status: "On Leave",
    creditProgress: 56,
    photoUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % mockStudents.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + mockStudents.length) % mockStudents.length);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <SubjectTable subjects={mockSubjects} />
        </Grid>
        <Grid item xs={12} md={5}>
          <StudentCard
            student={mockStudents[selectedIndex]}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
