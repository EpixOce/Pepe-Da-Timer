const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

const bot = new Discord.Client({disableEveryone: true})

bot.commands = new Discord.Collection();

const fs = require("fs");
fs.readdir("./commands/", (err, files) => {

    if(err) console.log (err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Cannot find command.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded.`);
        bot.commands.set(props.help.name, props);
    })

});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is up and running!`)
    bot.user.setActivity("with Epi!", {type: "PLAYING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[1];
    let args = messageArray.slice(2);

    if (!message.content.startsWith(prefix)) return; 

    let commandfile = bot.commands.get(cmd);
    if(commandfile) commandfile.run(bot, message, args);

});


bot.login(process.env.BOTTOKEN);
