import React, { Component } from 'react';
import SliderTemplates from './slider_templates';
import axios from 'axios';
import { URL } from '../../../config';

class NewsSlider extends Component {
    state = {
        news: []
    }

    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
            this.setState({
                news: response.data
            })
        })
    }

    render() {
        //console.log(this.state.news);
        return (
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings} />
        );
    }
}

export default NewsSlider;