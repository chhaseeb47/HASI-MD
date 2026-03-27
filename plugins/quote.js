const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "quote",
    alias: ["qimg", "quoteimg"],
    desc: "Create quote image",
    category: "fun",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, reply, text }) => {
    try {
        if (!text) {
            return reply(`❌ Please provide text\n\nExample:\n.quote Dream big, work hard`);
        }

        // API URL
        const apiUrl = `https://arslanmd-api.vercel.app/api/quote?text=${encodeURIComponent(text)}`;

        reply("✨ Creating quote image...");

        const { data } = await axios.get(apiUrl);

        if (!data || data.status !== true) {
            return reply("❌ Failed to generate quote image.");
        }

        const imageUrl = data.result?.image || data.result;

        if (!imageUrl) {
            return reply("❌ No image received from API.");
        }

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `🖋️ *Quote Generated*\n\n"${text}"\n\n© POWERED BY ${config.BOT_NAME || '𝐅𝐀𝐈𝐙𝐀𝐍-𝐌𝐃'}`
        }, { quoted: mek });

    } catch (error) {
        console.error("Quote Plugin Error:", error);
        reply("❌ Error while generating quote. Try again later.");
    }
});
