import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

export default function BC({
    data
}: {
    data: {
        currentPage?: boolean,
        to?: string,
        title: string
    }[]
}) {
    return (
        <Breadcrumbs sx={{ my: 2 }} aria-label="breadcrumb">
            <Link color="white" underline="hover" component={LinkRouter} to="/">
                <Typography fontSize="12px">
                    Home
                </Typography>
            </Link>
            {data.map((d, i) => d.currentPage ? (
                <Typography fontSize="12px" color="white" key={i}>{d.title}</Typography>
            ) : (
                <Link
                    key={i}
                    underline="hover"
                    color="white"
                    sx={{ fontSize: "12px" }}
                    component={LinkRouter}
                    to={d.to ?? ""}
                >
                    <Typography fontSize="12px">
                        {d.title}
                    </Typography>
                </Link>
            ))}
        </Breadcrumbs>
    )
}