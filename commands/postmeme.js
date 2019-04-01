const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    setTimeout(function() {
      message.reply("**Time to Postmeme!** :3");
    }, 121000)

}

module.exports.help = {
    name: "postmeme"
}
