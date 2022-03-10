import {Routes, Route, RouteObject, useRoutes, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Home";
import {RequireAuth} from "./navigationGuards";
import {AuthProvider} from "../providers/AuthProvider";
import AuthLayout from "../layouts/AuthLayout";
import ConfirmSignUp from "../pages/Auth/ConfirmSignUp";

export default function AppRoutes(): JSX.Element {

  const authRoutes: RouteObject[] = [
    {
      path: 'signup',
      element: <SignUp/>
    },
    {
      path: 'signin',
      element: <SignIn/>
    },
    {
      path: 'confirm',
      element: <ConfirmSignUp/>
    }
  ]

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }/>
        <Route element={<AuthLayout/>}>
          {authRoutes.map(route => <Route path={route.path} element={route.element} key={route.path}/>)}
        </Route>
      </Routes>
    </AuthProvider>
  )
}
