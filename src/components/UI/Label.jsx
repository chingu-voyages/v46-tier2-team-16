import PropTypes from "prop-types";

export const Label = ({ text, ...attrs }) => {
    return <label {...attrs}>{text}</label>
}

Label.propTypes = {
    text: PropTypes.string
};
