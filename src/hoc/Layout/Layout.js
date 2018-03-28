import React, { Component } from 'react';
import './layout.css';
import Header from '../../components/Header/Header';

class Layout extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                Footer ------
            </div>
        );
    }
}

export default Layout;