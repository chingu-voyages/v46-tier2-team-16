import PropTypes from "prop-types";

export const AnchorLink = ({ text, children, ...attrs }) => {
    return (
        <a href="" {...attrs}>
            {children && children}
            {text}
        </a>
    );
};

AnchorLink.propTypes = {
    text: PropTypes.string,
    children: PropTypes.element
};
