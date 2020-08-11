import React, { Component } from 'react';

class PopularProduct extends Component {
    render() {
        return (
            <div className="well well-small">
                <a className="btn btn-mini pull-right" href="cart.html">View more <span className="icon-plus" /></a>
Popular Products
            </div>
        );
    }
}

export default PopularProduct;
