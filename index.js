const Discord = require("discord.js")
const bot = new Discord.Client();
const path = require('path');
global.config = require("./config/config.js")
global.prefix = `${config.prefix}`;

//req zone
const fs = require("fs");
const talkedRecently = new Set();


//dont touch it!
global.appRoot = path.resolve(__dirname);
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()


//read command!
fs.readdir(config.pathcmd, (err, files) => {
	if (err)
		console.error(err)
	global.jsfiles = files.filter(f => f.split(".").pop() === "js");
	global.jsfiles = jsfiles.filter(f => f[0]!="-");
	if (jsfiles.length <= 0) {
		return
	}
	jsfiles.forEach(f => {
		let props = require(`${config.pathcmd}${f}`)
		props.fileName = f
		bot.commands.set(props.help.name, props)
		props.conf.aliases.forEach(alias => {
			bot.aliases.set(alias, props.help.name)
		})
	})
})

require('./config/event')(bot);
bot.login(config.token); 