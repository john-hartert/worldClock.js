import React, { Component } from 'react';

// This class extends the component react.
class WorldClock extends Component {
    constructor(props) {
        super(props);
        // Object
        this.state = {
            currentTime: (new Date()),
            clockFace: 'normal',
            digital: false,
            color: 'yellow'
        }
    }
    _updateTime = (timeDifference) => {
        // Inherits currentTime from this.state. 
        const newTime = new Date(this.state.currentTime.getTime)
        // Makes a new object that gives currentTime a new time (newTime).
        this.setState({
            currentTime: newTime
        });
    }
    // isDigital and newColor are new arguments updating the digital and color objects 
    //from above. Inherits from the original class above.
    _updateLookAndFeel = (isDigital, newColor) => {
        this.setState({
            // Assigns digital and color new values.
            digital: isDigital,
            color: newColor
        });
    }
}