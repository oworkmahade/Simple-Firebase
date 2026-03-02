import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log(auth, provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        // console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>Login | Firebase</title>
      </Helmet>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      <br></br>
      <button onClick={handleGoogleSignOut}>Sign Out</button>

      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <h2>Email: {user.email}</h2>
          <img src={user.photoURL} alt="User images" />
        </div>
      )}
    </div>
  );
};

export default Login;
