import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Invoice() {
    return (
        <div className="Invoice">
            {/* ================================    START INVOICE AREA ================================= */}
            <section className="invoice-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="invoice-content-wrap">
                                <h2 className="invoice-title">Thank you for your order!</h2>
                                <div className="invoice-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="invoice-logo">
                                                <img src="images/logo2.png" alt="logo" />
                                            </div>
                                        </div>{/* end col-md-6 */}
                                        <div className="col-md-6">
                                            <p className="invoice-details">
                                                <strong>Order:</strong> #00124 <br />
                                                <strong>Issued:</strong> 20/07/2019 <br />
                                                Due 7 days from date of issue
                                </p>
                                        </div>{/* end col-md-6 */}
                                    </div>{/* end row */}
                                </div>{/* end invoice-item */}
                                <div className="invoice-item">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="invoice-text">
                                                <h2>Invoice</h2>
                                            </div>
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-6">
                                            <div className="invoice-info">
                                                <strong className="customer-text">Supplier</strong>
                                                <p className="invoice-details invoice-details-two">
                                                    Dirto Ltd. <br />
                                                    36 Edgewater Street, Melbourne, AU  <br />
                                                    Australia, CF44 6ZL, AU <br />
                                                </p>
                                            </div>{/* end invoice-info */}
                                        </div>{/* end col-md-6 */}
                                        <div className="col-md-6">
                                            <div className="invoice-info invoice-info2">
                                                <strong className="customer-text">Customer</strong>
                                                <p className="invoice-details invoice-details-two">
                                                    Mark Wins <br />
                                                    21 St Andrews Lane, London, UK <br />
                                                    London, CF44 6ZL, UK <br />
                                                </p>
                                            </div>{/* end invoice-info */}
                                        </div>{/* end col-md-6 */}
                                    </div>{/* end row */}
                                </div>{/* end invoice-item */}
                                <div className="invoice-item invoice-table-wrap">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="invoice-table table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>Quantity</th>
                                                            <th>VAT</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Beef Dripping Glazed Steak</td>
                                                            <td>1</td>
                                                            <td>$0</td>
                                                            <td>$20.95</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Steak & Melted Cheese Brioche</td>
                                                            <td>1</td>
                                                            <td>$1.5</td>
                                                            <td>$16.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>{/* end table-responsive */}
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-4 col-md-offset-8">
                                            <div className="table-responsive table-responsive2">
                                                <table className="invoice-table-two table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Subtotal:</th>
                                                            <td><span>$36.99</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Discount:</th>
                                                            <td><span>-8%</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total Amount:</th>
                                                            <td><span>$27.95</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>{/* end table-responsive */}
                                        </div>{/* end col-md-4 */}
                                    </div>{/* end row */}
                                </div>{/* end invoice-item */}
                            </div>{/* end invoice-content-wrap */}
                        </div>{/* end col-md-10 */}
                    </div>{/* end row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="button-shared text-center">
                                <a href="javascript:window.print()" className="theme__btn"><span className="la la-print"></span> print this invoice</a>
                                <Link className="theme__btn back-to-home" to="/">home</Link>
                                <span className="la la-mail-reply-all"></span> back to home
                        </div>{/* end button-shared */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end invoice-area */}
            {/* ================================     END INVOICE AREA ================================= */}
        </div >
    );
}

export default Invoice;