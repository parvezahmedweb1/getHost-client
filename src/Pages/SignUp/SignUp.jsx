import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import signUp from "../../assets/loginandsignup/login.json";
import { AuthContext } from "../../contexts/UserContext";
const SignUp = () => {
  const {
    googleSignIn,
    githubSignIn,
    registerEmailAndPassword,
    updateUserProfile,
  } = useContext(AuthContext);
  // ? user info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  // ? password error
  const [error, setError] = useState({
    password: "",
    firebaseErr: "",
  });
  // ? handleUserName
  const handleUserName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  // ? handleUserEmail
  const handleUserEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  // ? handleUserPassword
  const handleUserPassword = (e) => {
    if (e.target.value.length < 6) {
      setError({ ...error, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setError({ ...error, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
  // ? handlePhotoUrl
  const handlePhotoUrl = (e) => {
    setUserInfo({ ...userInfo, photoURL: e.target.value });
  };
  // ? handleRegisterSubmit
  const handleRegisterSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    registerEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        setError({ ...error, firebaseErr: "" });
        // ? update user profile
        updateUserProfile(userInfo.name, userInfo.photoURL)
          .then(() => {
            // ? update
            toast.success("Successfully Created user");
            console.log(result.user);
          })
          .catch((err) => {});
      })
      .catch((error) => setError({ ...error, firebaseErr: error.message }));
    form.reset();
  };
  // ? handleGithubSignUp
  const handleGithubSignUp = () => {
    githubSignIn()
      .then((result) => {
        toast.success("Successfully Github SignUp");
      })
      .catch((err) => setError({ ...err, firebaseErr: err.message }));
  };
  // ? handleGoogleSignUp
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Successfully Google SignUp");
      })
      .catch((err) => setError({ ...err, firebaseErr: err.message }));
  };
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <Lottie
            className="hidden md:block h-[90vh]"
            animationData={signUp}
            loop={true}
          ></Lottie>
          <form
            onSubmit={handleRegisterSubmit}
            className="my-10 space-y-4 rounded-xl p-8 shadow-2xl w-[90%] md:w-[65%] mx-auto"
          >
            <p className="font-bold text-4xl">Sign Up</p>
            <p className="text-md text-gray-500">
              No account?
              <Link to="/login" className="underline text-hLink">
                Sign in
              </Link>
            </p>
            <div className="flex space-x-6">
              <div
                onClick={handleGithubSignUp}
                className="border p-2 rounded-full cursor-pointer"
              >
                <BsGithub size={26} />
              </div>

              <div
                onClick={handleGoogleSignUp}
                className="border p-2 rounded-full cursor-pointer"
              >
                <FcGoogle size={26} />
              </div>
            </div>
            <hr />
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>

              <div className="relative mt-1">
                <input
                  onBlur={handleUserName}
                  type="text"
                  id="name"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter name"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-hLink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  onBlur={handleUserEmail}
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-hLink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  onChange={handleUserPassword}
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-hLink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-right text-slate-700 text-sm mt-1">
                Forget password?
              </p>
              {error.password && (
                <small className="text-xs flex items-center mt-2 text-yellow-700 dark:text-gray-400 ">
                  <BiErrorCircle className="mr-1" />
                  {error.password}
                </small>
              )}
              {error.firebaseErr && (
                <span className="text-xs mt-2 flex items-center text-red-900 dark:text-gray-400">
                  <BiErrorCircle className="mr-1" />
                  {error.firebaseErr}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="photo" className="text-sm font-medium">
                Photo URL
              </label>
              <div className="relative mt-1">
                <input
                  onBlur={handlePhotoUrl}
                  type="text"
                  id="photo"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter photo url"
                />
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-hLink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-link px-5 py-3 text-md font-semibold  text-white hover:text-hLink"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
