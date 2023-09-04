import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return "step nav-item " + (path === location.pathname ? "active" : "");
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="navbar-collapse">
        <ol className="navbar-nav">
          <li className={getLinkClass("/")}>
            <span className="nav-link disabled">Personal Details</span>
          </li>
          <li className={getLinkClass("/additionalDetails")}>
            <span className="nav-link disabled">Additional Details</span>
          </li>
          <li className={getLinkClass("/testDetails")}>
            <span className="nav-link disabled">Test Details</span>
          </li>
          <li className={getLinkClass("/paymentDetails")}>
            <span className="nav-link disabled">Payment Details</span>
          </li>
          <li className={getLinkClass("/confirm")}>
            <span className="nav-link disabled">Confirm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
