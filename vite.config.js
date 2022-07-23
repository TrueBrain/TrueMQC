import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            // Make an import alias to the nodejs package, for easy inclusion.
            mqtt: "mqtt/dist/mqtt.min.js",
        },
    },
};

export default config;
