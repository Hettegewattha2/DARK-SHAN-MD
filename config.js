const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/kushansewmina1234/DARK-SHAN-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '9471234567'
global.devs = '94772108460';
global.website = 'https://github.com/kushansewmina1234/DARK-SHAN-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ee0f303f5da6d86d024e0.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'DARK-SHAN-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKSADIYA' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? DARKSHAN;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0R1cE0wSjZDb3Y4RjFQZUZXbVpZenBFMXA5SmRyZjc2NUM1QzlkQ1hIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm85azNMUUVPUGZKTGZnZTcrZnRRVktVYmhDZUk1NUl0WmYrYUFYcVlYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Q1lVdU1BT0hLdWpJU2V0aGhzTUZTK05oOFJYazdtNnJ2WXFpbXhQaDNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRlJVbXRhM2Yzb05JVllYdHVqVHR0UnFiUUl0R2JOcjN6R1JFck1RYms4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJQ0VxN3dHZzNlcG5jdUxFV2Y0M1F0VHNTMGJ4czdFMWlyM2hwbjdBVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRDYTh5aFRqY2VpSnNwaUtEMnRPbXovMEVqbGxEUUJxNjVTM3R2bEo0QWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0YvUnc3TFJtSURpRjRuUDhZYW5aYUVEdEk2QXdKOVhhVXExQkN1VkZWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlRKNFk3ZllnazRvVFFHSUUwbzNDYWlFNVFQUnR1NkR3eUFvT1A0ZVlGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYwUXEwS2RZU2JDTnBJV0Q1TkY2M0tsM09qdzUxQ01kK0pyVU0yOUxvbTlicytJZ3J3a1VTT2lKRTZ5NnFLMktLK1pZTFJZaUY2dllxdkhYMFZVQ0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiIwSXhwVjQ3bWd3YUpGL1NYTlphODE2M3ZKMXBVMmNrRFhxWkhIbFNoZCtNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgyNDkyNzM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZDMjZDMzlDQ0ZDOEI4Mzc0NjQ5MDQyNjE0NTJDRDU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTM1MDExODF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgyNDkyNzM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc4RDg4MUQ1MkQ5MkE4NTA4ODZGRTU5MjBCRkE3NUMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTM1MDExODN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgyNDkyNzM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGQjg2QkYzOEMzNjZGNzY3NzZERTUxMkEwRkVDNTc3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTM1MDExODV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgyNDkyNzM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ1MjM5NjAzRDEwMzFFMzA2RTdGOTFEREExRURGNDYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTM1MDExODV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRpOVJkb2ZuUjM2ZGVTdjJOZnB3dEEiLCJwaG9uZUlkIjoiOTlhY2IwMzQtOWJjZC00OWMzLThjNTAtMWRhMjkyNTlmYmNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRWanhJSVlrMkJyaXdHUmlFSVk1WThtRkN1MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDWWdIWWh4cVBpVE5rY2V6UGNBUHZOTDh6YTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDRZMlNRSDciLCJtZSI6eyJpZCI6Ijk0NzgyNDkyNzM0OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqqtiBbIPCdkIrwnZCI8J2QjfCdkIYg8J2QkvCdkIDwnZCD8J2QiPCdkJjwnZCAIPCdkI7wnZCF8J2QhfCdkIIgXSDqq4IiLCJsaWQiOiIxMjAxMTM0OTE2NTY3NzU6MjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPclg3Rk1RN2VlSHNRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5V2dsUTRsK2hnS1JYZXpwWU1oZk56U3JUU2NiU1owZVdhRmZwRlBFSTM0PSIsImFjY291bnRTaWduYXR1cmUiOiJ6ZkdFOS9QL0Y0MzdnWjJoRXBCTmJKYjRiVjRtVCt3YTBwSk1mdzNaSjk4Z1NLTWxHYWM3Z3VpL0lrRHl5OUFOMmxxZk9TL1p2Q2hoMmRXdkFyV0xEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXdhUGtPd0lGNDVZejhsbjBzY0xvSEtUK3pwRnBwQTdHSVgzOThBeW9oTStlYlJLaTJIU3oyWEt4U1ZIcnVNcXA3WHRVRUlhV1lSdXhTQzRJdmF3QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MjQ5MjczNDoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmVm9KVU9KZm9ZQ2tWM3M2V0RJWHpjMHEwMG5HMG1kSGxtaFg2UlR4Q04rIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzNTAxMTc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlDYSJ9 : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'DARKSHAN' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'DARK-SHAN-MD' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-0.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'DARKSHAN',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
