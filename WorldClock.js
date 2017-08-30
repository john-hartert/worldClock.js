import React, { Component } from 'react';

class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: (new Date()),
            clockFace: 'normal',
            digital: false,
            color: 'yellow'
        }
    }
    _updateTime = (timeDifference) => {
        const newTime = new Date(this.state.currentTime.getTime)
        this.setState({
            currentTime: newTime
        });
    }
    _updateLookAndFeel = (isDigital, newColor) => {
        this.setState({
            digital: isDigital,
            color: newColor
        });
    }
}