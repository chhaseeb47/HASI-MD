const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "creator",
    alias: ["coder", "dev", "owner"],
    desc: "Show bot creator information",
    category: "info",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {

        const ownerInfo = {
            name: "𝐇ᴀsᴇᴇʙ 𝐑ᴀsʜɪᴅ",
            number: "+923424283753",
            photo: "https://files.catbox.moe/8164u3.png",
            bio: "Developer of HASI-MD"
        };

        const caption = `
*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣*
*│♲︎︎︎ 👑 ᴄʀᴇᴀᴛᴇʀ:* ${ownerInfo.name}
*│♲︎︎︎ 📞 ɴᴜᴍʙᴇʀ:* ${ownerInfo.number}
*│♲︎︎︎ 📝 ʙɪᴏ:* ${ownerInfo.bio}
*│*
*│♲︎︎︎ 🤖 ʙᴏᴛ:* ${config.BOT_NAME}
*│♲︎︎︎ ⚡ ᴠᴇʀsɪᴏɴ:* ${config.VERSION || "5.0.0"}
*╰━━━━━━━━━━━━━━━━━━━━⬣*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐇ᴀsɪ 𝐌ᴅ
`;

        await conn.sendMessage(from, {
            image: { url: ownerInfo.photo },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363422510118376@newsletter',
                    newsletterName: '𝐇ᴀsɪ 𝐌ᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("CREATOR ERROR:", err);
        reply(
`*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣*
*│❌ ᴄʀᴇᴀᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅ ᴇʀʀᴏʀ*
*│⏳ Please try again later*
*╰━━━━━━━━━━━━━━━━━━━━⬣*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐇ᴀsɪ 𝐌ᴅ`
        ); 
    }
});
