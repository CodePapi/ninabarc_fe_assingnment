import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleBookDetails from './pages/SingleBookDetails';
import NavBar from './components/Layouts/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:bookId" element={<SingleBookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
