import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  link: PropTypes.string,
  previewVideoLink: PropTypes.string.isRequired
});
