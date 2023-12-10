import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import BC from "../components/BC";
import { useEffect, useState } from "react";

export default function PageOSLicense() {
    const [data, setData] = useState("");
    const fetch = async () => {
        try {
            const res = await axios.get('/third-party-licenses.txt');
            if (res.data) {
                setData(res.data);
            }
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        fetch();
    }, []);


    return (
        <>
            <BC data={[
                {
                    title: "Open Source license",
                    currentPage: true
                }
            ]} />
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h5">Open Source license</Typography>
                    <Typography variant="body2">The following npm package may be included in this site</Typography>

                    {data ? (
                        <pre style={{ borderRadius: '8px', textShadow: 'none', padding: '1rem', background: '#ffc7c730', width: '100%', wordBreak: 'break-word', overflow: 'auto' }}>
                            {data}
                        </pre>
                    ) : (
                        <LinearProgress sx={{ my: 3 }} />
                    )}

                </CardContent>

            </Card>
        </>
    )
}