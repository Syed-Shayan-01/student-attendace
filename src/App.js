import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./pages/student/Student";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Student />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
