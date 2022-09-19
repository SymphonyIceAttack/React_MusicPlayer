import { useState, Suspense } from "react";
import "./App.css";
import classnames from "classnames";
import Loading from "@/components/Loading";
import VideoComponent from "./VideoComponent";
import MusicContainer from "./MusicContainer";
import NarBarHeader from "./MusicContainer/NarBarHeader";
import IconList from "./MusicContainer/NarBarHeader/IconList";
import RouterList from "./MusicContainer/NarBarHeader/RouterList";
import InputBox from "./MusicContainer/NarBarHeader/InputBox";
import UserMessage from "./MusicContainer/NarBarHeader/UserMessage";
import MusicContent from "./MusicContainer/MusicContent";
import Sidebar from "./MusicContainer/MusicContent/Sidebar";
import Pages from "./MusicContainer/MusicContent/Pages";
import MusicPlayer from "./MusicPlayer";
function App() {
    return (
        <div
            pos="relative"
            className="h-100vh w-100vw flex justify-center items-center "
        >
            <VideoComponent />
            <MusicContainer>
                <NarBarHeader>
                    <IconList />
                    <RouterList />
                    <InputBox />
                    <UserMessage />
                </NarBarHeader>
                <MusicContent>
                    <Sidebar />
                    <Suspense fallback={<Loading />}>{Pages()}</Suspense>
                </MusicContent>
            </MusicContainer>
            <MusicPlayer />
        </div>
    );
}

export default App;
