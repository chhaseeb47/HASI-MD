const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "fb",
    alias: ["fbdl", "facebook"],
    desc: "Download Facebook videos",
    category: "download",
    react: "📥",
    filename: __filename
}, async (conn, mek, m, { reply, q }) => {

    if (!q || !/(facebook\.com|fb\.watch)/i.test(q)) {
        return reply(`
╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣̣
│❌ Invalid Facebook Link
│
│📌 Example:
│ .fb https://facebook.com/xxxxx
╰━━━━━━━━━━━━━━━━━━━━⬣

> 📌𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐇ᴀsɪ 𝐌ᴅ
`);
    }

    try {

        await reply(`
╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│📥 Fetching Facebook Video...
╰━━━━━━━━━━━━━━━━━━━━⬣
`);

        // Public working API
        const api = `https://api.darksadas.xyz/api/facebook?url=${encodeURIComponent(q)}`;
        const res = await axios.get(api);

        if (!res.data || !res.data.result || !res.data.result.video) {
            throw new Error("No downloadable video found.");
        }

        await conn.sendMessage(m.chat, {
            video: { url: res.data.result.video },
            caption: `
╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│🎥 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐕𝐈𝐃𝐄𝐎
│
│✅ Download Complete
╰━━━━━━━━━━━━━━━━━━━━⬣

> 📌𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐇ᴀsɪ 𝐌ᴅ
`
        }, { quoted: mek });

    } catch (err) {

        reply(`
╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│❌ Facebook Download Failed
│
│⚠️ Try again later
╰━━━━━━━━━━━━━━━━━━━━⬣

> 📌𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐇ᴀsɪ 𝐌ᴅ
`);
    }

});
