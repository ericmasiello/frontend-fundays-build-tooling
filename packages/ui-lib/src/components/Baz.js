import React from 'react';
import PropTypes from 'prop-types';

const Baz = (props) => <div className={props.className}>Baz</div>;

Baz.defaultProps = {
  className: 'baz-className',
};

if (process.env.NODE_ENV !== 'production') {
  Baz.propTypes = {
    className: PropTypes.string,
  };
}

export default Baz;
