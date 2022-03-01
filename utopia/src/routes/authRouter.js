import { Route, Routes } from "react-router-dom";

import React, { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../components/home/dashboard") );
const Norms = lazy(() => import("../components/norms/norms") );
const Roles = lazy(() => import("../components/roles/roles") );
const Maps = lazy(() => import("../components/maps/maps") );
const Home = lazy(() => import("../components/home/home") );
const Library = lazy(() => import("../components/library/library") );

/* import Dashboard from "../components/home/dashboard";
import Norms from "../components/norms/norms";
import Roles from '../components/roles/roles';
import Maps from '../components/maps/maps';
import Home from "../components/home/home";
import Library from "../components/library/library"; */


const AuthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Suspense fallback={ <h3> Cargando... </h3>}> 
                    <Home/>
                </Suspense>}>
                    <Route path="normas" element={<Suspense fallback={ <h3> Cargando... </h3>}>   
                        <Norms/>
                    </Suspense>} />
                    <Route path="roles" element={<Suspense fallback={ <h3> Cargando... </h3>}>
                        <Roles/>
                    </Suspense>} />
                    <Route path="mapa" element={<Suspense fallback={ <h3> Cargando... </h3>}>
                        <Maps/>
                    </Suspense>} /> 
                    <Route path="library"   element={<Suspense fallback={ <h3> Cargando... </h3>}>
                        <Library/>
                    </Suspense>} />
                    <Route index element={<Suspense fallback={ <h3> Cargando... </h3>}>
                        <Dashboard/>
                    </Suspense>}/>
                </Route>
            </Routes>
        </>
    )
}

export default AuthRouter;