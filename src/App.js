import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from './pages/About.jsx';
import AddListing from './pages/AddListing.jsx';
import AllCategory from './pages/AllCategory.jsx';
import AllLocation from './pages/AllLocation.jsx';
import AuthorDetails from './pages/AuthorDetails.jsx';
import BlogGrid from './pages/BlogGrid.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Invoice from './pages/Invoice.jsx';
import ListingDetails from './pages/ListingDetails.jsx';
import ListLeftSidebar from './pages/ListLeftSidebar.jsx';
import Login from './pages/Login.jsx';
import Page404 from './pages/Page404.jsx';
import Pricing from './pages/Pricing.jsx';
import SignUp from './pages/SignUp.jsx';
import TopAuthor from './pages/TopAuthor.jsx';
import TopPlace from './pages/TopPlace.jsx';
import UserProfile from './pages/UserProfile.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/add-listing">
              <AddListing />
            </Route>
            <Route path="/all-categories">
              <AllCategory />
            </Route>
            <Route path="/all-locations">
              <AllLocation />
            </Route>
            <Route path="/author-detail">
              <AuthorDetails />
            </Route>
            <Route path="/blog-grid">
              <BlogGrid />
            </Route>
            <Route path="/blog-single">
              <BlogSingle />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/invoice">
              <Invoice />
            </Route>
            <Route path="/listing-details">
              <ListingDetails />
            </Route>
            <Route path="/list-left-sidebar">
              <ListLeftSidebar />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/page-404">
              <Page404 />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/top-author">
              <TopAuthor />
            </Route>
            <Route path="/top-place">
              <TopPlace />
            </Route>
            <Route path="/user-profile">
              <UserProfile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
