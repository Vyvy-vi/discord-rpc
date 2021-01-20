const rpc = require("discord-rpc");

const client = new rpc.Client({ 'transport': 'ipc' });
client.on('ready', () => {
    client.request('SET_ACTIVITY',{
        pid = process.pid,
        activity: {
            details: "hello world",
            assets: {
                large_image: "polygons",
                large_text: "life..."
            },
            buttons: [
                {label: "Github", url: "https://github.com/Vyyv-vi"},
                {label: "Website", url: "https://Vyvy-vi.github.io"},
                {label: "broken_button", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            ]
    })
})
client.login({ clientId : "801410700689932298" }).catch(console.error)
