import { useState, useEffect } from "react";
import Loader from "../../../UI/loader/Loader";
import './loginLoader.scss'

const LoginLoader = () => {
  const [counter, setCounter] = useState(25);

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="login-loader-component">
      <div className="login-loader-component__wrapper">
        <Loader />
        <p>Please wait for the server to response</p>
        <p>{counter !== 0 ? `Estimated time ${counter}s` : "Please refresh the page"}</p>
      </div>
    </div>
  )
}

export default LoginLoader;