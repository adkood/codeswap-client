import Editor from "@/Components/Code/CodeEditor";
import EditorNavBar from "@/Components/Code/EditorNavBar";
import Alert from "@/Components/UI/Alert";
import axios from "axios";
import Error from "next/error";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdHomeRepairService } from "react-icons/md";
export const languages = [
    "C++",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Ruby",
];
const defaultEditorValue = `
let arr = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8],
    [10, 2, 3],
];

function maxInArrays(arr) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        let maxi = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxi) maxi = arr[i][j];
        }
        //ill be having the max elem of arr[i]th array in maxi
        ans.push(maxi);
    }
    return ans;
}

console.log(maxInArrays(arr));`;

const Code = ({ data, status, readKey, writeKey }: any) => {
    const router = useRouter();
    console.log(data?.language);
    const [language, setlanguage] = useState(data?.language);
    const [editorValue, setEditorValue] = useState(data?.value);
    const [textCopyAlert, settextCopyAlert] = useState(false);
    const [shareRoomAlert, setshareRoomAlert] = useState(false);
    if (status != 200) {
        return <Error statusCode={404} />;
    }
    const { id }: any = router.query;
    const isReadOnly = id[id.length - 1] == "r";

    // console.log(readKey);
    // console.log(writeKey);
    const patchBackend = async () => {
        const link = `${
            process.env.NODE_ENV == "production"
                ? process.env.NEXT_PUBLIC_BACKEND_URL_PROD
                : process.env.NEXT_PUBLIC_BACKEND_URL_DEV
        }/api/room/${id}`;

        // const response = await fetch(link);

        const response = await axios({
            method: "patch",
            url: link,
            data: {
                value: editorValue,
                language,
            },
        });
    };
    return (
        <>
            <EditorNavBar
                setLanguage={setlanguage}
                language={language}
                languages={languages}
                selectedLanguage={language}
                editorValue={editorValue}
                roomId={id}
                readKey={readKey}
                writeKey={writeKey}
                setshareRoomAlert={setshareRoomAlert}
                settextCopyAlert={settextCopyAlert}
                patchBackend={patchBackend}
            />
            <Editor
                selectedLanguage={language}
                setEditorValue={setEditorValue}
                value={editorValue}
                isReadOnly={isReadOnly}
                patchBackend={patchBackend}
            />
            {textCopyAlert && (
                <Alert
                    type={"textcopy"}
                    isOpen={textCopyAlert}
                    setIsOpen={settextCopyAlert}
                />
            )}
            {shareRoomAlert && (
                <Alert
                    type={"shareroom"}
                    isOpen={shareRoomAlert}
                    setIsOpen={setshareRoomAlert}
                />
            )}
        </>
    );
};

export async function getServerSideProps({ params }: any) {
    // Make the API call
    try {
        const key = params.id;

        const link = `${
            process.env.NODE_ENV == "production"
                ? process.env.NEXT_PUBLIC_BACKEND_URL_PROD
                : process.env.NEXT_PUBLIC_BACKEND_URL_DEV
        }/api/room/${key}`;

        // const response = await fetch(link);

        const response = await axios({
            method: "get",
            url: link,
        });
        const readKey: string = response.data.readKey;
        const writeKey: string = response.data.writeKey
            ? response.data.writeKey
            : null;

        // Pass the fetched data as props to the component
        return {
            props: {
                data: response.data,
                status: response.status,
                readKey,
                writeKey,
            },
        };
    } catch {
        return {
            props: {
                data: null,
                status: 404,
            },
        };
    }
}

export default Code;
