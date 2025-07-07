const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");
const { translate } = require("@vitalets/google-translate-api");

cmd({
  pattern: "wikipedia",
  alias: ["wiki"],
  react: "📖",
  desc: "Fetch Wikipedia information and translate to English.",
  category: "information",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
  try {
    if (!q) {
      return reply("Please provide a search query for Wikipedia.");
    }

    await reply("Searching Wikipedia...");

    const response = await fetchJson(`https://api.siputzx.my.id/api/s/wikipedia?query=${encodeURIComponent(q)}`);

    if (!response.status || !response.data) {
      return reply("No results found for your query.");
    }

    const { wiki, thumb } = response.data;

    // Translate the Wikipedia text to English
    const translated = await translate(wiki, { to: "en" });

    let message = `📖 *Wikipedia Result*\n\n📝 *Query:* ${q}\n\n${translated.text}`;

    if (thumb) {
      await conn.sendMessage(m.chat, {
        image: { url: thumb },
        caption: message
      });
    } else {
      await reply(message);
    }

  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});