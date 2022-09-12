
import './App.css';
import NavigationBar from './Component/NavigationBar';
import Footer from './Component/Footer';
import ViewStudents from './Component/ViewStudents';
import { Container } from 'react-bootstrap';
import Student from './Component/Student';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Container>
        <Routes>
        <Route path="/addStudent" element={<Student/>}/>
        <Route path="/updateStudent/:studentId" element={<Student/>}/>
        {<Route path="/viewStudents" element={<ViewStudents/>}/> }
        </Routes>
      </Container>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
