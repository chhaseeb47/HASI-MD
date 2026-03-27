const { cmd } = require("../command");
const os = require("os");

cmd({
    pattern: "Hasi",
    alias: ["Hasi"],
    desc: "Hasi full introduction",
    category: "info",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {

        const uptime = process.uptime();
        const h = Math.floor(uptime / 3600);
        const min = Math.floor((uptime % 3600) / 60);
        const sec = Math.floor(uptime % 60);

        const text = `
╭━〔 🌐 𝐇ᴀsɪ 𝐈ɴғᴏ 〕━⬣
│♲︎︎︎ 👤 *Name:* ʜᴀꜱᴇᴇʙ ʀᴀꜱʜɪᴅ
│♲︎︎︎ 🧑‍💼 *Nick:* ʜᴀsɪ 
│♲︎︎︎ 🎂 *Age:* 20
│♲︎︎︎ 🧬 *Caste:* ᴊᴜᴛᴛ
│♲︎︎︎ 🌍 *Country:* ᴘᴀᴋɪsᴛᴀɴ
│♲︎︎︎ 🏙️ *City:* ᴅɢᴋ > ᴋᴏᴛ ᴄʜᴜᴛᴛᴀ
│
│♲︎︎︎ 🤖 *Bot Name:* 𝐇ᴀsɪ 𝐌ᴅ
│♲︎︎︎ 👑 *Owner:* ʜᴀꜱᴇᴇʙ ʀᴀꜱʜɪᴅ
│♲︎︎︎ 📞 *Owner No:* +𝟿23424283753
│♲︎︎︎ 🔣 *Prefix:* .
│♲︎︎︎ ⚙️ *Mode:* ᴘᴜʙʟɪᴄ
│♲︎︎︎ 🔌 *Baileys:* ᴍᴜʟᴛɪ ᴅᴀᴠɪᴄᴇ
│
│♲︎︎︎ ⏳ *Uptime:* ${h}h ${min}m ${sec}s
│♲︎︎︎ 💻 *Platform:* ${os.platform()}
╰━━━━━━━━━━━━━━━━━━━━━━⬣

>  ᴘᴏᴡᴇʀ ʙʏ ᴍᴀғɪᴀ ᴀᴅᴇᴇʟ*
`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [m.sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
    }
});
