import P from 'prop-types';
import './styles.css';

export const Button = ({ text, event, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={event}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  event: P.func.isRequired,
  disabled: P.bool,
};
