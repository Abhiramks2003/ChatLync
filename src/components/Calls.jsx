import React, { useState, useEffect, useRef } from "react";
import { BsTelephoneFill, BsTelephoneOutbound } from "react-icons/bs";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import WaveSurfer from "wavesurfer.js";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Calls = () => {
  const recorderControls = useAudioRecorder();
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  const [tabSelected, setTabSelected] = useState(1);
  const tabActive =
    "bg-gradient-to-r from-cyan-500 to-blue-500 font-medium shadow-sm text-gray-50 p-2 rounded-full w-24";
  const tabInactive =
    "bg-white font-medium shadow-sm text-gray-400 p-2 rounded-full w-24";


  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "blue",
      progressColor: "rgba(0, 0, 0, 0.7)",
      cursorColor: "red",
      barWidth: 2,
      barHeight: 2,
      barGap: 1,
      responsive: true,
    });

    return () => {
      wavesurferRef.current.destroy();
    };
  }, []);

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    wavesurferRef.current.load(url);
    console.log(url);
  };

  return (
    <div className="flex">
      <div className="w-96 h-screen bg-gray-50">
        <h1 className=" font-semibold text-center text-3xl">Calls</h1>

        <form className="flex items-center mx-4 rounded-full shadow-md bg-gray-200 my-6">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="w-full flex rounded-full">
            <div className="flex items-center justify-center px-3 rounded-full hover:bg-blue-500 cursor-pointer">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 hover:text-gray-50 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border-0 font-semibold border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pr-2.5  dark:bg-gray-200 dark:border-0 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search in Calls"
              required
            />
          </div>
        </form>

        <Tabs className="my-4">
          <TabList className="flex my-5 mx-10 rounded-full justify-between shadow-lg p-1">
            <Tab className="rounded-full">
              {" "}
              <button
                onClick={() => {
                  setTabSelected(1);
                }}
                className={tabSelected === 1 ? tabActive : tabInactive}
              >
                All
              </button>
            </Tab>
            <Tab className="rounded-full">
              {" "}
              <button
                onClick={() => {
                  setTabSelected(2);
                }}
                className={tabSelected === 2 ? tabActive : tabInactive}
              >
                Missed
              </button>
            </Tab>
            <Tab className="rounded-full">
              {" "}
              <button
                onClick={() => {
                  setTabSelected(3);
                }}
                className={tabSelected === 3 ? tabActive : tabInactive}
              >
                Incoming
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="mx-5">
              <div className="h-20 my-1 px-2 cursor-pointer rounded-lg hover:bg-gray-100 flex items-center justify-between">
                <div className="flex">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                    alt=""
                  />
                  <div className="flex flex-col mx-3">
                    <span className=" font-semibold">Abhiram Krishna S</span>
                    <div className="flex my-0.5">
                      <BsTelephoneFill className="p-0.5 text-blue-600" />
                      <span className="text-gray-400 text-xs font-medium">
                        14m : 10:30 PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <BsTelephoneOutbound className="w-6 h-6 p-0.5 text-green-500" />
                  <span className="text-gray-400 text-xs font-medium my-1">
                    08:34 PM
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>

      <div className="w-72" ref={waveformRef}>
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
        />
        <button onClick={recorderControls.stopRecording}>Stop recording</button>
        <ReactionBarSelector />
      </div>
    </div>
  );
};

export default Calls;
