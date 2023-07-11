import { useCallback, useMemo, useState } from "react";
import { groups } from "../data/groups";

export const useForm = () => {
  const [validated, setValidated] = useState(false);
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    group: groups[0],
  });
  const studentsJson = localStorage.getItem("students");
  const [students, setStudents] = useState(JSON.parse(studentsJson) || []);

  const handleChange = useCallback(
    (e) => {
      setStudent({ ...student, [e.target.name]: e.target.value });
    },
    [student]
  );

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      setValidated(true);
      const form = e.currentTarget;
      if (form.checkValidity()) {
        let newStudents = [...students, student];
        setStudents(newStudents);
        localStorage.setItem("students", JSON.stringify(newStudents));
        setStudent({
          firstName: "",
          lastName: "",
          age: "",
          group: groups[0],
        });
        setValidated(false);
      }
    },
    [student, students]
  );

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const results = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(search) ||
      student.lastName.toLowerCase().includes(search)
  );

  const getAverageAge = (students) => {
    console.log("getAverageAge");
    return (
      students.reduce((acc, student) => acc + +student.age, 0) / students.length
    );
  };

  const averageAge = useMemo(() => getAverageAge(students), [students]);

  return [
    validated,
    student,
    results,
    search,
    averageAge,
    handleSearch,
    handleChange,
    submit,
  ];
};
