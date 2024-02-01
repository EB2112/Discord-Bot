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
    if (message.content.toLowerCase() == "hello botty"){
        message.reply(`Hello ${message.author.globalName}!`);
    }

    if (message.content.toLowerCase() == "goodnight botty"){
        message.reply(`Goodnight ${message.author.globalName}! 😊😊😴😴🍆🍆💦💦🤤🤤`);
    }

} );

client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'add'){
        const num1 = interaction.options.get('first-num').value;
        const num2 = interaction.options.get('second-num').value;

        interaction.reply(`That plus that is ${num1 + num2}.`)
    }

    }
);
client.login(process.env.TOKEN);