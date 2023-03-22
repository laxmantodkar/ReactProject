
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddCourse from './component/AddCourse';
import AllCourse from './component/AllCourse';
import Course from './component/Course';
import Header from './component/Header';
import Home from './component/Home';
import Manu from './component/Manu';
import Toast from './component/Toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {

  return (
    <div>
  <Router>
    <Container>
      <Row>
        <Header />
        <Col md="4">
          <Manu />
        </Col>
        <Col md="8">
          <Routes>  
            <Route path='/' element={<Home />} />
            <Route path='/add-course' element={<AddCourse />} />
            <Route path='/view-course' element={<AllCourse/>} />

          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>
</div>
  )
}

export default App;

