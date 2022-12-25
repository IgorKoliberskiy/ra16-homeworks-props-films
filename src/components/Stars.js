import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars({ count }) {
  
  if ((count < 1) || (count > 5) || (isNaN(count))) {
    return;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map(() => <li><Star /></li>)}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
    count: PropTypes.number,
  }

export default Stars;