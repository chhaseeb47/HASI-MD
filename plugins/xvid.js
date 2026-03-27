//==========================================X-Video===========================================
const apiurl = `${api.XVID_API}`;

cmd({
    pattern: "xvideo",
    alias: ["xvdl", "xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo <text>',
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("❌ *Please enter a search query!*");
      
        // Fetch search results
        const xv_list = await fetchJson(`${apiurl}/search/xvideo?text=${encodeURIComponent(q)}`).catch(() => null);
        if (!xv_list || !xv_list.result || xv_list.result.length === 0) {
            await m.react('❌');
            return await reply("❌ *No results found!*");
            
        }

        // Fetch video details from the first search result
        const xv_info = await fetchJson(`${apiurl}/download/xvideo?url=${encodeURIComponent(xv_list.result[0].url)}`).catch(() => null);
        if (!xv_info || !xv_info.result || !xv_info.result.dl_link) {
            await m.react('❌');
            return await reply("❌ *Failed to fetch video details!*");
        }
        // Prepare the message
        const msg = `◈ 𝐗 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑

◈=======================◈
╭──────────────╮
┃ 🎞 *Title* - ${xv_info.result.title || "N/A"}
┃
┃ 👱‍♂️ *Views* - ${xv_info.result.views || "N/A"}
┃
┃ 👍 *Likes* - ${xv_info.result.like || "N/A"}
┃
┃ 👎 *Dislikes* - ${xv_info.result.deslike || "N/A"}
┃
┃ 📂 *Size* - ${xv_info.result.size || "N/A"}
┃
╰──────────────╯
⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁

> 🔢 Reply below number

1 │❯❯◦ Video File 🎶
2 │❯❯◦ Document File 📂

*${bot.COPYRIGHT}*`;

        // Sending details message
        const vv = await conn.sendMessage(from, {
            text: msg,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "DEW-MD X Video Downloader",
                    body: "Click to view more videos",
                    thumbnailUrl: xv_info.result.image || "",
                    sourceUrl: xv_info.result.url || "",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':;
                    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                        await conn.sendMessage(from, {video: { url: xv_info.result.dl_link },caption: `🎬 *${xv_info.result.title || "Untitled Video"}*\n\n*${bot.COPYRIGHT}*`}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                        await m.react('✅');
                        break;
                    case '2':;
                    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                        await conn.sendMessage(from,{document:{ url: xv_info.result.dl_link },mimetype:"video/mp4",fileName:xv_info.result.title + ".mp4",caption :`*${bot.COPYRIGHT}*`},{quoted:mek})
                        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                        await m.react('✅');
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });
        console.log(`♻ Xvideos Command Used : ${from}`);
    } catch (error) {
        console.error("❌ Xvideo Downloader Error:", error);
        reply('❌ *An error occurred while processing your request. Please try again later.*');
    }
});
