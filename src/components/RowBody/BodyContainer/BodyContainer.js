import React, { Component } from 'react';
import Slide from './Slide/Slide';
import NewProduct from './NewProduct/NewProduct';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import PopularProduct from './PopularProduct/PopularProduct';
import BestsellingProduct from './BestsellingProduct/BestsellingProduct';
class BodyContainer extends Component {
    render() {
        return (
            <div className="span9">
                <Slide/>

New Products

                <NewProduct/>
Featured Products

                <FeaturedProduct/>
Popular Products              
                <PopularProduct/>
                <hr />
Best selling Products 
                <BestsellingProduct/>
            </div>
        );
    }
}

export default BodyContainer;
