import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Message({ message, isError }) {
  return <MessageSUI negative={isError}>{ message }</MessageSUI>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
}.isRequired;

Message.defaultProps = {
  isError: false,
};

export default Message;
