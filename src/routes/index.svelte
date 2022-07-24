<script lang="ts">
    import { onMount } from "svelte";

    import Server from "$lib/components/server/index.svelte";

    function ChangeTheme(darkmode) {
        document.documentElement.setAttribute("theme", darkmode ? "g90" : "g10");
    }

    onMount(async () => {
        const colorSchema = window.matchMedia("(prefers-color-scheme: dark)");
        colorSchema.addEventListener("change", (e) => {
            ChangeTheme(e.matches);
        });
        ChangeTheme(colorSchema.matches);
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="/all.css" />
    <title>TrueMQC - MQTT client in your browser</title>
</svelte:head>

<div class="main">
    <div class="title">
        TrueMQC
        <div class="subtitle">Explore your MQTT broker</div>
    </div>

    <div class="window">
        <div class="content">
            <div class="content-inner">
                <Server />
            </div>
        </div>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .window :global(.topnav) {
        display: flex;
        padding-top: 20px;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 62px - 20px - 40px - 20px - 20px);
        justify-content: center;
        padding: 20px;
    }

    .content-inner {
        border: 1px solid var(--cds-ui-04, #8d8d8d);
        height: 100%;
        margin-left: 20px;
        overflow: auto;
        padding: 20px;
        width: 1000px;
    }

    .title {
        font-size: 38px;
        font-weight: bold;
        margin-top: 20px;
        position: relative;
        text-align: center;
    }
    .subtitle {
        font-size: 14px;
        font-weight: normal;
        margin-top: 10px;
    }
</style>
