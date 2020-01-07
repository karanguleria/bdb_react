import React from 'react';

function Dashboard() {
    return (
        <div class="Dashboard">
            {/* ================================    START MOST-VISITED AREA ================================= */}
            <section class="most-visited-area most-visited-area4">
                <div class="dashboard-tab">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="dashboard-wrap clearfix">
                                    <div class="dashboard-nav">
                                        {/* Nav tabs */}
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li role="presentation" class="active">
                                                <a href="#tab" role="tab" data-toggle="tab">
                                                    <span class="la la-list-alt"></span> Listings
                                    </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab1" role="tab" data-toggle="tab">
                                                    <span class="la la-user"></span> Profile
                                    </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab2" role="tab" data-toggle="tab">
                                                    <span class="la la-bookmark-o"></span> bookmarks
                                    </a>
                                            </li>
                                        </ul>
                                    </div>{/* end dashboard-nav */}
                                    <div class="dashboard-buttons">
                                        <a href="add-listing.html" class="theme__btn"><span class="la la-plus-circle"></span> create listing</a>
                                        <a href="#" class="theme__btn"><span class="la la-power-off"></span> sign out</a>
                                    </div>
                                </div>{/* end dashboard-wrap */}
                            </div>{/* end col-md-12 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end dashboard-tab */}
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="tab">
                        <div class="container">
                            <div class="row">
                                <div class="most-visited-wrap2 edit-listing-wrap clearfix">
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img1.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">Favorite Place Food Bank</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.5</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img2.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">beach blue boardwalk</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.6</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img3.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">hotel govendor</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.7</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img4.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">sticky band party</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.5</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img5.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">Sena Clothing Shopping Mall</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.6</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img3.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">hotel govendor</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.7</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-pencil-square"></span> edit</a>
                                                    <a href="javascript:void(0)" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                </div>{/* end most-visited-wrap */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </div>{/* end tab-pane */}
                    <div role="tabpanel" class="tab-pane fade" id="tab1">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="user-profile-action">
                                        <div class="user-pro-img">
                                            <img src="images/team8.jpg" alt="user-image" />
                                            <div class="dropdown edit-btn-wrap">
                                                <button class="edit-pic-btn" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="la la-photo"></span> Edit
                                    </button>
                                                <ul class="dropdown-menu" aria-labelledby="dLabel">
                                                    <li>
                                                        <div class="upload-btn-box">
                                                            <button class="theme__btn upload__btn">Upload a Photo...</button>
                                                            <input type="file" name="photo" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="delete-btn-box">
                                                            <button class="theme__btn delete__btn">Delete Photo</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* end dropdown */}
                                        </div>
                                        <div class="vcard-area">
                                            <div class="vcard-name">
                                                <h2 class="vcard__title">Mark Williamson</h2>
                                            </div>
                                            <div class="vcard-desc">
                                                <h2 class="vcard__note">
                                                    Sed ut perspiciatis unde omnis iste natus error
                                                    sit voluptatem accusantium doloremque laudantium
                                    </h2>
                                            </div>
                                            <ul class="vcard-details">
                                                <li><span class="la la-map-marker"></span> 101 Parkview, New York</li>
                                                <li><span class="la la-phone"></span> +7(111)123456789</li>
                                                <li><span class="la la-globe"></span> www.techydevs.com</li>
                                            </ul>
                                            <div class="vcard-content">
                                                <button class="theme__btn editprofile__btn" type="button"><span
                                                    class="la la-pencil-square"></span> Edit</button>
                                                <div class="vcard-form">
                                                    <div class="contact-form-action">
                                                        {/*Contact Form*/}
                                                        <form method="post">
                                                            <div class="row">
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <label class="label-text">Name</label>
                                                                    <input class="form-control" type="text" name="name" placeholder="Enter your name" />
                                                                </div>{/* end col-md-12 */}
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <label class="label-text">Bio Data</label>
                                                                    <textarea class="message-control form-control" name="message" placeholder="Add a bio"></textarea>
                                                                </div>{/* end col-md-12 */}
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <div class="vcard-address">
                                                                        <span class="la la-map-marker"></span>
                                                                        <input class="form-control" type="text" name="location" placeholder="Location" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <div class="vcard-address">
                                                                        <span class="la la-phone"></span>
                                                                        <input class="form-control" type="text" name="number" placeholder="Number" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <div class="vcard-address">
                                                                        <span class="la la-envelope-o"></span>
                                                                        <input class="form-control" type="email" name="email" placeholder="Email Address" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <div class="vcard-address">
                                                                        <span class="la la-youtube-play"></span>
                                                                        <input class="form-control" type="text" name="youtube" placeholder="Youtube URL" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                                <div class="col-md-12 col-sm-12 form-group">
                                                                    <div class="vcard-address">
                                                                        <span class="la la-globe"></span>
                                                                        <input class="form-control" type="text" name="website" placeholder="Website" />
                                                                    </div>
                                                                </div>{/* end col-md-12 */}
                                                            </div>{/* end row */}
                                                        </form>
                                                    </div>{/* end contact-form-action */}
                                                    <div class="bio-save-btn-box">
                                                        <button type="button" class="savechange__btn theme__btn">save changes</button>
                                                        <button type="button" class="cancel__btn theme__btn">Cancel</button>
                                                    </div>{/* end bio-save-btn-box */}
                                                </div>{/* end vcard-form */}
                                            </div>{/* end vcard-content */}
                                        </div>{/* end vcard-area */}
                                    </div>{/* end user-profile-action */}
                                </div>{/* end col-md-4 */}
                                <div class="col-md-8">
                                    <div class="user-form-action-wrap">
                                        <div class="vcard-title-wrap">
                                            <h3>Change Password</h3>
                                        </div>
                                        <div class="user-form-group">
                                            <div class="contact-form-action">
                                                {/*Contact Form*/}
                                                <form method="post">
                                                    <div class="row">
                                                        <div class="col-md-12 col-sm-12 form-group">
                                                            <label class="label-text">Current password</label>
                                                            <input class="form-control" type="text" name="password" placeholder="Current password" />
                                                        </div>{/* end col-md-12 */}
                                                        <div class="col-md-12 col-sm-12 form-group">
                                                            <label class="label-text">New password</label>
                                                            <input class="form-control" type="text" name="password" placeholder="Enter your new password" />
                                                        </div>{/* end col-md-12 */}
                                                        <div class="col-md-12 col-sm-12 form-group">
                                                            <label class="label-text">Confirm New password</label>
                                                            <input class="form-control" type="text" name="password" placeholder="Confirm new password" />
                                                        </div>{/* end col-md-12 */}
                                                        <div class="col-md-12 col-sm-12 form-group">
                                                            <button class="theme__btn" type="button">update password</button>
                                                        </div>{/* end col-md-12 */}
                                                    </div>{/* end row */}
                                                </form>
                                            </div>{/* end contact-form-action */}
                                        </div>{/* end user-form-group */}
                                    </div>{/* end user-form-action-wrap */}
                                    <div class="user-form-action-wrap delete-account-wrap">
                                        <div class="vcard-title-wrap">
                                            <h3>Delete Account</h3>
                                        </div>
                                        <div class="delete-account-content">
                                            <p><span>Warning:</span> Once you delete your account, there is no going back. Please be certain.</p>
                                            <button class="theme__btn delete-account-btn">delete my account</button>
                                        </div>{/* end delete-account-content */}
                                    </div>{/* end user-form-action-wrap */}
                                </div>{/* end col-md-8 */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </div>{/* end tab-pane */}
                    <div role="tabpanel" class="tab-pane fade" id="tab2">
                        <div class="container">
                            <div class="row">
                                <div class="most-visited-wrap2 edit-listing-wrap clearfix">
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img1.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">Favorite Place Food Bank</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.5</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img2.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">beach blue boardwalk</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.6</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-trash"></span> delete</a>
                                                </div>
                                            </div>
                                        </div>{/* end listing-content */}
                                    </div>{/* end most-visited-item */}
                                    <div class="most-visited-item col-md-4 col-sm-6">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img5.jpg" class="list-img" alt="" />
                                            </div>
                                        </a>
                                        <div class="listing-content">
                                            <div class="listing-row-content">
                                                <a href="listing-details.html">
                                                    <h4 class="listing-title">Sena Clothing Shopping Mall</h4>
                                                    <p class="listing-location">Bishop Avenue, New York</p>
                                                </a>
                                            </div>
                                            <div class="rating-row">
                                                <div class="rating-rating">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-half-full"></span>
                                                    <span class="la la-star last-star"></span>
                                                    <span class="rating-count">4.6</span>
                                                </div>
                                                <div class="edit-info">
                                                    <a href="javascript:void(0)" class="theme__btn"><span class="la la-trash"></span> delete</a>
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
        </div>
    );
}

export default Dashboard;