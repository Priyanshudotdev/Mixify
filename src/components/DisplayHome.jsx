import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
    const { user, isAuthenticated, setIsAuthenticated, setUser } =
        useContext(PlayerContext);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            const userDetails = JSON.parse(localStorage.getItem(storedEmail));
            if (userDetails) {
                setIsAuthenticated(true);
                setUser(userDetails);
            }
        }
    }, [setIsAuthenticated, setUser]);

    return (
        <>
            {isAuthenticated && (
                <>
                    <Navbar />
                    <div className="mb-4">
                        <h1 className="my-5 font-bold text-2xl ">
                            Featured Charts
                        </h1>
                        <div className="flex overflow-auto">
                            {albumsData.map((album, index) => {
                                return (
                                    <AlbumItem
                                        key={index}
                                        desc={album.desc}
                                        id={album.id}
                                        image={album.image}
                                        name={album.name}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="mb-4">
                        <h1 className="my-5 font-bold text-2xl ">
                            Today's biggest hits
                        </h1>
                        <div className="flex overflow-auto">
                            {songsData.map((album, index) => {
                                return (
                                    <SongItem
                                        key={index}
                                        desc={album.desc}
                                        id={album.id}
                                        image={album.image}
                                        name={album.name}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DisplayHome;
