require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});
client.on('ready', (c) =>{
    console.log(`${c.user.tag} is born!`)
})

client.on('messageCreate', (message) =>{
    console.log(`${message.author.globalName} says: "${message. content}"`)
    if (message.content.toLowerCase() === 'hello botty'){
        message.reply(`Hello ${message.author.globalName}!`);
    }

} );

client.login(process.env.TOKEN);