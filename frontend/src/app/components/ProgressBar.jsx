"use client";
import React, { useEffect } from "react";
import NextTopLoader from "nextjs-toploader";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { getCurrentUser } from "../server/signup";

const ProgressBar = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const userData = localStorage.getItem("user");

  //   if (userData) {
  //     dispatch(signInSuccess(JSON.parse(userData)));
  //   }
  // }, []);

  useEffect(() => {
    async function currentUser(){
      try {
        const response = await getCurrentUser();
        dispatch(signInSuccess(response));
      } catch (error) {
        console.error("Error while fetching current loggedIn user:- ",error);
      }
    }

    currentUser();
  }, [])


  return (
    <div>
      <NextTopLoader
        color="tomato"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
    </div>
  );
};

export default ProgressBar;
