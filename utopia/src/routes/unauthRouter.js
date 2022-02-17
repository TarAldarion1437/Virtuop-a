import { Route, Routes } from "react-router-dom";
import LoginHome from "../components/loginhome";

const UnauthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginHome/>}>
                </Route>
            </Routes>
        </>
    )
}

export default UnauthRouter;