import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const YouMayAlsoLike = lazy(() => import("./YouMayAlsoLike"));
const PlaylistDetails = lazy(() => import("./YouMayAlsoLike/PlaylistDetails"));
const NewMv = lazy(() => import("./NewMv"));
const Radio = lazy(() => import("./Radio"));
const Leaderboard = lazy(() => import("./Leaderboard"));
const SingerList = lazy(() => import("./SingerList"));
const Dayrec = lazy(() => import("./Dayrec"));
const MusicPlayer = lazy(() => import("./MusicPlayer"));

export default () => {
    return useRoutes([
        {
            path: "/",
            element: <YouMayAlsoLike />,
        },
        {
            path: "/PlaylistDetails",
            element: <PlaylistDetails />,
        },
        {
            path: "/NewMv",
            element: <NewMv />,
        },
        {
            path: "/Radio",
            element: <Radio />,
        },
        {
            path: "/Leaderboard",
            element: <Leaderboard />,
        },
        {
            path: "/SingerList",
            element: <SingerList />,
        },
        {
            path: "/Dayrec",
            element: <Dayrec />,
        },
        {
            path: "/MusicPlayer",
            element: <MusicPlayer />,
        },
    ]);
};
