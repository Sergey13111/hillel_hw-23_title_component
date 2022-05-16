// import PropTypes from 'prop-types';

const Title = ({name, type = "normal"}) => {
  return <h1 style={{fontWeight:type}}>Car body: {name}</h1>;
};

// Title.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(["bold", "normal"]),
// };

// Title.defaultProps = {
//   type: "normal",
// }

export default Title;