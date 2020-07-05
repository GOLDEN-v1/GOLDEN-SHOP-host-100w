const Discord = require("discord.js");
const agree = '👍';
const disagree = '👎';
let color = `black`;

module.exports.run = async (bot, message, args) => {
if (!args.join(' ')) return message.reply('**โปรดระบุคำถาม**');
const sayMessage = args.join(" ");
let embed = new Discord.RichEmbed()
.setTitle("📝 : **โหวต**")
.setDescription(`\`🏷️:คำถามคือ\` **${sayMessage}**`)
.setFooter(`เวลา : 2นาที`)
.setColor(`color`);
        let msg = await message.channel.send(embed);
        await msg.react(agree);
        await msg.react(disagree);

        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name == agree || reaction.emoji.name == disagree, { time: 120000 });
        message.channel.send(
new Discord.RichEmbed()
.setColor(`color`)
.setTitle(`📔 : **คะเเนนโหวต**`)  
.setDescription(`\`ของคำถาม\` **${sayMessage}​**
${agree}: ${reactions.get(agree).count - 1}

${disagree}: ${reactions.get(disagree).count - 1}`)
);
    },
exports.conf = { aliases: [] };
exports.help = {
  name: 'poll'
}