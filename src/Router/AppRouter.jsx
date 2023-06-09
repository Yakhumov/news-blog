import React , {useContext}  from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routers/router";
import { AuthContext } from "../context";
import { Loader } from "../components/Ui/Loader/Loader";


const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)    
   
  return (
    <Routes>
      {isAuth ? (
        privateRoutes.map((route) => (  
          <Route
            path={route.path}
            element={route.component}
            key={route.path}
          />
        ))
      ) : (
        publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={route.component}              
            key={route.path}
          />
        ))
      )}
    </Routes>
  );
};

export default AppRouter;
