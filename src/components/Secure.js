import { isAutent } from "../ApiService/Auth";
import { useLocation } from "react-router-dom";
import {Navigate} from "react-router-dom"

const Secure = ({children}) => {
  const location = useLocation();
  console.log(isAutent);
  let isLoggedIn = isAutent();
  return(
   (isAutent())?children:(<>{alert("unauthorized...")} <Navigate to="/Register" replace={location} /></>)
  )
}

export default Secure;