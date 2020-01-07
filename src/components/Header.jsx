import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import About from '../pages/About.jsx';
import AddListing from '../pages/AddListing.jsx';
import AllCategory from '../pages/AllCategory.jsx';
import AllLocation from '../pages/AllLocation.jsx';
import AuthorDetails from '../pages/AuthorDetails.jsx';
import BlogGrid from '../pages/BlogGrid.jsx';
import BlogSingle from '../pages/BlogSingle.jsx';
import Contact from '../pages/Contact.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Home from '../pages/Home.jsx';
import Invoice from '../pages/Invoice.jsx';
import ListingDetails from '../pages/ListingDetails.jsx';
import ListLeftSidebar from '../pages/ListLeftSidebar.jsx';
import Login from '../pages/Login.jsx';
import Page404 from '../pages/Page404.jsx';
import Pricing from '../pages/Pricing.jsx';
import SignUp from '../pages/SignUp.jsx';
import TopAuthor from '../pages/TopAuthor.jsx';
import TopPlace from '../pages/TopPlace.jsx';
import UserProfile from '../pages/UserProfile.jsx';

function Header() {
  return (
    <div className="Header">
      <Router>
        <header className="header-area">
          <div className="header-menu-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="menu-full-width">
                    <div className="logo">
                      <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                    </div>

                    <div className="main-menu-content">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">home</Link >
                          </li>
                          <li>
                            <a href="#">categories <span className="la la-angle-down"></span></a>
                            <ul className="dropdown-menu-item">
                              <li><Link to="/category">all categories</Link></li>
                              <li><Link to="/all-locations">all locations</Link></li>
                              <li><Link to="/top-place">top places<span className="new-page-badge">new</span></Link></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">listings <span className="la la-angle-down"></span></a>
                            <ul className="dropdown-menu-item">
                              <li><Link to="/list-left-sidebar">Listing Main<span className="new-page-badge">new</span></Link></li>
                              <li><Link to="/listing-details">listing details</Link></li>
                              <li><Link to="/add-listing">add listing</Link></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">pages <span className="la la-angle-down"></span></a>
                            <ul className="dropdown-menu-item">
                              <li><Link to="/user-profile">user profile</Link></li>
                              <li><Link to="/top-author">top authors<span className="new-page-badge">new</span></Link></li>
                              <li><Link to="/dashboard">dashboard</Link></li>
                              <li><Link to="/invoice">invoice</Link></li>
                              <li><Link to="/pricing">pricing</Link></li>
                              <li><Link to="/about">about</Link></li>
                              <li><Link to="/contact">contact</Link></li>
                              <li><Link to="/page-404">404 page</Link></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">blog <span className="la la-angle-down"></span></a>
                            <ul className="dropdown-menu-item">
                              <li><Link to="/blog-grid">blog grid</Link></li>
                              <li><Link to="/blog-left-sidebar">left sidebar<span className="new-page-badge">new</span></Link></li>
                              <li><Link to="/blog-right-sidebar">right sidebar<span className="new-page-badge">new</span></Link></li>
                              <li><Link to="/blog-single">blog detail</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                    </div>

                    <div className="logo-right-content">
                      <ul className="author-access-list">
                        <li>
                          <Link to="/login">login</Link>
                          <span className="or-text">or</span>
                          <Link to="/sign-up">sign up</Link>
                        </li>
                        <li>
                          <Link to="/add-listing" className="theme__btn">
                            <span className="la la-plus-circle"></span>
                            add listing
                        </Link>
                        </li>
                      </ul>
                      <div className="side-menu-open">
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                      </div>
                      <div className="side-user-menu-open">
                        <span className="la la-user"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav-container">
            <div className="humburger-menu">
              <div className="humburger-menu-lines side-menu-close"></div>
            </div>
            <div className="side-menu-wrap">
              <ul className="side-menu-ul">
                <li>
                  <a href="#">home <span className="la la-angle-down"></span></a>
                  <ul className="dropdown-menu-item">
                    <li><Link to="/">home one</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">categories <span className="la la-angle-down"></span></a>
                  <ul className="dropdown-menu-item">
                    <li><Link to="/all-categories">all categories</Link></li>
                    <li><Link to="/all-locations">all locations</Link></li>
                    <li><Link to="/top-place">top places<span className="new-page-badge">new</span></Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">listings <span className="la la-angle-down"></span></a>
                  <ul className="dropdown-menu-item">
                    <li><Link to="/listing-grid">listing grid</Link></li>
                    <li><Link to="/list-map-view">map view <span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/list-map-view2">map view 2 <span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/listing-list">listing list <span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/list-left-sidebar">left sidebar <span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/list-right-sidebar">right sidebar<span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/listing-details">listing details</Link></li>
                    <li><Link to="/add-listing">add listing</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">pages <span className="la la-angle-down"></span></a>
                  <ul className="dropdown-menu-item">
                    <li><Link to="/user-profile">user profile</Link></li>
                    <li><Link to="/top-author">top authors<span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/author-detail">author detail</Link></li>
                    <li><Link to="/dashboard">dashboard</Link></li>
                    <li><Link to="/invoice">invoice</Link></li>
                    <li><Link to="/pricing">pricing</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/page-404">404 page</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">blog <span className="la la-angle-down"></span></a>
                  <ul className="dropdown-menu-item">
                    <li><Link to="/blog-grid">blog grid</Link></li>
                    <li><Link to="/blog-left-sidebar">left sidebar<span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/blog-right-sidebar">right sidebar<span className="new-page-badge">new</span></Link></li>
                    <li><Link to="/blog-single">blog detail</Link></li>
                  </ul>
                </li>
              </ul>
              <div className="side-nav-button">
                <Link to="/login" className="theme__btn">login</Link>
                <Link to="/sign-up" className="theme__btn">sign up</Link>
              </div>
            </div>
          </div>
          <div className="side-user-panel">
            <div className="humburger-menu">
              <div className="humburger-menu-lines side-menu-close"></div>
            </div>
            <div className="side-menu-wrap side-user-menu-wrap">
              <div className="side-user-img" />
              <img src="images/team2.jpg" alt="image" />
              <h4 className="su__name">Mark Williamson</h4>
              <span className="su__meta">Joined 3 years ago</span>
              <div className="avatar-icon">
                <Link to="/dashboard" data-toggle="tooltip" data-placement="top" title="Change Avatar"> <i className="fa fa-plus"></i></Link>
              </div>
            </div>
            <ul className="side-menu-ul">
              <li><Link to="/dashboard"><span className="la la-user user-icon"></span> My Profile</Link></li>
              <li><Link to="/dashboard"><span className="la la-list-alt user-icon"></span> My Listings</Link></li>
              <li><Link to="/dashboard"><span className="la la-bookmark-o user-icon"></span> My Bookmarks</Link></li>
              <li><Link to="/dashboard"><span className="la la-plus-circle user-icon"></span> add listing</Link></li>
              <li><div className="dropdown-divider"></div></li>
              <li><a href="#"><span className="la la-question user-icon"></span> help</a></li>
              <li><a href="#"><span className="la la-gear user-icon"></span> Settings</a></li>
              <li><a href="#"><span className="la la-power-off user-icon"></span> Sign Out</a></li>
            </ul>
            <div className="side-user-search contact-form-action">
              <form method="post">
                <div className="form-group">
                  <input className="form-control" type="search" name="search-field" placeholder="Search by keywords" />
                  <button type="button" className="theme__btn search__btn">
                    <i className="fa fa-search"></i> Search
            </button>
                </div>
              </form>
            </div>
          </div>
        </header>

        {/* ================================     START BREADCRUMB AREA ================================= */}
        <section class="breadcrumb-area">
          <div class="breadcrumb-wrap">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="breadcrumb-content">
                    <h2 class="breadcrumb__title">blog grid</h2>
                    <ul class="breadcrumb__list">
                      <li class="active__list-item"><Link to="/">home</Link></li>
                      <li class="active__list-item">blog</li>
                      <li>blog grid</li>
                    </ul>
                  </div>{/* end breadcrumb-content */}
                </div>{/* end col-md-12 */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end breadcrumb-wrap */}
          <div class="bread-svg">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
            </svg>
          </div>{/* end bread-svg */}
        </section>{/* end breadcrumb-area */}
        {/* ================================     END BREADCRUMB AREA ================================= */}
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
  );
}

export default Header;
