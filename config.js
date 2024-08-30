//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2347049602299" 
global.namaCreator = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.0' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒" 
global.author = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒-𝛁6" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
