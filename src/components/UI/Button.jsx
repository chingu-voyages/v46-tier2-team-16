import PropTypes from "prop-types";

export const Button = ({ text, children, ...attrs }) => {
    return (
        <button {...attrs}>{text ? text : children}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.element
};
