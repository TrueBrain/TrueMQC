<script lang="ts">
    import { onMount } from "svelte";

    import * as mqtt from "mqtt";

    import { Tabs, Tab, TabContent } from "carbon-components-svelte";

    function ChangeTheme(darkmode) {
        document.documentElement.setAttribute("theme", darkmode ? "g90" : "g10");
    }

    onMount(async () => {
        const colorSchema = window.matchMedia("(prefers-color-scheme: dark)");
        colorSchema.addEventListener("change", (e) => {
            ChangeTheme(e.matches);
        });
        ChangeTheme(colorSchema.matches);

        // Connect to localhost for testing.
        const client = mqtt.connect("wss://127.0.0.1");
        client.on("connect", function () {
            console.log("Check");
            // Subscribe to anything, just to confirm it actually works.
            client.subscribe("#");
        });
        client.on("message", function (topic, message, packet) {
            console.log(topic);
        });
    });
</script>

<Tabs class="topnav">
    <Tab label="Test1" />

    <svelte:fragment slot="content">
        <TabContent />
    </svelte:fragment>
</Tabs>

<svelte:head>
    <link rel="stylesheet" href="/all.css" />
    <title>TrueMQC - MQTT client in your browser</title>
</svelte:head>
