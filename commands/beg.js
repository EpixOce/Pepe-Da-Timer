const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    setTimeout(function() {
        message.delete();
    }, 30000)

    setTimeout(async function() {
        const r = await message.reply("**Time to Beg!** :3");
        setTimeout(function() {
            r.delete();
        }, 30000)
    }, 61000)
}

module.exports.help = {
    name: "beg"
}
