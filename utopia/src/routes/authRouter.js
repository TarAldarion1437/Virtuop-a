import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/home/dashboard";
import Home from "../components/home/home";


const AuthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default AuthRouter;