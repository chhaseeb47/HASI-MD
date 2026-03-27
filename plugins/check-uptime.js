const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "uptime",
    alias: ["runtime", "up"],
    desc: "Live uptime with HASI-MD style",
    category: "main",
    react: "⏱️",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {

        // First message
        let sent = await conn.sendMessage(from, {
            text: "⏳ *HASI-MD starting uptime…*"
        }, { quoted: mek });

        // Run for 60 seconds (1 minute)
        for (let i = 0; i < 60; i++) {

            const up = runtime(process.uptime());

            const text = `
*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣*
*│♲︎︎︎ ⏱️ ᴜᴘᴛɪᴍᴇ:* ${up}
*│✌︎ 🤖 ʙᴏᴛ:* ${config.BOT_NAME}
*│✍︎ 👑 ᴏᴡɴᴇʀ:* ${config.OWNER_NAME}
*│✈︎ ⚙️ ᴍᴏᴅᴇ:* ${config.MODE}
*╰━━━━━━━━━━━━━━━━━━━━⬣*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐇ᴀsɪ 𝐌ᴅ
`;

            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: sent.key,
                        type: 14,
                        editedMessage: { conversation: text }
                    }
                },
                {}
            );

            // wait 1 second
            await new Promise(r => setTimeout(r, 1000));
        }

    } catch (e) {
        console.error("UPTIME ERROR:", e);
        reply(`
*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣*
*│❌ ᴜᴘᴛɪᴍᴇ ᴇʀʀᴏʀ*
*│⏳ Please try again later*
*╰━━━━━━━━━━━━━━━━━━━━⬣*
`);
    }
});
