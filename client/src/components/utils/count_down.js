import React, { Component } from 'react';
import moment from 'moment';

class CountDown extends Component {
  state = {
    deadline: moment()
      .add(4, 'days')
      .format('ll'),
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log('Date passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_bottom">
          {this.state.days}D,&nbsp;
          {this.state.hours}H&nbsp;{this.state.minutes}M&nbsp;
          {this.state.seconds}S left
        </div>
      </div>
    );
  }
}

export default CountDown;
