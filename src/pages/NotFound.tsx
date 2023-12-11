import { Box, Typography } from "@mui/material";

import NotFound from "./../assets/37.png";
import { Img } from "react-image";

export default function PageNotFound() {
    return (
        <Box sx={{ height: 'calc(100vh - 66px - 2rem)', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Img src={NotFound} width="300px" />
            <Typography mt={2} color="white" variant="h6">page not found :(</Typography>
            <Typography variant="body2">sorry goshujin-sama, i can't find it for you n..nyan~</Typography>
        </Box>
    )
}