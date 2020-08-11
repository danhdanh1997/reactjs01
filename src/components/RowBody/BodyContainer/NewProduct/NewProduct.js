import React, { Component } from 'react';

class NewProduct extends Component {
    render() {
        return (

            <div className="well well-small">
                <h3>New Products </h3>
                <hr className="soften" />
                <div className="row-fluid">
                    <div id="newProductCar" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="item active">
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            {/* <a href="cart.html" className="tag" /> */}
                                            <a href="product_details.html"><img src="assets/img/bootstrap-ring.png" alt="bootstrap-ring" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            {/* <a href="cart.html" className="tag" /> */}
                                            <a href="product_details.html"><img src="assets/img/i.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            {/* <a href="cart.html" className="tag" /> */}
                                            <a href="product_details.html"><img src="assets/img/g.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            <a href="product_details.html"><img src="assets/img/s.png" alt="" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            <a href="product_details.html"><img src="assets/img/i.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            <a href="product_details.html"><img src="assets/img/f.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            <a href="product_details.html"><img src="assets/img/h.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                            <a href="product_details.html"><img src="assets/img/j.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#newProductCar" data-slide="prev">‹</a>
                        <a className="right carousel-control" href="#newProductCar" data-slide="next">›</a>
                    </div>
                </div>
                <div className="row-fluid">
                    <ul className="thumbnails">
                        <li className="span4">
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                <a href="product_details.html"><img src="assets/img/b.jpg" alt="" /></a>
                                <div className="caption cntr">
                                    <p>Manicure &amp; Pedicure</p>
                                    <p><strong> $22.00</strong></p>
                                    <h4><a className="shopBtn" href="cart.html" title="add to cart"> Add to cart </a></h4>
                                    <div className="actionList">
                                        <a className="pull-left" href="cart.html">Add to Wish List </a>
                                        <a className="pull-left" href="cart.html"> Add to Compare </a>
                                    </div>
                                    <br className="clr" />
                                </div>
                            </div>
                        </li>
                        <li className="span4">
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                <a href="product_details.html"><img src="assets/img/c.jpg" alt="" /></a>
                                <div className="caption cntr">
                                    <p>Manicure &amp; Pedicure</p>
                                    <p><strong> $22.00</strong></p>
                                    <h4><a className="shopBtn" href="cart.html" title="add to cart"> Add to cart </a></h4>
                                    <div className="actionList">
                                        <a className="pull-left" href="cart.html">Add to Wish List </a>
                                        <a className="pull-left" href="cart.html" >Add to Compare </a>
                                    </div>
                                    <br className="clr" />
                                </div>
                            </div>
                        </li>
                        <li className="span4">
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                                <a href="product_details.html"><img src="assets/img/a.jpg" alt="" /></a>
                                <div className="caption cntr">
                                    <p>Manicure &amp; Pedicure</p>
                                    <p><strong> $22.00</strong></p>
                                    <h4><a className="shopBtn" href="cart.html" title="add to cart"> Add to cart </a></h4>
                                    <div className="actionList">
                                        <a className="pull-left" href="cart.html">Add to Wish List </a>
                                        <a className="pull-left" href="cart.html"> Add to Compare </a>
                                    </div>
                                    <br className="clr" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NewProduct;
