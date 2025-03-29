const fs = require('fs')
const chalk = require('chalk')

//contact details
global.owner = "+94772836332"
global.ownernomer = "+94772836332"
global.ownername = "Avishka Shavinda"
global.ytname = "YT: Avishka Shavinda"
global.socialm = "GitHub: avishka33"
global.location = "Sri Lanka, Galle, Magalle"

global.ownernumber = '+94772836332'  //creator number
global.ownername = 'Avi' //owner name
global.botname = 'AVI new' //name of the bot

//sticker details
global.packname = 'Real King'
global.author = 'AVI-OFC\n\nContact: 0772836332'

//console view/theme
global.themeemoji = '🦄'
global.wm = "Avi Bot"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaGisHDFHWq5jpuEmC2t'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = false //auto view status/story

global.typemenu = 'v2'


global.xbugtex = {
xtxt: 'AVI',
}
global.bimg = '//AVISHKA SHAVINDA/'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./GlobalMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
