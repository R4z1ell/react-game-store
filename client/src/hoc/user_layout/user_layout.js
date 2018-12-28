import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './user_layout.scss';

const links = [
  {
    name: 'My account',
    linkTo: '/user/dashboard'
  },
  {
    name: 'User information',
    linkTo: '/user/user_profile'
  },
  {
    name: 'My Cart',
    linkTo: '/user/cart'
  }
];

const admin = [
  {
    name: 'Site info',
    linkTo: '/admin/site_info'
  },
  {
    name: 'Add products',
    linkTo: '/admin/add_product'
  },
  {
    name: 'Manage genres',
    linkTo: '/admin/manage_genres'
  }
];

const UserLayout = props => {
  const generateLinks = links =>
    links.map((item, i) => (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ));

  return (
    <div className="user-layout">
      <div className="user-layout__container">
        <div className="user-layout__left-nav">
          <h2 className="user-layout__title">My account</h2>
          <div className="user-layout__links">{generateLinks(links)}</div>
          <div>
            <h2 className="user-layout__title">Admin</h2>
            <div className="user-layout__links">{generateLinks(admin)}</div>
          </div>
        </div>
        <div className="user-layout__right">{props.children}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserLayout);
