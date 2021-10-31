import './App.css';
import Header from './components/Shared/Header/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Pages/Home/Home/Home';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Contact from './components/Pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Pages/Login/Login/Login';
import ManageBookings from './components/Pages/ManageBookings/ManageBookings';
import MyBookings from './components/Pages/MyBookings/MyBookings';
import TravelDescriptions from './components/Pages/TravelDescriptions/TravelDescriptions';
// import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Pages/NotFound/NotFound';
import TourDescriptionsDelete from './components/Pages/ManageBookings/TourDescriptionsDelete/TourDescriptionsDelete';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/delete-travel">
              <TourDescriptionsDelete></TourDescriptionsDelete>
            </PrivateRoute>
            <PrivateRoute exact path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/tourDestination-details-to-book/:tourDestinationId">
              <TravelDescriptions></TravelDescriptions>
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    {/* 
    
                --404 Page-- 

                --Router--
                --Others Page--
                --Private Router--
                --Login Page--
                --Reload Same Page => Private Page--
                --Redirect PrivatePage => Login Page => PrivatePage--

                Backend
    
    */}
    </div>
  );
}

export default App;
