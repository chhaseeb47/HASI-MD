const { cmd } = require('../command');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { runtime } = require('../lib/functions');
const config = require('../config');

/* =======================
   FULL SYSTEM PING
   Command: .ping
======================= */
cmd({
    pattern: "ping",
    react: "🌈",
    desc: "Check system speed & full report",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const speed = Date.now() - m.messageTimestamp * 1000;

        const caption = `
*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣*
*│⚡ ᗷOT Տᑭᗴᗴᗪ*
*│*
*│🚀 sᴘᴇᴇᴅ:* ${speed}ms
*│🧠 ᴜᴘᴛɪ.ᴇ:* ${runtime(process.uptime())}
*│❤️‍🔥 ᴠᴇʀsɪᴏɴ:* v${config.VERSION || "5.0.0"}
*╰━━━━━━━━━━━━━━━━━━━━⬣*

> 📌 ᴘᴏᴡᴇʀ ʙʏ ᴍᴀғɪᴀ ᴀᴅᴇᴇʟ
`;

        await conn.sendMessage(from, {
            text: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363422510118376@newsletter',
                    newsletterName: '𝐇ᴀsɪ 𝐌ᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // 🔊 Audio
        const audioPath = path.join(__dirname, '../assets/ping.m4a');
        if (fs.existsSync(audioPath)) {
            await conn.sendMessage(from, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: mek });
        }

    } catch (e) {
        console.error("PING ERROR:", e);
        reply("❌ Ping command failed");
    }
});


/* =======================
   QUICK PING
   Command: .ping2
======================= */
cmd({
    pattern: "ping2",
    react: "🚀",
    desc: "Quick ping check",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const start = Date.now();
        const temp = await conn.sendMessage(from, { text: "⏳ *Checking speed...*" }, { quoted: mek });
        const speed = Date.now() - start;

        const msg = `
*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣̣*
*│⚡ 𝐐𝐔𝐈𝐂𝐊 𝐏𝐈𝐍𝐆*
*│*
*│🚀 𝐒𝐩𝐞𝐞𝐝:* ${speed}ms
*│🟢 𝐒𝐭𝐚𝐭𝐮𝐬:* Online
*│📦 𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* v${config.VERSION || "5.0.0"}
*╰━━━━━━━━━━━━━━━━━━━━⬣*

> 📌 ᴘᴏᴡᴇʀ ʙʏ ᴍᴀғɪᴀ ᴀᴅᴇᴇʟ
`;

        await conn.sendMessage(from, {
            text: msg,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363422510118376@newsletter',
                    newsletterName: '𝐇ᴀsɪ 𝐌ᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: temp });

    } catch (e) {
        console.error("PING2 ERROR:", e);
        reply("❌ Ping2 failed");
    }
});
