import React, { useState, useRef } from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FileIconHandler, convertedFileSize } from "./Functions";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const ChatFooter = (props) => {
  const { isDark } = props;
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFileInputChange = (event) => {
    const file = event.target.files;
    const newFiles = Array.from(file);
    setSelectedFile((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiPickerToggle = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emojiObject) => {
    const emojiImage = emojiObject.native;
    setInputValue(inputValue.concat(emojiImage));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <footer className="bg-gray-50 border-t-2 h-20 mt-auto relative z-10">
        <form className="flex items-center h-auto mx-7 my-5">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative flex-grow h-auto bg-gray-200 rounded-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <textarea
              type="text"
              id="voice-search"
              className="bg-gray-50 h-10 overflow-hidden max-h-24 resize-none focus:outline-none focus:font-semibold text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-3/4  pl-10 pr-8 p-2.5  dark:bg-gray-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Send something..."
              required
              value={inputValue}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            />
            <div className="absolute inset-y-0 right-36 flex items-start my-2 cursor-pointer">
              <IoMdContact className="w-6 h-6 text-gray-500 hover:text-blue-500" />
            </div>
            <div
              className="absolute inset-y-0 right-24 flex items-start my-2 cursor-pointer  "
              onClick={handleEmojiPickerToggle}
            >
              <HiOutlineFaceSmile className="w-6 h-6 text-gray-500 hover:text-yellow-400" />
            </div>

            <div
              className="absolute inset-y-0 right-14 flex items-center my-2 cursor-pointer"
              onClick={handleClick}
            >
              <IoDocumentAttachOutline className="w-8 h-8 p-1 rounded-lg  hover:bg-gray-100 text-gray-500" />
              <input
                type="file"
                ref={fileInputRef}
                multiple
                hidden
                onChange={handleFileInputChange}
              />
            </div>
            <div className="absolute inset-y-0 right-0 rotate-45 w-10 h-10  bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
              <BsSend
                className="w-10 h-10 p-2.5 text-white"
                onClick={() => {
                  console.log(selectedFile);
                }}
              />
            </div>
          </div>
        </form>
      </footer>

      {selectedFile.length > 0 && (
        <div className="w-[55vh] h-[45vh] overflow-y-scroll fixed bottom-20 z-[9999] flex flex-col bg-gray-50">
          <div className=" h-6 flex items-center justify-between bg-gray-50">
            <span>Files to Send</span>
            <AiOutlinePlusCircle
              className="text-gray-600 w-7 h-7 p-1 m-1 cursor-pointer"
              onClick={handleClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              multiple
              hidden
              onChange={handleFileInputChange}
            />
          </div>
          {selectedFile.map((file, index) => (
            <div key={index} className="flex items-center">
              {FileIconHandler(file.type)}
              <div className="flex flex-col">
                <span className="w-full">{file.name.slice(0, 20)}......</span>
                <span>{convertedFileSize(file.size)}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {showEmojiPicker && (
        <div ref={emojiPickerRef} className=" fixed bottom-20 z-[9999]">
          <Picker
            theme={isDark ? "dark" : "light"}
            data={data}
            onEmojiSelect={handleEmojiSelect}
            iconSet="google"
          />
        </div>
      )}
    </div>
  );
};

export default ChatFooter;
