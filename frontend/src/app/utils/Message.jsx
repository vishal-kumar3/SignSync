"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkUpdateDone } from "../redux/user/userSlice";

const Message = ({ type, children }) => {
  const dispatch = useDispatch();

  let msg = null;

  // msg = useSelector((state) => state.user.bookmarkMsg);
  msg = "Holla man"

  if (msg) {
    setTimeout(() => {
      // dispatch(bookmarkUpdateDone());
    }, 2000);
  }

  return (
    <div className="relative">
      <div
        style={{ padding: msg ? "15px" : "0px"}}
        className="z-90 bg-white text-yellow-600 rounded-xl py-2 text-xl fixed left-[50%] bottom-4 -translate-x-1/2 -translate-y-1/2"
      >
        {msg && msg}
      </div>
      {children}
    </div>
  );
};

export default Message;
