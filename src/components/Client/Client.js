import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <div className="client">
                 <section className="our_client">
                    <hr className="soften" />
                    <h4 className="title cntr"><span className="text">Manufactures</span></h4>
                    <hr className="soften" />
                    <div className="row">
                        <div className="span2">
                            <a href="cart.html"><img alt="" src="assets/img/1.png" /></a>
                        </div>
                        <div className="span2">
                            <a href="cart.html"><img alt="" src="assets/img/2.png" /></a>
                        </div>
                        <div className="span2">
                            <a href="cart.html"><img alt="" src="assets/img/3.png" /></a>
                        </div>
                        <div className="span2">
                            <a href="cart.html"><img alt="" src="assets/img/4.png" /></a>
                        </div>
                        <div className="span2">
                            <a href="cart.html"><img alt="" src="assets/img/5.png" /></a>
                        </div>
                        <div className="span2">
                            <a href="cart.html"><img alt="" src="assets/img/6.png" /></a>
                        </div>
                    </div>
                </section>
            </div>
               
        );
    }
}

export default Client;
