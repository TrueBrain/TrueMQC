import * as mqtt from "mqtt";

let client: mqtt.MqttClient;

export async function connect(uri: string) {
    client = mqtt.connect(uri);

    client.on("connect", function () {
        // We want to monitor everything.
        client.subscribe("#");
    });

    client.on("message", function (topic, message, packet) {
        console.log(topic);
    });
}
