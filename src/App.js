import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import {Home, Browse, Signin, Signup} from './pages';
import  IsUserRedirect, {RedirectBrowse}  from './helpers/routes';
import { useAuthListener } from './hooks';


export default function App() {

// const user='carlos';
const {user}=useAuthListener();


  return (
    <Router>
      <Routes>
        <Route element={<IsUserRedirect  user = {user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact/>}>
          <Route path="/signin" element={<Signin/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Route>

        <Route element={<RedirectBrowse  user = {user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact/>}>
          <Route exact path="/browse" element={<Browse/>} />
        </Route>


        <Route element={<IsUserRedirect  user = {user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact/>}>
        <Route exact path={ROUTES.HOME} element={<Home/>} />
        </Route>

      </Routes>
   </Router>
  );
}
