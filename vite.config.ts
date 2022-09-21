import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        Unocss({
            presets: [
                presetAttributify({
                    /* preset options */
                }),
                presetUno(),
                // ...custom presets
            ],
            rules: [
                [
                    /^sd-(\d+)$/,
                    ([, d]) => ({ "box-shadow": `0 0  ${d}px gray` }),
                ],
                [
                    /^windText$/,
                    ([, _]) => ({
                        color: `transparent`,
                        background: `linear-gradient(90deg, rgba(243, 72, 104, 1) 20.232394366197184%, rgba(242, 71, 104, 1) 20.232394366197184%, rgba(158, 0, 236, 1) 80.23239436619718%)`,
                        "backdrop-filter": `opacity(20%)`,
                        "-webkit-backdrop-filter": `opacity(20%)`,
                        "background-size": `200% 100%`,
                        "background-position": `0% 0%`,
                        "background-clip": `text`,
                        "-webkit-background-clip": `text`,
                        animation: `flag 1.5s linear infinite`,
                    }),
                ],
                [
                    /^bgBlur$/,
                    ([, _]) => ({
                        background: `rgba(16 18 27 / 40%)`,
                        "backdrop-filter": `blur(20px)`,
                        "-webkit-backdrop-filter": `blur(20px)`,
                        "font-weight": 500,
                    }),
                ],
                [/^borderBottom$/, ([, _]) => ({
                    "border-bottom": `1px solid rgba(113 119 144 / 25%)`
                })],
                [/^borderRight$/, ([, _]) => ({
                    "border-right": `1px solid rgba(113 119 144 / 25%)`
                })],
            ],
            shortcuts: {
                windTextColor: "windText hover:color-black",
            },
        }),
        react(),
    ],
});
