import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";
import dragdrop from "../../../public/assets/icons/dragdrop.svg";


const UploadDropzone = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles.map((file) => file.name));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Box className="center">
            <Paper
                {...getRootProps()}
                className="noshadow"
                sx={{
                    border: "2px dashed #aaa",
                    p: 1,
                    bgcolor: isDragActive ? "primary.light" : "background.paper",
                    cursor: "pointer",
                }}
            >

                <Image src={dragdrop} className="dragdrop" />

                <input {...getInputProps()} />
                {isDragActive ? (
                    <Typography variant="h2" >Drop the files here...</Typography>
                ) : (
                    <Typography variant="h2" className="gry">Drag & Drop files here
                        <br />
                        <span className="bk and">Or</span>
                        <br />
                        <span className="or browse">Browse Files</span>
                    </Typography>
                )}

                {files.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h6">Selected Files:</Typography>
                        <ul className="ulli">
                            {files.map((file, index) => (
                                <li key={index}>{file}</li>
                            ))}
                        </ul>
                    </Box>
                )}

            </Paper>

        </Box>
    );
};

export default UploadDropzone;
