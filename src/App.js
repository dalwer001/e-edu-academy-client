
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import CourseOrder from './Components/Dashboard/Course/CourseOrder/CourseOrder';
import CourseList from './Components/Dashboard/Course/CourseList/CourseList';
import Reviews from './Components/Dashboard/Course/Reviews/Reviews';
import AddCourse from './Components/Dashboard/AddCourse/AddCourse';

import { createContext, useState } from 'react';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import OrderList from './Components/Dashboard/orderList/orderList';
import ManageCourse from './Components/Dashboard/ManageCourse/ManageCourse';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';

toast.configure()

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/addCourse">
            <AddCourse></AddCourse>
          </PrivateRoute>

          <PrivateRoute  path="/courseOrder/:id">
            <CourseOrder></CourseOrder>
          </PrivateRoute>
          <PrivateRoute path="/courseList">
            <CourseList></CourseList>
          </PrivateRoute>

          <PrivateRoute path="/ordersList">
            <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute path="/manageCourses">
            <ManageCourse></ManageCourse>
          </PrivateRoute>

          <PrivateRoute path="/Reviews">
            <Reviews></Reviews>
          </PrivateRoute>

          

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
