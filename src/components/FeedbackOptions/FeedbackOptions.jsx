import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import clsx from 'clsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section className={css.buttons}>
      {options.map(option => {
        return (
          <button
            className={clsx(css.button, css[option])}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
