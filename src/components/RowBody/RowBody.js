import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import BodyContainer from './BodyContainer/BodyContainer';
class RowBody extends Component {
    render() {
        return (
            <div className="row">
                <Sidebar />
                <BodyContainer/>
            </div>
        );
    }
}

export default RowBody;
