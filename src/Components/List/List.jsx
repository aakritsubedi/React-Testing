import React from "react";
import PropTypes from "prop-types";

export default function List({ listItems }) {
  return (
    <ul className="ul">
      {listItems.map((item) => (
        <li className="li" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
};
