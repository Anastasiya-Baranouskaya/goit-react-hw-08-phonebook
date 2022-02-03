import React from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useDeleteContactMutation } from "../../redux/contacts/contactsSlice";

export default function ContactListItem({ name, number, id }) {
  const [deleteContact] = useDeleteContactMutation();

  const onDelete = (id) => deleteContact(id);

  return (
    <li className={s.listItem}>
      <span className={s.span}>{name}:</span>
      <span className={s.span}>{number}:</span>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={() => {
          onDelete({ id });
        }}
      >
        Delete
      </button>
    </li>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
