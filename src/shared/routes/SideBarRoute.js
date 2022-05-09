import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "../../shared/routes/appRoutes";

const SidebarRoute = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {appRoutes.map(({ path, component }, i) => (
            <Route key={path + i} path={path} element={component} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default SidebarRoute;