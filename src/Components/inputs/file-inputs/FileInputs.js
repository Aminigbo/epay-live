import React, { useRef, useState } from 'react';
import "./file-inputs.css"

const FileInputs = ({ name, id, }) => {
    const resetRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    return (
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
            <input
                className="file-upload"
                type="file"
                name={name}
                id={id}
                ref={resetRef}
                onChange={handleFileInput}
            />
            {/* {true && (
                <div>
                    <button >Submit</button>
                </div>
            )} */}
        </div>
    );
}

export default FileInputs