import React from 'react';

function AddListing() {
    return (
        <div className="AddListng">
            {/* ================================ START BREADCRUMB AREA ================================= */}
            <section className="breadcrumb-area">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">add listing</h2>
                                    <ul className="breadcrumb__list">
                                        <li className="active__list-item"><a href="index.html">home</a></li>
                                        <li className="active__list-item">listings</li>
                                        <li>add listing</li>
                                    </ul>
                                </div>{/* end breadcrumb-content */}
                            </div>{/* end col-md-12 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end breadcrumb-wrap */}
                <div className="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                </div>{/* end bread-svg */}
            </section>{/* end breadcrumb-area */}
            {/* ================================ END BREADCRUMB AREA ================================= */}
            {/* ================================ START ADD-LISTING AREA ================================= */}
            <section className="add-listing-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">General Information</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Listing Title</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Enter your listing title" required="" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Keywords</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Keywords should be separated by commas" required="" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Description</label>
                                                    <textarea className="message-control form-control" name="message" placeholder="Write your listing description"></textarea>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Category</label>
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Select a Category">Select a Category</option>
                                                            <option value="1">Shops</option>
                                                            <option value="2">Hotels</option>
                                                            <option value="3">Restaurants</option>
                                                            <option value="4">Fitness</option>
                                                            <option value="5">Travel</option>
                                                            <option value="6">Salons</option>
                                                            <option value="7">Event</option>
                                                            <option value="8">Business</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-12 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Add Location</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Address</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Your address" required="" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Temporary Address</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Temporary address" required="" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">City</label>
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Select a City">Select a City</option>
                                                            <option value="1">New York</option>
                                                            <option value="2">Los Angeles</option>
                                                            <option value="3">Chicago</option>
                                                            <option value="4">Phoenix</option>
                                                            <option value="5">Washington</option>
                                                            <option value="6">Boston</option>
                                                            <option value="7">Philadelphia</option>
                                                            <option value="8">Baltimore</option>
                                                            <option value="9">Seattle</option>
                                                            <option value="10">San Francisco</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">State</label>
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Select a State">Select a State</option>
                                                            <option value="1">California</option>
                                                            <option value="2">Florida</option>
                                                            <option value="3">Texas</option>
                                                            <option value="4">Hawaii</option>
                                                            <option value="5">Arizona</option>
                                                            <option value="6">Michigan</option>
                                                            <option value="7">New Jersey</option>
                                                            <option value="8">Georgia</option>
                                                            <option value="9">South Carolina</option>
                                                            <option value="10">Montana</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Country</label>
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Select a Country">Select a Country</option>
                                                            <option value="1">Australia</option>
                                                            <option value="2">AB Canada</option>
                                                            <option value="3">Amsterdam Natherlands</option>
                                                            <option value="4">Austin TX, USA</option>
                                                            <option value="5">Bengaluru Karnataka, India</option>
                                                            <option value="6">Berlin, Germany</option>
                                                            <option value="7">Barcelona, Spain</option>
                                                            <option value="8">USA</option>
                                                            <option value="9">UK</option>
                                                            <option value="10">United Arab Emirates</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">
                                                        Zip-Code
                                        </label>
                                                    <input className="form-control" type="text" name="name" placeholder="Zip-Code" required="" />
                                                </div>{/* end col-md-6 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Full Details</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Owner Name</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Name" required="" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">E-mail</label>
                                                    <input className="form-control" type="email" name="email" placeholder="E-mail address" required="" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Phone</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Number" required="" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Website</label>
                                                    <input className="form-control" type="text" name="name" placeholder="www.techydevs.com" required="" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Facebook Link</label>
                                                    <input className="form-control" type="text" name="name" placeholder="https://www.facebook.com/" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Twitter Link</label>
                                                    <input className="form-control" type="text" name="name" placeholder="https://www.twitter.com/" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Google Plus</label>
                                                    <input className="form-control" type="text" name="name" placeholder="https://plus.google.com" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Linkedin Link</label>
                                                    <input className="form-control" type="text" name="name" placeholder="www.linkedin.com/" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Description</label>
                                                    <textarea className="message-control form-control" name="message" placeholder="Write description"></textarea>
                                                </div>{/* end col-md-12 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Gallery</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12 upload-btn-wrapper">
                                            <div className="custom-file">
                                                <div className="add-gallery-text">
                                                    <i className="la la-image"></i>
                                                    <span> Click here or drop files to upload</span>
                                                </div>
                                                <input type="file" name="photo" />
                                            </div>{/* end custom-file */}
                                        </div>{/* end col-md-12 */}
                                    </div>{/* end row */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Amenities</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb1" />
                                        <label for="chb1">Security Cameras</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb2" />
                                        <label for="chb2">Elevator in Building</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb3" />
                                        <label for="chb3">Wireless Internet</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb4" />
                                        <label for="chb4">Wheelchair Accessible</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb5" />
                                        <label for="chb5">Laundry Room in Building</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb6" />
                                        <label for="chb6">Alarm System</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb7" />
                                        <label for="chb7">Smoking Allowed</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb8" />
                                        <label for="chb8">Free Parking on Street</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb9" />
                                        <label for="chb9">Friendly Workspace</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb10" />
                                        <label for="chb10">Electricity</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb11" />
                                        <label for="chb11">Attached Garage</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb12" />
                                        <label for="chb12">Bike Parking</label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb15" />
                                        <label for="chb15">Telephone</label>
                                    </div>{/* end custom-checkbox */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Opening Hours</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Monday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Tuesday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Wednesday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Thursday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Friday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Saturday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 form-group time-label-group">
                                                    <label className="label-text">Sunday</label>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Opening Time">Opening Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <div className="add-cat-wrap">
                                                        <select>
                                                            <option data-display="Closing Time">Closing Time</option>
                                                            <option value="closed">Closed</option>
                                                            <option value="1">1:00am</option>
                                                            <option value="2">2:00am</option>
                                                            <option value="3">3:00am</option>
                                                            <option value="4">4:00am</option>
                                                            <option value="5">5:00pm</option>
                                                            <option value="6">6:00pm</option>
                                                            <option value="7">7:00pm</option>
                                                            <option value="8">8:00pm</option>
                                                            <option value="9">9:00am</option>
                                                            <option value="10">10:00am</option>
                                                            <option value="11">11:00am</option>
                                                            <option value="12">12:00am</option>
                                                            <option value="13">1:00pm</option>
                                                            <option value="14">2:00pm</option>
                                                            <option value="15">3:00pm</option>
                                                            <option value="16">4:00pm</option>
                                                            <option value="17">5:00pm</option>
                                                            <option value="18">6:00pm</option>
                                                            <option value="19">7:00pm</option>
                                                            <option value="20">8:00pm</option>
                                                            <option value="21">9:00pm</option>
                                                            <option value="22">10:00pm</option>
                                                            <option value="23">11:00pm</option>
                                                            <option value="24">12:00pm</option>
                                                        </select>
                                                    </div>{/* end add-cat-wrap */}
                                                </div>{/* end col-md-6 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Pricing</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Title</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Title" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Price</label>
                                                    <input className="form-control" type="text" name="name" placeholder="USD Price" />
                                                </div>{/* end col-md-6 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Description</label>
                                                    <textarea className="message-control form-control" name="message" placeholder="Write description"></textarea>
                                                </div>{/* end col-md-12 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                        <div className="col-md-10 col-md-offset-1">
                            <div className="add-list-form-item add-list-sub-btn-box">
                                <div className="add-list-content">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb13" />
                                        <label for="chb13">I Agree to Dirto's <a href="#">Privacy Policy</a></label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="chb14" />
                                        <label for="chb14">I Agree to Dirto's <a href="#">Terms of Services</a></label>
                                    </div>{/* end custom-checkbox */}
                                    <div className="add-sub-btn">
                                        <a href="#" className="theme__btn submit__btn">submit listing</a>
                                    </div>{/* end add-sub-btn */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-10 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end add-listing-area */}
            {/* ================================ END ADD-LISTING AREA ================================= */}
        </div>
    )
}

export default AddListing;