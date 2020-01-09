import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function Dashboard() {
    return (
        <div className="Dashboard">
            <Header/>
            <Breadcrum/>
            {/* ================================    START MOST-VISITED AREA ================================= */}
            <section className="most-visited-area most-visited-area4">
                <div className="dashboard-tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dashboard-wrap clearfix">
                                    <div className="dashboard-nav">
                                        {/* Nav tabs */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active">
                                                <a href="#tab" role="tab" data-toggle="tab">
                                                    <span className="la la-list-alt"></span> Listings
                                    </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab1" role="tab" data-toggle="tab">
                                                    <span className="la la-user"></span> Profile
                                    </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab2" role="tab" data-toggle="tab">
                                                    <span className="la la-bookmark-o"></span> bookmarks
                                    </a>
                                            </li>
                                        </ul>
                                    </div>{/* end dashboard-nav */}
                                    <div className="dashboard-buttons">
                                        <a href="add-listing.html" className="theme__btn"><span className="la la-plus-circle"></span> create listing</a>
                                        <a href="#" className="theme__btn"><span className="la la-power-off"></span> sign out</a>
                                    </div>
                                </div>{/* end dashboard-wrap */}
                            </div>{/* end col-md-12 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end dashboard-tab */}
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active" id="tab">
                        <div className="container">
                            <div className="row">
                                <div className="most-visited-wrap2 edit-listing-wrap clearfix">
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">Favorite Place Food Bank</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.5</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">beach blue boardwalk</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.6</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">hotel govendor</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.7</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">sticky band party</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.5</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">Sena Clothing Shopping Mall</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.6</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">hotel govendor</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.7</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                </div>{/* end most-visited-wrap */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </div>{/* end tab-pane */}
                    <div role="tabpanel" className="tab-pane fade" id="tab1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="user-profile-action">
                                        <div className="user-pro-img">
                                            <img src="images/team1.jpg" alt="user-image" />
                                            <div className="dropdown edit-btn-wrap">
                                                <button className="edit-pic-btn" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="la la-photo"></span> Edit
                                    </button>
                                                <ul className="dropdown-menu" aria-labelledby="dLabel">
                                                    <li>
                                                        <div className="upload-btn-box">
                                                            <button className="theme__btn upload__btn">Upload a Photo...</button>
                                                            <input type="file" name="photo" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="delete-btn-box">
                                                            <button className="theme__btn delete__btn">Delete Photo</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* end dropdown */}
                                        </div>
                                        <div className="vcard-area">
                                            <div className="vcard-name">
                                                <h2 className="vcard__title">Mark Williamson</h2>
                                            </div>
                                            <div className="vcard-desc">
                                                <h2 className="vcard__note">
                                                    Sed ut perspiciatis unde omnis iste natus error
                                                    sit voluptatem accusantium doloremque laudantium
                                    </h2>
                                            </div>
                                            <ul className="vcard-details">
                                                <li><span className="la la-map-marker"></span> 101 Parkview, New York</li>
                                                <li><span className="la la-phone"></span> +7(111)123456789</li>
                                                <li><span className="la la-globe"></span> www.techydevs.com</li>
                                            </ul>
                                            <div className="vcard-content">
                                                <button className="theme__btn editprofile__btn" type="button"><span
                                                    className="la la-pencil-square"></span> Edit</button>
                                                <div className="vcard-form">
                                                    <div className="contact-form-action">
                                                        {/*Contact Form*/}
                                                        <form method="post">
                                                            <div className="row">
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <label className="label-text">Name</label>
                                                                    <input className="form-control" type="text" name="name" placeholder="Enter your name" />
                                                                </div>{/* end col-md-12 */}
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <label className="label-text">Bio Data</label>
                                                                    <textarea className="message-control form-control" name="message" placeholder="Add a bio"></textarea>
                                                                </div>{/* end col-md-12 */}
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <div className="vcard-address">
                                                                        <span className="la la-map-marker"></span>
                                                                        <input className="form-control" type="text" name="location" placeholder="Location" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <div className="vcard-address">
                                                                        <span className="la la-phone"></span>
                                                                        <input className="form-control" type="text" name="number" placeholder="Number" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <div className="vcard-address">
                                                                        <span className="la la-envelope-o"></span>
                                                                        <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <div className="vcard-address">
                                                                        <span className="la la-youtube-play"></span>
                                                                        <input className="form-control" type="text" name="youtube" placeholder="Youtube URL" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div className="col-md-12 col-sm-12 form-group">
                                                                    <div className="vcard-address">
                                                                        <span className="la la-globe"></span>
                                                                        <input className="form-control" type="text" name="website" placeholder="Website" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                            </div>{/* end row */}
                                                        </form>
                                                    </div>{/* end contact-form-action */}
                                                    <div className="bio-save-btn-box">
                                                        <button type="button" className="savechange__btn theme__btn">save changes</button>
                                                        <button type="button" className="cancel__btn theme__btn">Cancel</button>
                                                    </div>{/* end bio-save-btn-box */}
                                                </div>{/* end vcard-form */}
                                            </div>{/* end vcard-content */}
                                        </div>{/* end vcard-area */}
                                    </div>{/* end user-profile-action */}
                                </div>{/* end col-md-4 */}
                                <div className="col-md-8">
                                    <div className="user-form-action-wrap">
                                        <div className="vcard-title-wrap">
                                            <h3>Change Password</h3>
                                        </div>
                                        <div className="user-form-group">
                                            <div className="contact-form-action">
                                                {/*Contact Form*/}
                                                <form method="post">
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12 form-group">
                                                            <label className="label-text">Current password</label>
                                                            <input className="form-control" type="text" name="password" placeholder="Current password" />
                                                        </div>{/* end col-md-12 */}
                                                        <div className="col-md-12 col-sm-12 form-group">
                                                            <label className="label-text">New password</label>
                                                            <input className="form-control" type="text" name="password" placeholder="Enter your new password" />
                                                        </div>{/* end col-md-12 */}
                                                        <div className="col-md-12 col-sm-12 form-group">
                                                            <label className="label-text">Confirm New password</label>
                                                            <input className="form-control" type="text" name="password" placeholder="Confirm new password" />
                                                        </div>{/* end col-md-12 */}
                                                        <div className="col-md-12 col-sm-12 form-group">
                                                            <button className="theme__btn" type="button">update password</button>
                                                        </div>{/* end col-md-12 */}
                                                    </div>{/* end row */}
                                                </form>
                                            </div>{/* end contact-form-action */}
                                        </div>{/* end user-form-group */}
                                    </div>{/* end user-form-action-wrap */}
                                    <div className="user-form-action-wrap delete-account-wrap">
                                        <div className="vcard-title-wrap">
                                            <h3>Delete Account</h3>
                                        </div>
                                        <div className="delete-account-content">
                                            <p><span>Warning:</span> Once you delete your account, there is no going back. Please be certain.</p>
                                            <button className="theme__btn delete-account-btn">delete my account</button>
                                        </div>{/* end delete-account-content */}
                                    </div>{/* end user-form-action-wrap */}
                                </div>{/* end col-md-8 */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </div>{/* end tab-pane */}
                    <div role="tabpanel" className="tab-pane fade" id="tab2">
                        <div className="container">
                            <div className="row">
                                <div className="most-visited-wrap2 edit-listing-wrap clearfix">
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">Favorite Place Food Bank</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.5</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">beach blue boardwalk</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.6</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div className="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div className="listing-img-box">
                                                <img src="images/img1.jpg" className="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div className="listing-content">
                                            <div className="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 className="listing-title">Sena Clothing Shopping Mall</h4>
                                                    <p className="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div className="rating-row">
                                                <div className="rating-rating">
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star"></span>
                                                    <span className="la la-star-half-full"></span>
                                                    <span className="la la-star last-star"></span>
                                                    <span className="rating-count">4.6</span>
                                                </div>
                                                <div className="edit-info">
                                                    <a href="javascript:void(0)" className="theme__btn"><span className="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                </div>{/* end most-visited-wrap */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </div>{/* end tab-pane */}
                </div>{/* end tab-content */}
            </section>{/* end most-visited-area */}
            {/* ================================    END MOST-VISITED AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default Dashboard;