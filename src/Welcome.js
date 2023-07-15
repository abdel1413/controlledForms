let Welcome = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

Welcome.defaultProps = { name: "CamperBot" };
//Welcome.propTypes ={name:PropTypes.string.isRequired}

export default Welcome;
