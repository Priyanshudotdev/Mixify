import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
    const {
        seekBar,
        seekBg,
        track,
        playerStatus,
        play,
        pause,
        time,
        previous,
        next,
        seekSong,
        volumeBar,
        setVolumeLevel,
        volume,
        isAuthenticated,
    } = useContext(PlayerContext);

    return (
        <>
            {isAuthenticated && (
                <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 ">
                    <div className="hidden lg:flex items-center gap-4 ">
                        <img src={track.image} className="w-12" alt="" />
                        <div>
                            <p>{track.name}</p>
                            <p>{track.desc.slice(0, 12)}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 m-auto">
                        <div className="flex gap-4">
                            <img
                                src={assets.shuffle_icon}
                                className="w-4 cursor-pointer "
                                alt=""
                            />
                            <img
                                onClick={previous}
                                src={assets.prev_icon}
                                className="w-4 cursor-pointer "
                                alt=""
                            />
                            {playerStatus ? (
                                <img
                                    onClick={pause}
                                    src={assets.pause_icon}
                                    className="w-4 cursor-pointer "
                                    alt=""
                                />
                            ) : (
                                <img
                                    onClick={play}
                                    src={assets.play_icon}
                                    className="w-4 cursor-pointer "
                                    alt=""
                                />
                            )}
                            <img
                                onClick={next}
                                src={assets.next_icon}
                                className="w-4 cursor-pointer "
                                alt=""
                            />
                            <img
                                src={assets.loop_icon}
                                className="w-4 cursor-pointer "
                                alt=""
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p>
                                {time.currentTime.minute}:
                                {time.currentTime.second < 10
                                    ? "0" + time.currentTime.second
                                    : time.currentTime.second}
                            </p>
                            <div
                                ref={seekBg}
                                onClick={seekSong}
                                className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
                            >
                                <hr
                                    ref={seekBar}
                                    className="border-none h-1 max-w-[99%] w-0 bg-green-500 rounded-full outline-none"
                                />
                            </div>
                            <p>
                                {time.totalTime.minute}:
                                {time.totalTime.second < 10
                                    ? "0" + time.totalTime.second
                                    : time.totalTime.second}
                            </p>
                        </div>
                    </div>
                    <div className="ml-10 hidden lg:flex items-center gap-2 px-10 opacity-75">
                        <img
                            src={assets.volume_icon}
                            className="cursor-pointer w-4"
                            alt=""
                        />
                        <div
                            ref={volumeBar}
                            onClick={setVolumeLevel}
                            className="cursor-pointer w-24 bg-slate-50 h-1 rounded"
                        >
                            <hr
                                style={{ width: `${volume * 100}%` }} // Update width based on volume level
                                className="border-none h-1 bg-green-500 rounded-full outline-none"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Player;
