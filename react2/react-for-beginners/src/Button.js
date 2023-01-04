import PropTypes from 'prop-types';
import styled from './Button.module.css';

export default 
function Button({ text }) {
    return (
        <button
            className={styled.btn}
        >{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}