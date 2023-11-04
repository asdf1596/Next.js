"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
    let router = useRouter();

    useEffect(() => {
        let cokie = ("; " + document.cookie)
            .split(`; mode=`)
            .pop()
            .split(";")[0];
        if (cokie == "") {
            document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        }
    }, []);

    return (
        <span
            onClick={() => {
                let cokie = ("; " + document.cookie)
                    .split(`; mode=`)
                    .pop()
                    .split(";")[0];
                if (cokie == "light") {
                    document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                } else {
                    document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                }
            }}
        >
            {" "}
            🌙{" "}
        </span>
    );
}
