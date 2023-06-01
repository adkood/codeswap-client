import React, { useEffect, useState } from "react";
const alerts: any = {
    textcopy: {
        value: "Text copied to clipboard!✅",
        time: 2000,
        bg: "bg-success",
    },
    shareroom: {
        value: "Room-Id Copied To clipboard!✅",
        time: 2000,
        bg: "bg-success",
    },
};
const Alert: React.FC<{ type: string; setIsOpen: any; isOpen: boolean }> = ({
    type,
    setIsOpen,
    isOpen,
}) => {
    useEffect(() => {
        setIsOpen(true);
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, alerts[type].time);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="toast toast-end">
            <div
                className={`alert alert-secondary text-base-100 ${alerts[type].bg}`}
            >
                <div>
                    <span>{alerts[type].value}</span>
                </div>
            </div>
        </div>
    );
};

export default Alert;
