import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import Content from '../Module/Content/Content';
import Lastest from '../Module/Lastest/Lastest';

class trangchu extends Component {
    render() {
        return (
            <>
                <Slider />

                <Content />

                <Lastest />
            </>
        );
    }
}

export default trangchu;