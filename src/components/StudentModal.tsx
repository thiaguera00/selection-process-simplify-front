import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import { Student } from "../types/students";
  
  interface StudentModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (formData: FormData) => void;
    initialData?: Student;
  }
  
  const StudentModal = ({ open, onClose, onSubmit, initialData }: StudentModalProps) => {
    const [form, setForm] = useState({
      name: "",
      age: "",
      registration: "",
      gpa: "",
      status: "ACTIVE",
      course: "",
      progress: "",
      photo: null as File | null,
    });
  
    useEffect(() => {
      if (initialData) {
        setForm({
          name: initialData.name,
          age: initialData.age.toString(),
          registration: initialData.registration,
          gpa: initialData.gpa.toString(),
          status: initialData.status,
          course: initialData.course,
          progress: initialData.progress.toString(),
          photo: null,
        });
      }
    }, [initialData]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setForm((prev) => ({ ...prev, photo: e.target.files![0] }));
      }
    };
  
    const handleSubmit = () => {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value !== null) {
          formData.append(key, value);
        }
      });
      onSubmit(formData);
      onClose();
    };
  
    return (
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>{initialData ? "Edit Student" : "Add Student"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField name="name" label="Name" value={form.name} onChange={handleChange} fullWidth />
          <TextField name="age" label="Age" type="number" value={form.age} onChange={handleChange} fullWidth />
          <TextField name="registration" label="Registration" value={form.registration} onChange={handleChange} fullWidth />
          <TextField name="gpa" label="GPA" type="number" value={form.gpa} onChange={handleChange} fullWidth />
          <TextField name="course" label="Course" value={form.course} onChange={handleChange} fullWidth />
          <TextField name="progress" label="Progress (%)" type="number" value={form.progress} onChange={handleChange} fullWidth />
          <TextField
            name="status"
            label="Status"
            value={form.status}
            onChange={handleChange}
            select
            fullWidth
          >
            <MenuItem value="ACTIVE">Active</MenuItem>
            <MenuItem value="GRADUATED">Graduated</MenuItem>
            <MenuItem value="INACTIVE">Inactive</MenuItem>
            <MenuItem value="ON_LEAVE">On Leave</MenuItem>
          </TextField>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {initialData ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default StudentModal;
  