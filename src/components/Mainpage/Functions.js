import { FcDocument, FcPicture, FcFilm, FcMusic } from "react-icons/fc";
import {
    SiAdobeacrobatreader,
    SiCss3,
    SiJavascript,
    SiPython,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";


//Functions
export const FileIconHandler = (type) => {
    const ext = type.split("/");
    switch (ext[0]) {
        case "image":
            return <FcPicture className="w-10 h-10" />;
        case "video":
            return <FcFilm className="w-10 h-10" />;
        case "audio":
            return <FcMusic className="w-10 h-10" />;
        default:
            break;
    }
    switch (ext[1]) {
        case "pdf":
            return (
                <SiAdobeacrobatreader className="w-10 h-10 p-1 text-red-600 bg-white rounded-md" />
            );
        case "json":
            return (
                <VscJson className="w-10 h-10 p-1 text-amber-600 bg-white rounded-md" />
            );
        case "javascript":
            return (
                <SiJavascript className="w-10 h-10 p-1 text-yellow-300 rounded-lg" />
            );
        case "html":
            return <AiFillHtml5 className="w-10 h-10 p-1 text-orange-600" />;
        case "css":
            return <SiCss3 className="w-10 h-10 p-1 text-blue-600" />;
        case "x-python":
            return <SiPython className="w-10 h-10 p-1 text-blue-600" />;
        default:
            return <FcDocument className="w-10 h-10" />;
    }
};

export const convertedFileSize = (size) => {
    const bytes = parseFloat(size);
    if (isNaN(bytes) || bytes <= 0) {
        return "Unknown";
    }
    let convertedSize = "";
    if (bytes >= 1024 * 1024 * 1024) {
        convertedSize = (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    } else if (bytes >= 1024 * 1024) {
        convertedSize = (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else if (bytes >= 1024) {
        convertedSize = (bytes / 1024).toFixed(2) + " KB";
    } else {
        convertedSize = bytes.toFixed(2) + " Bytes";
    }
    return convertedSize;
};

