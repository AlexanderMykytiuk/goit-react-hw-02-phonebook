import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';

const ListItem = ({ filterContacts, onDeleteContact }) => {
  return filterContacts.map(({ id, name, number }) => (
    <li className={styles.listItem} key={id}>
      <p className={styles.name}>{name} </p>
      <p className={styles.number}>{number} </p>

      <button className={styles.delete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));
};

ListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ListItem;