const Discord = require("discord.js");
const db = require("quick.db")
let color = `GOLD`;
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  async execute(message) {

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
let prefix = db.get(`prefix_${message.guild.id}`)
let embedm = new Discord.MessageEmbed()
.setAuthor(`หน้า 1`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> **𝙼𝚄𝚂𝙸𝙲 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂** <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`${prefix}play เล่นเพลง&เพิ่มคิวเพลง
${prefix}stop หยุดเพลง
${prefix}volume ปรับเสียง ปรับได้สูงสุด 100
${prefix}loop เล่นเพลงซ้ำ
${prefix}queue ดูคิวเพลงทั้งหมด
${prefix}skip ข้ามเพลง
${prefix}pause หยุดเพลงที่กำลังเล่นในขณะนี้ชั่วคราว
${prefix}resume เริ่มเล่นเพลงที่ได้ทำการหยุดชั่วคราวต่อ
${prefix}remove ลบเพลงที่ต้องการ
${prefix}np ดูชื่อเพลงที่กำลังเล่นอยู่ขณะนี้\`\`\``)

let embed = new Discord.MessageEmbed()
.setAuthor("หน้าหลัก",message.author.avatarURL())
.setTitle("🤖 | **𝙱𝙾𝚃 𝙷𝙴𝙻𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂**")
.setDescription(`
\`เชิญบอท\` [INVITE BOT](https://discordapp.com/oauth2/authorize?client_id=715226870316138526&scope=bot&permissions=2146958847&response_type=code)
\`เครดิต\` <@617402044659269655> 
> ----------------------------------------------------
> <a:mark3:712695294952996934> **กดปุ่มต่างๆๆเพื่อดูคำสั่งคร่าวๆๆ**
> ----------------------------------------------------`)
let embeda = new Discord.MessageEmbed()
.setAuthor(`หน้า 2`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> 𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`${prefix}asciirandom สุ่มอิโมจิเเบบ ascii
${prefix}asciir สุ่มอิโมจิเเบบ ascii
${prefix}reverse ทำให้ข้อความที่พิมย้อนกลับ
${prefix}revers ทำให้ข้อความที่พิมย้อนกลับ
${prefix}roblox หาข้อมูลผู้เล่น roblox
${prefix}idrb หาข้อมูลผู้เล่น roblox
${prefix}ascii ทำข้อความลายเส้น ภาษาอังกฤษเท่านั้น
${prefix}giveaway สร้างกิจกรรมมเเจกของ\`\`\``)

let embedb = new Discord.MessageEmbed()
.setAuthor(`หน้า 3`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> 𝚄𝚂𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`${prefix}new สร้างห้องลับ|ticket
${prefix}ticket สร้างห้องลับ|ticket
${prefix}idrb หาข้อมูลตัวละคร ROBLOX
${prefix}roblox หาข้อมูลผู้เล่น ROBLOX\`\`\``)

let embedc = new Discord.MessageEmbed()
.setAuthor(`หน้า 5`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> 𝙰𝙳𝙼𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`${prefix}c ปิดห้องลับ
${prefix}close ปิดห้องลับ
${prefix}clear ลบข้อความ
${prefix}clearmsg ลบข้อความ\`\`\``)

let embedd = new Discord.MessageEmbed()
.setAuthor(`หน้า 4`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> 𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`${prefix}bal เช็คเครดิต
${prefix}inv เช็คของในกระเป๋า
${prefix}sell ขายของในกรพเป๋า
${prefix}pay โอนเงินให้คนที่ต้องการ
${prefix}rob แอบโขมยเงินคนอื่น
${prefix}add เพิ่มเงินให้คนอื่น[แอดมิน]
${prefix}removemoney ลบเงินคนอื่น[แอดมิน]
${prefix}fish เล่นเกมตกปลา
${prefix}mine เล่นเกมขุดเหมือง
${prefix}rps เล่นเกมเป่ายิ่งชุบ\`\`\``)

let embede = new Discord.MessageEmbed()
.setAuthor(`หน้า 6`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> 𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`${prefix}prefix เซ็ต prefix\`\`\``)

let embedf = new Discord.MessageEmbed()
.setAuthor(`หน้า 7`,message.author.avatarURL())
.setTitle(` <a:loading1:711602536766767175> 𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽 <a:loading1:711602536766767175>`)
.setDescription(`\`\`\`----คำสั่งใหม่ๆๆทางเราจะอัพเดตให้นะครับ----\`\`\``)

/**
 *
 *
 * @param {import("discord.js").Client} bot
 * @param {import("discord.js").Message} message
 * @param {String[]} args
 */

      let author = message.author;
  let msg;
  if(await message.channel.memberPermissions(message.member)){
  msg = message.channel.send(embed.setFooter(`${prefix}help • ดูเมนูคำสั่ง`,message.member.user.displayAvatarURL()).setTimestamp().setColor(color));
  }else{
    message.channel.send("ส่งคำสั่งไปส่วนตัวแล้ว")
    msg = message.author.send(embed.setFooter(`${prefix}help • ดูเมนูคำสั่ง`,message.member.user.displayAvatarURL()).setTimestamp().setColor(color));
  }
  
  msg.then(async (msg) => {
      await msg.react('🏡');
      await msg.react('🎵');
      await msg.react('❄️');
      await msg.react('🎃');
      await msg.react('💰');
      await msg.react('🛡️');
      await msg.react('👑');
      await msg.react('🎩');
  })
  msg = await msg
  const filter = (reaction, user) => ['🏡','🎵','❄️','🎃','💰','🛡️','👑','🎩'].includes(reaction.emoji.name) && user.id === author.id;
  const collector = await msg.createReactionCollector(filter, { time: 1000*60*60 });
  collector.on('collect',async (r, user) => {
    let embedtosend;
      if (r.emoji.name === '🏡') {
        r.users.remove(user).catch(console.error);
        embedtosend = embed 
      }
      if (r.emoji.name === '🎃') {
        r.users.remove(user).catch(console.error);
        embedtosend = embedb
      }
      if (r.emoji.name === '🎵') {
        r.users.remove(user).catch(console.error);
        embedtosend = embedm
      }
      if (r.emoji.name === '❄️') {
        r.users.remove(user).catch(console.error);
        embedtosend = embeda
      }
      if (r.emoji.name === '🛡️') {
        r.users.remove(user).catch(console.error);
        embedtosend = embedc
      }
      if (r.emoji.name === '💰') {
        r.users.remove(user).catch(console.error);
        embedtosend = embedd
      }
      if (r.emoji.name === '👑') {
        r.users.remove(user).catch(console.error);
        embedtosend = embede
      }
      if (r.emoji.name === '🎩') {
        r.users.remove(user).catch(console.error);
        embedtosend = embedf
      }
      embedtosend.setFooter(`${prefix}help • ดูเมนูคำสั่ง`,message.member.user.displayAvatarURL()).setTimestamp().setColor(color)
      msg.edit(embedtosend);
  });
  collector.on('end', ()=>{if(msg) msg.clearReactions()});
}};
