import { Routes, Route } from 'react-router-dom';
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
const Admin = () => {

    return (
        <>
        <h1>Admin layout</h1>
        <Routes>            
            <Route index element={<Home/>}/>
            <Route index path=':about' element={<About/>}/>
            <Route index path='contact' element={<Contact/>}/>
        </Routes>
        </>
    )
}

export default Admin;