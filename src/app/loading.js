import { Box } from "@mui/material";
import style from "../css/loading.module.css";

export default function Loading() {
    return <>
        <Box className={style.loader}>
            <Box className={style.container}>
                <Box className={style.dot}></Box>
                <Box className={style.dot}></Box>
                <Box className={style.dot}></Box>
                <Box className={style.dot}></Box>
            </Box>
        </Box>
    </>
}

