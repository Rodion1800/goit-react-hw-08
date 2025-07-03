import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function PrivateRoute({ children, redirectTo = "/" }) {
  const state = useSelector(state => state);
  console.log("Redux state in PrivateRoute:", state);
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("PrivateRoute isLoggedIn:", isLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
