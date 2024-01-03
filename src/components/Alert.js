import "./Alert.css";

function Alert({ children, visible, type }) {
  return (
    <div
      className={`alert-component ${visible && "visible"}`}
      role="alert"
      hidden={!visible}
    >
      {children}
    </div>
  );
}
export default Alert;
