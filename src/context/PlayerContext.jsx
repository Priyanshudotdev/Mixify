import { createContext, useEffect, useRef, useState } from "react";
import { indianSongsData, songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const volumeBar = useRef();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({ email: "", username: "", password: "" });

    const loginUser = (email, username, password) => {
        if (email && username && password) {
            const newUser = { email, username, password };
            // Store user details in localStorage
            localStorage.setItem(email, JSON.stringify(newUser)); // Save user object with email as the key
            localStorage.setItem("userEmail", email); // Save email separately
            setIsAuthenticated(true);
            setUser(newUser);
        }
    };

    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        },
    });
    const [volume, setVolume] = useState(1);

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    };

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    };

    const playWithIdIndian = async (id) => {
        await setTrack(indianSongsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    };

    const previous = async () => {
        if (track.id > 0) {
            setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    };

    const next = async () => {
        if (track.id < songsData.length - 1) {
            setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    };

    const seekSong = async (e) => {
        audioRef.current.currentTime =
            (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
            audioRef.current.duration;
    };

    const setVolumeLevel = (e) => {
        const volumeLevel =
            e.nativeEvent.offsetX / volumeBar.current.offsetWidth;
        setVolume(volumeLevel);
        audioRef.current.volume = volumeLevel;
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width =
                    Math.floor(
                        (audioRef.current.currentTime /
                            audioRef.current.duration) *
                            100,
                    ) + "%";
                setTime({
                    currentTime: {
                        second:
                            Math.floor(audioRef.current.currentTime % 60) || 0,
                        minute:
                            Math.floor(audioRef.current.currentTime / 60) || 0,
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60) || 0,
                        minute: Math.floor(audioRef.current.duration / 60) || 0,
                    },
                });
            };
        }, 1000);
    }, [audioRef]);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playerStatus,
        setPlayerStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        volumeBar,
        volume,
        setVolumeLevel,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loginUser,
        playWithIdIndian,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
