import { Route, Routes } from "react-router-dom";

import React, { lazy, Suspense } from "react";

const LoginHome = lazy(() => import("../components/loginhome") )

const UnauthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Suspense fallback={ <h3> Cargando... </h3>}> 
                <LoginHome/>
                </Suspense>}>
                </Route>
            </Routes>
        </>
    )
}

export default UnauthRouter;