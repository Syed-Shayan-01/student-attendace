import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./pages/student/Student";
import AttendForm from "./pages/attendaceForm/AttendForm";
import Image from "./pages/Image";
import Layout from "./pages/layout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Student />} />
          <Route path="/form" element={<AttendForm />} />
          <Route path="/Image" element={<Image />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
