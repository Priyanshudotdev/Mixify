import React, { useCallback, useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useContext(PlayerContext);
    const username = user?.username.slice(0, 1);

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold ">
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => {
                            navigate(-1);
                        }}
                        src={assets.arrow_left}
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        alt=""
                    />
                    <img
                        onClick={() => {
                            navigate(1);
                        }}
                        src={assets.arrow_right}
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        alt=""
                    />
                </div>
                <div className="flex ml-10 gap-2 border border-zinc-800 rounded-xl p-2 px-4 bg-zinc-900 ">
                    <h1>
                        Build with <b>❤</b> By
                    </h1>
                    <h1 className="font-bold tracking-wide">
                        Vaibhav Hatwar & Shlok Bhavik
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-purple-500 text-black w-7 h-7 text-center rounded-full flex items-center justify-center ">
                        {username}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer ">
                    All
                </p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer ">
                    Music
                </p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer ">
                    Podcasts
                </p>
            </div>
        </>
    );
};

export default Navbar;
