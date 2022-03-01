import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  return (
    <header className="header" data-test="header">
      <span className="title" data-test="title">
        {title}
      </span>
      <span className="symbol" data-test="symbol">
        ॐ
      </span>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
