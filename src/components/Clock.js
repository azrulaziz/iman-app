import React, { Component } from 'react';
import moment from 'moment';

// iniate a clock class to handle the real time clock
class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: moment().format(`MMMM Do YYYY // h:mm:ss A`),
        }
    }
    
    // once the component is mounted, start the interval 
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    // clear the interval when leaving the page
    componentWillUnmount() {
        clearInterval(this.inverval);
    }
    
    // the function to handle the state changes at every interval
    tick() {
        this.setState({time: moment().format(`MMMM Do YYYY // h:mm:ss A`)})
    }

    render() {
        const {time} = this.state;
        return (
            <div>
                <p className="display-date">{time}</p>
            </div>
        )
    }
}

export default Clock
