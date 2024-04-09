"use client";
import React from "react";
import { LogoutSubmit } from "../server/signup.js";
import { useRouter } from "next/navigation.js";

import { useDispatch } from "react-redux";
import {
  authFailure,
  authStart,
  logoutSuccess,
} from "../redux/user/userSlice.js";

const Logout = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  return (
    <button
      onClick={async (e) => {
        try {
          dispatch(authStart());
          await LogoutSubmit();
          dispatch(logoutSuccess());
          router.replace("/user/signup");
        } catch (error) {
          dispatch(authFailure(error.message));
          throw error;
        }
      }}
    >
      Log Out
    </button>
  );
};

export default Logout;
