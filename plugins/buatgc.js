let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");
let handler = async(m, { conn, text }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
         await m.reply(global.wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url + '\n\n' + wm)
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
handler.help = ['creategroup']
handler.tags = ['tools']
handler.command = /^((create|buat)(gc|grup|group))$/
handler.owner = false
handler.premium = true
module.exports = handler
///////////////////////
/// MUHAMMAD AFDHAN ///
///////////////////////