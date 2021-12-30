import "./styles.css";
import HOC from "./Components/HOC/HOC";
import Login from "./Container/Login/Login";
import { useSelector } from "react-redux";
import User from "./Container/User/User";

export default function App() {
  const loginSlice = useSelector((state) => state.isLogin);
  console.log(loginSlice);
  return (
    <>
      <HOC>{loginSlice.isLogin ? <User /> : <Login />}</HOC>
    </>
  );
}
