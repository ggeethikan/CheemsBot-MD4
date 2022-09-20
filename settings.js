//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = ture //auto tying in gc (true to on, false to off)
global.autoreadpmngc = ture //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = ture //auto reading in gc (true to on, false to off)
global.autoRecord = ture //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94740925284'] //ur owner number
global.ownername = "🦄Tharuwa official" //ur owner name
global.ytname = "YT:Tharuksha official " //ur yt chanel name
global.socialm = "Whatsapp:https://chat.whatsapp.com/DXRrNsAN2z1346anAMTpdC " //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['94740925284']
global.ownertag = '94740925284' //ur tag number
global.botname = 'Tharuwa MD' //ur bot name
global.linkz = "https://youtube.com/channel/UCs9UEyCiQwS0K_930486TSw" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UCs9UEyCiQwS0K_930486TSw" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "💬" //ur theme emoji
global.packname = "Tharuwa MD Stickers\n\n\n\n\n\n\n\n\n\n\n🦄🦄🦄 " //ur sticker watermark packname
global.author = "👥Tharuwa MD" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['94740925284'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = [🇼‌🇪‌🇱‌🇨‌🇴‌🇲‌🇪‌ 🇧‌🇴‌🇹‌ 🇬‌🇷‌🇴‌🇺‌🇵‌ 🍁 

❮❮ ඔයාලට ඕන සින්දුවක් , ඕන වීඩියෝ එකක් , වගේම තව වැඩ ගොඩක් මේ ගෲප් එකෙන් කරගන්න පුලුවන් ❯❯ 

❎සමූහයේ නීති රීති❎ 

☞
🚫Posting links to other groups 

🚫Using abusive words  Posting abusive videos 

🚫Posting indecent images 

4.මෙමෙ නීතිවලට අවනත නොවන්නන් දැනුම් දීමකින් තොරව සමූහයෙන් ඉවත් කරයි(ඇඩ්මින්වරයෙකු දැනුවත් කරන්න)

☞සමූහය තුල ස්පෑම් බාවිතයෙන් වලකින්න. 

🇱‌🇮‌🇳‌🇰‌➡https://chat.whatsapp.com/DXRrNsAN2z1346anAMTpdC]
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
