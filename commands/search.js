const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.reply("**Time to Search!** :3");
    }, 61000)
}

module.exports.help = {
    name: "search"
}