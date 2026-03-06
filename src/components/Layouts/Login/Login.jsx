import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  console.log("state user:", user); // optional for check

  // separate separate provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // google auth provider
  const handleGoogleSignIn = () => {
    console.log(auth, googleProvider); // ensure import from "firebase/auth"
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("signInWithPopup user:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  // Github auth provider
  const handleGitHubSignIn = () => {
    console.log(auth, githubProvider); // ensure import from "firebase/auth"
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("signInWithPopup user:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  // Twitter auth provider
  const handleTwitterSignIn = () => {
    console.log(auth, twitterProvider); // ensure import from "firebase/auth"
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        console.log("signInWithPopup user:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  // google github common signout
  const handleSignOut = () => {
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

      {/* conditional button  */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div className="flex flex-row gap-4">
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
          <button onClick={handleTwitterSignIn}>Login with Twitter</button>
        </div>
      )}

      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="User Profile" />
        </div>
      )}
    </div>
  );
};

export default Login;
