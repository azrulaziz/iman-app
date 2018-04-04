import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: moment().format(`MMMM Do YYYY // h:mm:ss A`),
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.inverval);
    }

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