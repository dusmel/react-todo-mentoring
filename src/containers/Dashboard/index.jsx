import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
  return (
    <div className="login">
      <span>Dashboard</span>
      <span>{children}</span>
    </div>
  );
};

Dashboard.defaultProps = {
  children: '',
};

Dashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
};

export default withRouter(Dashboard);
