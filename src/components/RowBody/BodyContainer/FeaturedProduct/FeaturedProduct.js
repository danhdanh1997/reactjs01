import React, { Component } from 'react';

class FeaturedProduct extends Component {
    render() {
        return (
            <div className="well well-small">
                <h3><a className="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span className="icon-plus" /></a> Featured Products </h3>
                <hr className="soften" />
                <div className="row-fluid">
                    <ul className="thumbnails">
                        <li className="span4">
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                <a href="product_details.html"><img src="assets/img/d.jpg" alt="" /></a>
                                <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <h4>
                                        <a className="defaultBtn" href="product_details.html" title="Click to view"><span className="icon-zoom-in" /></a>
                                        <a className="shopBtn" href="cart.html" title="add to cart"><span className="icon-plus" /></a>
                                        <span className="pull-right">$22.00</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="span4">
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                <a href="product_details.html"><img src="assets/img/e.jpg" alt="" /></a>
                                <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <h4>
                                        <a className="defaultBtn" href="product_details.html" title="Click to view"><span className="icon-zoom-in" /></a>
                                        <a className="shopBtn" href="cart.html" title="add to cart"><span className="icon-plus" /></a>
                                        <span className="pull-right">$22.00</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="span4">
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                <a href="product_details.html"><img src="assets/img/f.jpg" alt="" /></a>
                                <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <h4>
                                        <a className="defaultBtn" href="product_details.html" title="Click to view"><span className="icon-zoom-in" /></a>
                                        <a className="shopBtn" href="cart.html" title="add to cart"><span className="icon-plus" /></a>
                                        <span className="pull-right">$22.00</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FeaturedProduct;
