import BlogDetails from './BlogDetails';
import CreateNewBlog from './CreateNewBlog';
import Home from './Home';
import Navbar from './Navbar';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CreateNewBlog' element={<CreateNewBlog />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
