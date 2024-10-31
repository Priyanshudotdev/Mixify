import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const { loginUser } = useContext(PlayerContext);

    console.log(email, password, username);

    return (
        <div className="w-full mt-4 h-full lg:px-24 flex flex-col lg:py-10 px-10 py-5 gap-y-4 ">
            <div className="flex flex-col gap-1 ">
                <p className="font-bold text-sm tracking-wider ">Email</p>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    className=" p-3 bg-transparent rounded border border-zinc-800 outline-white "
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className="flex flex-col gap-1 ">
                <p className="font-bold text-sm tracking-wider ">Password</p>
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    className=" p-3 bg-transparent rounded border border-zinc-800 outline-white "
                    type="password"
                    placeholder="password"
                />
            </div>
            <div className="flex flex-col gap-1 ">
                <p className="font-bold text-sm tracking-wider ">Username</p>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    value={username}
                    className=" p-3 bg-transparent rounded border border-zinc-800 outline-white "
                    type="text"
                    placeholder="Username"
                />
            </div>
            <button
                onClick={() => loginUser(email, username, password)}
                className="w-full hover:opacity-[0.5] active:opacity-[0.3] p-2 rounded-full border-none bg-[#31bd62] text-black font-bold "
            >
                Log In
            </button>
        </div>
    );
};

export default Login;
