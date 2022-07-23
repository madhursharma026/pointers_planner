import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './content/css/App.css'
import Home from './pages/Home';
import NoPage from './pages/Nopage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<><Home /> <title>Teabox: Buy Delicious Indian Teas Online - Delivered Fresh &ndash; Teabox IN</title></>} />
          <Route path="*" element={<><NoPage /> <title>Error 404</title></>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
