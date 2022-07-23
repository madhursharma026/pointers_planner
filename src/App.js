import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './content/css/App.css'
import Home from './pages/Home';
import NoPage from './pages/Nopage';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import SelectedServices from './pages/ServicesComponent/SelectedServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<><Home /> <title>Pointer Planner- Home</title></>} />
          <Route path="/gallery" element={<><Gallery /> <title>Pointer Planner- Gallery</title></>} />
          <Route path="/services" element={<><Services /> <title>Pointer Planner- Services</title></>} />
          <Route path="/selected_services" element={<><SelectedServices /> <title>Pointer Planner- Selected Services</title></>} />
          <Route path="*" element={<><NoPage /> <title>Error 404</title></>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
