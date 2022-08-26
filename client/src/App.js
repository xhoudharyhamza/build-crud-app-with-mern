import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import DeleteStudent from "./components/DeleteStudent";
import UpdateStudent from "./components/UpdateStudent";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Students />} />
        <Route exact path="/create" element={<CreateStudent />} />
        <Route exact path="/students" element={<Students />} />
        <Route path="/delete/:id" element={<DeleteStudent/>}/>
        <Route path="/update/:id" element={<UpdateStudent/>}/>
      </Routes>
    </>
  );
}

export default App;
