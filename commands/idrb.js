const discord = require("discord.js");
const roblox = require("noblox.js");

module.exports.run = async (bot, message, args) => {
      let username = args[0]
     if (username) {
       roblox.getIdFromUsername(username).then(id => {
         if (id) {
           roblox.getPlayerInfo(parseInt(id)).then(function(info) {
             let embed = new discord.RichEmbed()

             .setColor("#f9ae00")
             .setTimestamp()
             .setImage(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
             .setTitle(`ข้อมูลผู้เล่น ROBLOX`)
             .addField("ชื่อผู้ใช้", info.username || 'ผิดพลาด')
             .addField("เลขไอดี", id || 'ผิดพลาด')
             .addField("อายุของไอดี", `${info.age} วัน` || 'ผิดพลาด')
             .addField("ข้อมูลผู้เล่น", `[กดที่นี่เพื่อดูข้อมูล](https://roblox.com/users/${id}/profile)`)
             .setFooter(`${config.prefix}help • ดูเมนูคำสั่ง`)
             .setColor(`#0099ff`)
              message.channel.send({embed})
           })
         }

       }).catch(function (err) {
         message.channel.send(new discord.RichEmbed()
         .setTitle(`ผิดพลาด`)
         .setDescription(`ไม่พบผู้เล่นที่คุณต้องการหาครับ`)
         .setColor(`RED`))
       });
    } else {
       message.channel.send(new discord.RichEmbed()
       .setTitle(`ผิดพลาด`)
       .setDescription(`โปรดใส่ชื่อผู้เล่นด้วยครับ`)
       .setColor(`RED`)
       ) 
     }
        }
        exports.conf = { aliases: [] };
        exports.help = {
          name: 'idrb'
          };