var config = require('./config');

const rpc = require("discord-rpc");
const client = new rpc.Client({ 'transport': 'ipc' });
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.STATUS,
            assets: {
                large_image: config.LARGE_IMG_NAME,
                large_text: config.FLOATING_TEXT,
                small_image: config.SMALL_IMG_NAME
            },
        buttons: config.BUTTONS
    }})
})
client.login({ clientId : config.CLIENT_ID }).catch(console.error)

