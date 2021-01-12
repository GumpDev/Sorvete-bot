const Discord = require('discord.js');
const DotConfig = require("dotenv");
const client = new Discord.Client();

DotConfig.config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activity: { name: '!sorvete para tomar um sorvete' }, status: 'online' })
});

client.on('message', async msg => {
    if (msg.content === '!sorvete') {
        const msg1 = await msg.channel.send("🍦😐")
        const msg2 = await msg.channel.send("hmmm sorvetinho...");

        setTimeout(() => {
            msg2.edit(".")
        }, 2000);

        for(let i = 0; i < 20; i++){
            setTimeout(() => {
                msg1.edit("🍦" + (i % 2 == 0 ? "😛" : "😐"));
            }, 2000 * i);
        }
        
        setTimeout(() => {
            msg2.edit("acabou o sorvetinho")
        }, 20 * 2000 + 1000);
        setTimeout(() => {
            msg1.edit("😔");
        }, 20 * 2000 + 1500);
        setTimeout(() => {
            msg1.delete();
            msg2.delete();
        }, 20 * 1000 + 30000);
    }
});

client.login(process.env.TOKEN);