// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, ...rest }) => {
  return <input type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
