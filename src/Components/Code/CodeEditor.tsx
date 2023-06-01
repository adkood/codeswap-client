import React, { useEffect } from "react";
import MonacoEditor, {
    DiffEditor,
    useMonaco,
    loader,
} from "@monaco-editor/react";

const CodeEditor: React.FC<{
    selectedLanguage: string;
    setEditorValue: any;
    value: string;
    isReadOnly: boolean;
    patchBackend: () => void;
}> = ({
    selectedLanguage,
    setEditorValue,
    value,
    isReadOnly,
    patchBackend,
}) => {
    const monaco = useMonaco();
    useEffect(() => {
        patchBackend();
    }, [value]);

    useEffect(() => {
        // do conditional chaining
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        // or make sure that it exists by other ways
        if (monaco) {
            // console.log("here is the monaco instance:", monaco);
        }
    }, [monaco]);
    const onChangeHandler = (val: any) => {
        setEditorValue(() => val);
    };
    return (
        <>
            <div className="h-[calc(100%-5rem)] p-0">
                <MonacoEditor
                    // height="100%"
                    language={selectedLanguage.toLowerCase()}
                    // theme="vs-dark"
                    // defaultLanguage="javascript"
                    defaultValue={value}
                    options={{
                        formatOnType: true,
                        autoIndent: "full",
                        formatOnPaste: true,
                        colorDecorators: true,
                        readOnly: isReadOnly,
                    }}
                    onChange={onChangeHandler}
                />
            </div>
        </>
    );
};

export default CodeEditor;
