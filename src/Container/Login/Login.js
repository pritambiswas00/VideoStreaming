import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import Styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../Store/Store";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });
  const dispatch = useDispatch();

  const usernameChangeHandler = (e) => {
    console.log(e.target.value);
    setUserDetails((prevState) => {
      return { ...prevState, username: e.target.value };
    });
  };
  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
    setUserDetails((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };
  const loginHandler = () => {
    console.log(userDetails, "userDetails");
    dispatch(actionTypes.isLogin());
  };

  return (
    <Box
      className={Styles.Box}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1.5, width: "40ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div className={Styles.FormDiv}>
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue={userDetails.username}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className={Styles.FormDiv}>
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue={userDetails.password}
          onChange={passwordChangeHandler}
        />
      </div>
      <div className={Styles.Login}>
        <Button onClick={loginHandler}>Login</Button>
      </div>
    </Box>
  );
};

export default Login;
