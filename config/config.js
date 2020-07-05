//server bot config
var config = {};
config.token = "token"; //โทเคนบอท
config.prefix = `g!`;
config.version = "V1";

//debug
config.debug = false;
config.delay = "2000";
config.ndelay = "2";

//path 
config.pathcmd = "./commands/";

//id
config.guild = "";
config.creator = "";

//https://www.color-hex.com
config.color = "#3db5ff";
config.colorsuccess = "#afff50";
config.colorfail = "#ff3d3d";

//status
config.status = `${config.prefix}help • ดูเมนูคำสั่ง`;
config.bstatus = "playing"; 
config.setstatus = "available";
module.exports = config;
