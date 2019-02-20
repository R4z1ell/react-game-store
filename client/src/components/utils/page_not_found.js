import React, { Component } from 'react';

class PageNotFound extends Component {
  componentDidMount() {
    let selectBody = document.body;
    selectBody.classList.add('body-bck');
  }

  componentWillUnmount() {
    let selectBody = document.body;
    selectBody.classList.remove('body-bck');
  }

  render() {
    return (
      <div className="not-found">
        <div
          className="not-found__container"
          style={{
            maxWidth: '1100px',
            height: 'calc(100vh - 397px)',
            textAlign: 'center',
            margin: '11% auto 0 auto'
          }}
        >
          <img
            src="/images/404.jpg"
            alt="404_page"
            className="not_found__img"
          />
        </div>
      </div>
    );
  }
}

export default PageNotFound;
