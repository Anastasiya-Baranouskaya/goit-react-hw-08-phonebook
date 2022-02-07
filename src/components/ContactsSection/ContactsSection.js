import styles from 'components/ContactsSection/ContactsSection.module.css';
import PropTypes from 'prop-types';

export default function ContactsSection({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
ContactsSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
