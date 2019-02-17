import React, { Component } from 'react';
import moment from 'moment';

import './order_header.scss';

class OrderHeader extends Component {
  state = {
    total: 0
  };

  componentDidMount() {
    this.props.children.forEach(() => this.calculateTotal());
  }

  calculateTotal = () => {
    let total = 0;

    this.props.children.forEach(item => {
      const discountedPrice = Number(
        item.props.basePrice / 100 -
          (item.props.basePrice / 10000) * item.props.discount
      );

      if (item.props.discount) {
        total += discountedPrice;
      } else {
        total += item.props.basePrice / 100;
      }

      this.setState({
        total: total.toFixed(2)
      });
    });
  };

  render() {
    return (
      <div className="order-item">
        <header className="order-item__header">
          <div className="order-header-info">
            <div className="order-header-info__porder">
              ORDER
              <span style={{ marginLeft: '5px' }}>#{this.props.porder}</span>
            </div>
            <div className="order-header-info__date">
              <span>{moment(this.props.dateOfPurchase).format('ll')}</span>
            </div>
          </div>
          <div className="order-header-info order-header-info--last">
            <span className="order-header-info--total-price">
              € {this.state.total}
            </span>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default OrderHeader;
