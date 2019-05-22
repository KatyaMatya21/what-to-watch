import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string,
  preview: PropTypes.string.isRequired
});
