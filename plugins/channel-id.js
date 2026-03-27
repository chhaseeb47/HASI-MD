const { cmd } = require("../command");

cmd({
  pattern: "cid",
  alias: ["newsletter", "id"],
  react: "📡",
  desc: "Get WhatsApp Channel info from link",
  category: "whatsapp",
  filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
  try {
    if (!q) {
      return reply(
`╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│ *❌ Channel link missing*
│✎ Example:
│ .cid https://whatsapp.com/channel/xxxx
╰━━━━━━━━━━━━━━━━━━━━⬣`
      );
    }

    const match = q.match(/whatsapp\.com\/channel\/([\w-]+)/);
    if (!match) {
      return reply(
`╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│⚠️ Invalid channel link
│✔ Use proper WhatsApp
│  channel URL
╰━━━━━━━━━━━━━━━━━━━━⬣`
      );
    }

    const inviteId = match[1];

    let metadata;
    try {
      metadata = await conn.newsletterMetadata("invite", inviteId);
    } catch (e) {
      return reply(
`╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│❌ Failed to fetch channel
│🔒 Link may be expired
╰━━━━━━━━━━━━━━━━━━━━⬣`
      );
    }

    if (!metadata || !metadata.id) {
      return reply(
`╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│❌ Channel not found
│⏳ Try again later
╰━━━━━━━━━━━━━━━━━━━━⬣`
      );
    }

    const infoText =
`╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│☘︎ 🆔 ID:
│ ${metadata.id}
│
│☘︎ 📌 Name:
│ ${metadata.name}
│
│☘︎ 👥 Followers:
│ ${metadata.subscribers?.toLocaleString() || "N/A"}
│
│☘︎ 📅 Created:
│ ${metadata.creation_time
  ? new Date(metadata.creation_time * 1000).toLocaleString()
  : "Unknown"}
╰━━━━━━━━━━━━━━━━━━━━⬣

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐇ᴀsɪ 𝐌ᴅ`;

    if (metadata.preview) {
      await conn.sendMessage(from, {
        image: { url: `https://pps.whatsapp.net${metadata.preview}` },
        caption: infoText
      }, { quoted: m });
    } else {
      await reply(infoText);
    }

  } catch (error) {
    console.error("CID ERROR:", error);
    reply(
`╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣
│❌ Unexpected Error
│⏳ Try again later
╰━━━━━━━━━━━━━━━━━━━━⬣`
    );
  }
});
