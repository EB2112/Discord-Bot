require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
     name: 'add',
     description: "Adds two numbers.",
     options: [
        {
            name: 'first-num',
            description: 'The first number.',
            type: ApplicationCommandOptionType.Number,
            required: true
        },
        {
            name: 'second-num',
            description: 'The second number.',
            type: ApplicationCommandOptionType.Number,
            required: true
        },
     ]
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);
(async() => {
    try{
        console.log('Registering "slash" commands.');
        await rest.put(
            Routes.applicationGuildCommands(process.env.BOT_ID, process.env.TEST_SERVER),
            {body: commands}
        )
        console.log('"Slash" commands were registered successfuly.')
    } catch(error){
        console.log(`${error}`);
    }
})();
