import { Routes, Route } from 'react-router-dom';
import { Login } from './screens/Login/Login';

const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutesApp;