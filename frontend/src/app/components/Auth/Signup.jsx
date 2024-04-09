"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

import { useDispatch } from "react-redux";

import Spinner from "../Spinner.jsx";
import "../../page.css";
import styles from "./styles.module.css";

import { SignupSubmit, SigninSubmit } from "../../server/signup.js";
import {
  authFailure,
  authStart,
  signInSuccess,
  signUpSuccess,
} from "@/app/redux/user/userSlice.js";

const Signup = () => {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const loadingSpinner = (
    <>
      <Spinner width={20} height={20} />
      <span>Loading...</span>
    </>
  );

  const dispatch = useDispatch();

  return (
    <main className="h-[calc(100vh_-_4rem)] flex items-center justify-center">
      <div className="bg-white flex flex-col md:flex-row md:py-3 w-[75%] h-[75%] rounded-3xl relative overflow-hidden">
        <form
          className="bg-white absolute md:p-10 p-5 top-0 w-[100%] h-[70%] md:left-0 md:w-[50%] md:h-[100%] flex flex-col md:gap-5 gap-1 items-center justify-center"
          style={{ zIndex: toggle ? 0 : 90, opacity: toggle ? 0 : 1, transition: "transform 0.25s ease-in", transform: toggle? "translate(100%, 0)":"translate(0, 0)"}}
          encType="multipart/form-data"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              dispatch(authStart());
              setLoading(true);
              await SignupSubmit(
                username,
                fullName,
                email,
                password
              );
              setStatusMsg(
                `You have been registered successfully. Sign in using your credentials`
              );
              dispatch(signUpSuccess());
            } catch (error) {
              dispatch(authFailure(error.message));
              setStatusMsg(`User registration failed!! ${error}`);
            }
            setLoading(false);
          }}
        >
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p>Create your brand new account</p>
          <div className="w-[100%] flex flex-col gap-1">
            <input
              className="w-[100%] rounded-sm text-xs px-2 py-1 outline outline-1 outline-slate-500"
              type="text"
              value={username}
              placeholder="Username"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className="w-[100%] rounded-sm text-xs px-2 py-1 outline outline-1 outline-slate-500"
              type="text"
              value={fullName}
              placeholder="Full Name"
              id="fullName"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <input
              className="w-[100%] rounded-sm text-xs px-2 py-1 outline outline-1 outline-slate-500"
              type="text"
              value={email}
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="w-[100%] rounded-sm text-xs px-2 py-1 outline outline-1 outline-slate-500"
              type="password"
              value={password}
              placeholder="Password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="transition ease-in shadow-lg hover:shadow-sky-500/50 text-sm w-[30%] rounded-xl px-2 py-1 outline-none bg-sky-300 hover:bg-sky-400">
            {loading ? loadingSpinner : "Sign Up"}
          </button>
        </form>
        <div
          style={{ zIndex: toggle ? 0 : 90, opacity: toggle ? 0 : 1 }}
          className="bg-white absolute md:p-10 p-5 bottom-0 w-[100%] h-[30%] md:border md:border-sky-500 md:rounded-l-[25%] md:right-0 md:w-[50%] md:h-[100%] flex flex-col md:gap-7 gap-1 items-center justify-center"
        >
          <h1 className="text-xl font-bold">Welcome Back!</h1>
          <p>Use your email and password to login</p>
          <button
            className="transition ease-in shadow-lg hover:shadow-cyan-500/50 text-sm w-[30%] rounded-xl px-2 py-1 outline-none bg-cyan-300 hover:bg-cyan-400"
            onClick={() => {
              setToggle(true);
            }}
          >
            Sign In
          </button>
        </div>
        <form
          style={{ zIndex: toggle ? 90 : 0, opacity: toggle ? 1 : 0, transition: "transform 0.25s ease-in", transform: toggle? "translate(0%, 0)":"translate(-100%, 0)" }}
          className="bg-white absolute md:p-10 p-5 top-0 w-[100%] h-[50%] md:left-0 md:w-[50%] md:h-[100%] flex flex-col md:gap-7 gap-1 items-center justify-center"
          encType="application/json"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              dispatch(authStart());
              setLoading(true);
              const currentUser = await SigninSubmit(email, password);
              dispatch(signInSuccess(currentUser));
              setStatusMsg(`Login Successfull`);
              router.replace(`http://localhost:3000/user/${currentUser._id}`);
            } catch (error) {
              dispatch(authFailure(error.message));
              setStatusMsg(`User login failed!! ${error}`);
            }
            setLoading(false);
          }}
        >
          <h1 className="text-xl font-bold">Sign In</h1>
          <p>Sign in using your email and password</p>
          <div className="w-[100%] flex flex-col gap-1">
            <input
              className="w-[100%] rounded-sm text-xs px-2 py-1 outline outline-1 outline-slate-500"
              type="text"
              value={email}
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="w-[100%] rounded-sm text-xs px-2 py-1 outline outline-1 outline-slate-500"
              type="password"
              value={password}
              placeholder="Password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <small className="text-slate-500">
              Forget Your Password?
              <Link
                className="text-blue-500 hover:underline"
                href={"/users/signup"}
              >
                Click Here
              </Link>
            </small>
          </div>
          <button className="transition ease-in shadow-lg hover:shadow-sky-500/50 text-sm w-[30%] rounded-xl px-2 py-1 outline-none bg-sky-300 hover:bg-sky-400">
            {loading ? loadingSpinner : "Sign In"}
          </button>
        </form>
        <div
          style={{ zIndex: toggle ? 90 : 0, opacity: toggle ? 1 : 0 }}
          className="bg-white absolute bottom-0 w-[100%] h-[50%] md:border md:border-sky-500 md:rounded-l-[25%] md:right-0 md:w-[50%] md:h-[100%] flex flex-col gap-2 md:gap-7 items-center justify-center md:p-10 p-5"
        >
          <h1 className="text-xl font-bold">Hello, Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button
            className="transition ease-in shadow-lg hover:shadow-cyan-500/50 text-sm w-[30%] rounded-xl px-2 py-1 outline-none bg-cyan-300 hover:bg-cyan-400"
            onClick={() => {
              setToggle(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
