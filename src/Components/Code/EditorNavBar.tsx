import React, { useState, useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiFillRead } from "react-icons/ai";
import { FaRegShareSquare, FaQrcode } from "react-icons/fa";
import QrCode from "./QrCode";
const EditorNavBar: React.FC<{
    selectedLanguage: string;
    setLanguage: any;
    languages: string[];
    language: string;
    editorValue: string;
    settextCopyAlert: any;
    roomId: string;
    setshareRoomAlert: any;
    readKey: string | null;
    writeKey: string | null;
    patchBackend: () => void;
}> = ({
    selectedLanguage,
    setLanguage,
    languages,
    language,
    editorValue,
    settextCopyAlert,
    roomId,
    readKey,
    writeKey,
    setshareRoomAlert,
    patchBackend,
}) => {
    const [showQr, setshowQr] = useState(false);
    const [qrLink, setqrLink] = useState("");
    useEffect(() => {
        patchBackend();
    }, [language]);
    const showWriteQrHandler = () => {
        setqrLink(
            () =>
                `${
                    process.env.NODE_ENV == "production"
                        ? process.env.NEXT_PUBLIC_CODE_URL_PROD
                        : process.env.NEXT_PUBLIC_CODE_URL_DEV
                }/${writeKey}`
        );
        setshowQr(true);
    };
    const showReadQrHandler = () => {
        setqrLink(
            () =>
                `${
                    process.env.NODE_ENV == "production"
                        ? process.env.NEXT_PUBLIC_CODE_URL_PROD
                        : process.env.NEXT_PUBLIC_CODE_URL_DEV
                }/${readKey}`
        );
        setshowQr(true);
    };

    const setLanguageHandler = (language: string) => {
        setLanguage(language);
    };
    const handleCopyClick = () => {
        navigator.clipboard
            .writeText(editorValue)
            .then(() => {
                console.log("Text copied to clipboard");
                settextCopyAlert(true);
            })
            .catch((error) => {
                console.error("Error copying text to clipboard:", error);
            });
    };
    console.log(process.env.NEXT_PUBLIC_CODE_URL_PROD);
    const handleWriteShareClick = () => {
        navigator.clipboard
            .writeText(
                `${
                    process.env.NODE_ENV == "production"
                        ? process.env.NEXT_PUBLIC_CODE_URL_PROD
                        : process.env.NEXT_PUBLIC_CODE_URL_DEV
                }/${writeKey}`
            )
            .then(() => {
                setshareRoomAlert(true);
            })
            .catch((error) => {
                console.error("Error copying text to clipboard:", error);
            });
    };
    const handleReadShareClick = () => {
        navigator.clipboard
            .writeText(
                `${
                    process.env.NODE_ENV == "production"
                        ? process.env.NEXT_PUBLIC_CODE_URL_PROD
                        : process.env.NEXT_PUBLIC_CODE_URL_DEV
                }/${readKey}`
            )
            .then(() => {
                setshareRoomAlert(true);
            })
            .catch((error) => {
                console.error("Error copying text to clipboard:", error);
            });
    };

    return (
        <>
            {showQr && <QrCode link={qrLink} setshowQr={setshowQr} />}
            <div className=" h-[5rem]  bg-primary flex bg-primry justify-between items-center pl-2 pr-2 max-w-screen">
                <div>
                    {writeKey && (
                        <button
                            className="btn mr-2"
                            onClick={handleWriteShareClick}
                        >
                            <MdOutlineAdminPanelSettings className="text-2xl " />
                            <FaRegShareSquare className="text-2xl " />
                        </button>
                    )}
                    {readKey && (
                        <button
                            className="btn mr-2"
                            onClick={handleReadShareClick}
                        >
                            <FaRegShareSquare className="text-2xl " />
                        </button>
                    )}
                    {/* {writeKey && (
                        <button
                            className="btn mr-2"
                            onClick={showWriteQrHandler}
                        >
                            <MdOutlineAdminPanelSettings className="text-2xl " />
                            <FaQrcode className="text-2xl " />
                        </button>
                    )} */}
                    {readKey && (
                        <button
                            className="btn mr-2"
                            onClick={showReadQrHandler}
                        >
                            <FaQrcode className="text-2xl " />
                        </button>
                    )}
                </div>
                <div className="flex">
                    <div>
                        <button className="btn mr-2" onClick={handleCopyClick}>
                            <FiCopy className="text-2xl " />
                        </button>
                    </div>
                    <div className="dropdown dropdown-end ">
                        <label
                            tabIndex={0}
                            className="font-bold btn text-slate-200 text-xl bg-neutral normal-case "
                        >
                            {selectedLanguage}
                        </label>
                        <ul
                            tabIndex={0}
                            className="font-bold dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {languages.map((language, idx) => (
                                <li key={idx}>
                                    <a
                                        onClick={() =>
                                            setLanguageHandler(language)
                                        }
                                    >
                                        {language}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditorNavBar;
