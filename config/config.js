//server bot config
var config = {};
config.token = "NzE1MjI2ODcwMzE2MTM4NTI2.XwGoEg.n0tE3zyH4CU6C6bhiw2sKNUiGvI"; //โทเคนบอท
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
