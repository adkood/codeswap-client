import React from "react";
import QRCode from "qrcode.react";

const QrCode = ({ link, setshowQr }: any) => {
    const onClose = () => {
        setshowQr(false);
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-backdrop-500">
            <div className="bg-white gap-2 w-fit p-6 pb-4 rounded-lg shadow-lg flex flex-col items-center justify-center content-center">
                <QRCode value={link} size={200}/>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default QrCode;
