import { Routes, Route } from 'react-router-dom';
import Admin from './layouts/Admin';
import Website from './layouts/Website';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index path='website/*' element={<Website/>}/>
        <Route index path='admin/*' element={<Admin/>}/>
      </Route>
    </Routes>
  );
}

export default App;
