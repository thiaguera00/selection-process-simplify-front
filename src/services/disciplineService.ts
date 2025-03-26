const API_URL = import.meta.env.VITE_API_URL;

export const getAllDisciplines = async () => {
  const response = await fetch(`${API_URL}/disciplines`);
  const data = await response.json();
  return data;
};
