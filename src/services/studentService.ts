import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllStudents = async () => {
    const response = await axios.get(`${API_URL}/students`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.data;
};

export const createStudent = async (formData: FormData) => {
    const response = await axios.post(`${API_URL}/students`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export const updateStudent = async (id: number, formData: FormData) => {
    const response = await axios.put(`${API_URL}/students/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export const deleteStudent = async (id: number) => {
    await axios.delete(`${API_URL}/students/${id}`);
};
