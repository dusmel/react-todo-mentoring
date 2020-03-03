import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard p-2">
      <span>Dashboard</span>
      <div className="p-3">{children}</div>
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
