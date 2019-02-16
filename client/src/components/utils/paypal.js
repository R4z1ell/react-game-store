import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      this.props.onSuccess(payment);
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = error => {
      console.log(JSON.stringify(error));
    };

    let env = 'sandbox';
    let currency = 'EUR';
    let total = this.props.toPay;

    const client = {
      sandbox:
        'Afk4xLFeEnQQi1EB8yYTqftWm3dRokjP93-z2QAxo84GQvkUcvBfJqF0TtjfM1ZbNLp1sF-k5oHuuyNr',
      production: ''
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'small',
            color: 'gold',
            shape: 'pill',
            label: 'pay'
          }}
        />
      </div>
    );
  }
}

export default Paypal;
