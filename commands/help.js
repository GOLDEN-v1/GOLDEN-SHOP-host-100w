const Discord = require("discord.js");
let color = `black`;
/*

!! ห้ามลบ Credits ส่วนนี้ !!
!! เครดิต AkenoSann#4284 และทีมงาน http://Fortune.moe !!
!! ไม่อนุญาติให้นำจำหน่ายหรือใช้ในเชิงพาณิชณ์
!! ไม่อนุญาติให้นำไปแอบอ้างผลงาน
!! หากใช้แล้วพบปัญหา ติดต่อ support@fortune.moe

*/
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
let embedm = new Discord.RichEmbed()
.setTitle(`หน้า 1`)
.setDescription(`--`)

let embed = new Discord.RichEmbed()
.setTitle("GOLDEN SHOP HELP COMMAND")
.setDescription("กดปุ่มต่างๆๆเพื่อดูคำสั่งคร่าวๆๆ")

let embeda = new Discord.RichEmbed()
.setTitle(`หน้า 2`)
.setDescription(`--`)

let embedb = new Discord.RichEmbed()
.setTitle(`หน้า 3`)
.setDescription(`--`)

let embedc = new Discord.RichEmbed()
.setTitle(`หน้า 4`)
.setDescription(`--`)

let embedd = new Discord.RichEmbed()
.setTitle(`หน้า 5`)
.setDescription(`--`)

let embede = new Discord.RichEmbed()
.setTitle(`หน้า 6`)
.setDescription(`--`)

/**
 *
 *
 * @param {import("discord.js").Client} bot
 * @param {import("discord.js").Message} message
 * @param {String[]} args
 */

module.exports.run = async (bot, message, agrs) => {
  let author = message.author;
  let msg;
  if(await message.channel.memberPermissions(message.member)){
  msg = message.channel.send(embed.setFooter(`${config.prefix}help • ดูเมนูคำสั่ง`, `${message.author.displayAvatarURL}`).setTimestamp().setColor(color));
  }else{
    message.channel.send("ส่งคำสั่งไปส่วนตัวแล้ว")
    msg = message.author.send(embed.setFooter(`${config.prefix}help • ดูเมนูคำสั่ง`, `${message.author.displayAvatarURL}`).setTimestamp().setColor(color));
  }
  
  msg.then(async (msg) => {
      await msg.react('🏡');
      await msg.react('🎵');
      await msg.react('🎉');
      await msg.react('📺');
      await msg.react('📝');
      await msg.react('🤔');
      msg.react('🚫');
  })
  msg = await msg
  const filter = (reaction, user) => ['🏡','🎵','🎉','📺','📝','🤔','🚫','❌'].includes(reaction.emoji.name) && user.id === author.id;
  const collector = await msg.createReactionCollector(filter, { time: 1000*60*60 });
  collector.on('collect',async r => {
    let user = r.users.last()
    user.id!=bot.user.id&&r.remove(user);
    let embedtosend;
      if (r.emoji.name === '🏡') {
        embedtosend = embed 
      }
      if (r.emoji.name === '📺') {
        embedtosend = embedb
      }
      if (r.emoji.name === '🎵'){
        embedtosend = embedm
      }
      if (r.emoji.name === '🎉') {
        embedtosend = embeda
      }
      if (r.emoji.name === '📝') {
        embedtosend =embedc
      }
      if (r.emoji.name === '🤔') {
        embedtosend =embedd
      }
      if (r.emoji.name === '🚫') {
        embedtosend =embede
      }
      if (r.emoji.name === '❌') {
        embedtosend =embedf
      }
      embedtosend.setFooter(`${config.prefix}help • ดูเมนูคำสั่ง`, `${message.author.displayAvatarURL}`).setTimestamp().setColor(color)
      msg.edit(embedtosend);
  });
  collector.on('end', ()=>{if(msg) msg.clearReactions()});
};

exports.conf = { aliases: [] };
exports.help = {
    name: 'help'
}
