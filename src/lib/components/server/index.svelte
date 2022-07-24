<script lang="ts">
    import { Button } from "carbon-components-svelte";
    import { TextInput } from "carbon-components-svelte";

    import { connect } from "$lib/helpers/mqtt";

    let uri = "";

    function OnConnect() {
        connect(uri);
    }
</script>

<div class="server">
    <div class="bx--label">
        Enter the name and address of the MQTT broker.<br />
        The MQTT broker needs to have websockets support enabled.
    </div>

    <TextInput size="sm" inline labelText="URI" placeholder="wss://127.0.0.18080" bind:value={uri} />

    <div class="buttons">
        <Button size="small" on:click={OnConnect}>Connect</Button>
    </div>
</div>

<style>
    .buttons {
        float: right;
        margin-top: 12px;
    }
</style>
