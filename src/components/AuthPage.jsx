import React from "react";
import { assets } from "../assets/assets";
import Login from "./Login";

const AuthPage = () => {
    return (
        <div className=" absolute w-full h-screen top-0 left-0 {bg-[#181717]} bg-gradient-to-b from-[#292929] to-[#181717] flex items-center justify-center lg:px-[23vw] lg:py-[2%] px-[5vw] py-[3vh]  ">
            <div className="w-full h-full rounded-xl bg-[#121212] flex flex-col items-center justify-start lg:py-5 lg:px-28 py-4 px-10 ">
                <img src={assets.spotify_logo} className="w-10" alt="" />
                <h1 className=" mt-1 font-bold text-4xl tracking-tight text-center ">
                    Log in to Spotify
                </h1>

                <Login />
            </div>
        </div>
    );
};

export default AuthPage;
