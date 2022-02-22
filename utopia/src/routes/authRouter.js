import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/home/dashboard";
import Norms from "../components/norms/norms";
import Roles from '../components/roles/roles';
import Maps from '../components/maps/maps';
import Home from "../components/home/home";


const AuthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="normas" element={<Norms/>} />
                    <Route path="roles" element={<Roles/>} />
                    <Route path="mapa" element={<Maps/>} />
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default AuthRouter;