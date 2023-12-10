import { Card, Typography } from "@mui/material";
import cls from "./Title.module.scss";
import clsx from "clsx";

export default function Title({ primary, secondary }: { primary: string, secondary: string }) {
    return (
        <Card className={cls.LineTitle}>
            <div className={clsx(cls.LineGroup, cls.First)}>
                <div className={cls.Line} />
                <div className={cls.Line} />
                <div className={cls.Line} />
            </div>
            <div className={cls.Text}>
                <Typography className={cls.Primary}>{primary}</Typography>
                <Typography className={cls.Secondary}>{secondary}</Typography>
            </div>
            <div className={cls.LineGroup}>
                <div className={cls.Line} />
                <div className={cls.Line} />
                <div className={cls.Line} />
            </div>
        </Card>
    )
}