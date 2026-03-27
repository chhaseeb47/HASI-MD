const fs = require('fs');
if (fs.existsSync('api.env')) {
  require("dotenv").config({
    'path': ".api.env"
  });
}
function convertToBool(_0xdd9a66, _0x24ee1c = "true") {
  return !!(_0xdd9a66 === _0x24ee1c);
}
module.exports = {
  'AUTO_AI_API': process.env.AUTO_AI_API || "https://apis.davidcyriltech.my.id/ai/deepseek-v3?text",
  'BLACKBOX_API': process.env.BLACKBOX_API || "https://apis.davidcyriltech.my.id/blackbox?q=",
  'GEMINI_API': process.env.GEMINI_API || 'https://api.giftedtech.web.id/api/ai/geminiai?apikey=_0x5aff35,_0x1876stqr&q=',
  'GPT_API': process.env.GPT_API || "https://apis.davidcyriltech.my.id/ai/chatbot?query=",
  'GPT4_API': process.env.GPT4_API || "https://api.giftedtech.web.id/api/ai/gpt4?apikey=_0x5aff35,_0x1876stqr&q=",
  'DEEPSEEK_API': process.env.DEEPSEEK_API || 'https://apis.davidcyriltech.my.id/ai/deepseek-v3?text=',
  'LIMA_API': process.env.LIMA_API || "https://apis.davidcyriltech.my.id/ai/llama3?text=",
  'IMAGEGEN_API': process.env.IMAGEGEN_API || 'https://api.giftedtech.web.id/api/ai/fluximg?apikey=_0x5aff35,_0x1876stqr&prompt=',
  'FLUX_API': process.env.FLUX_API || "https://api.siputzx.my.id/api/ai/flux?prompt=",
  'IMAGEGEN2_API': process.env.IMAGEGEN2_API || 'https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=',
  'IMAGEGEN3_API': process.env.IMAGEGEN2_API || "https://api.siputzx.my.id/api/ai/stabilityai?prompt=",
  'DALL_API': process.env.DALL_API || 'https://apis.davidcyriltech.my.id/diffusion?prompt=',
  'GPT4_API': process.env.GPT4_API || "https://suhas-bro-apii.vercel.app/Gpt-4?q=",
  'DERANA_API': process.env.DERANA_API || "https://suhas-bro-api.vercel.app/news/derana",
  'HIRU_API': process.env.HIRU_API || "https://suhas-bro-apii.vercel.app/hiru",
  'BBC_API': process.env.BBC_API || "https://suhas-bro-api.vercel.app/news/bbc",
  'LANKADEEPA_API': process.env.LANKADEEPA_API || "https://suhas-bro-api.vercel.app/news/lankadeepa",
  'ITN_API': process.env.ITN_API || 'https://suhas-bro-api.vercel.app/news/itn',
  'SIYATHA_API': process.env.SIYATHA_API || "https://suhas-bro-api.vercel.app/news/siyatha",
  'LANKANEWS_API': process.env.LANKANEWS_API || "https://suhas-bro-api.vercel.app/news/lnw",
  'GOSSIPLANKA_API': process.env.GOSSIPLANKA_API || "https://suhas-bro-api.vercel.app/news/gossiplankanews",
  'TECH_API': process.env.TECH_API || 'https://apis.davidcyriltech.my.id/random/technews',
  'NETH_API': process.env.NETH_API || 'https://suhas-bro-api.vercel.app/news/nethnews',
  'YTMP3_API': process.env.YTMP3_API || "https://apis.davidcyriltech.my.id/download/ytmp3?url=",
  'YTMP4_API': process.env.YTMP4_API || "https://apis.davidcyriltech.my.id/download/ytmp4?url=",
  'APK_API': process.env.APK_API || "https://apis.davidcyriltech.my.id/download/apk?text=",
  'MEDIAFIRE_API': process.env.MEDIAFIRE_API || 'https://apis.davidcyriltech.my.id/mediafire?url=',
  'RINGINTONE_API': process.env.RINGINTONE_API || "https://www.dark-yasiya-api.site/download/ringtone?text=",
  'TIKTOK_API': process.env.TIKTOK_API || "https://manul-official-api.vercel.app/scrape-tiktok?url=",
  'XVID_API': process.env.XVID_API || "https://www.dark-yasiya-api.site/",
  'WAIFU_API': process.env.WAIFU_API || "https://api.waifu.pics/sfw/waifu",
  'DOG_API': process.env.DOG_API || "https://dog.ceo/api/breeds/image/random",
  'FACT_API': process.env.FACT_API || "https://uselessfacts.jsph.pl/random.json?language=en",
  'JOKE_API': process.env.JOKE_API || "https://official-joke-api.appspot.com/random_joke",
  'LOLI_API': process.env.LOLI_API || "https://api.waifu.pics/sfw/waifu",
  'TRUTH_API': process.env.TRUTH_API || "https://apis.davidcyriltech.my.id/truth",
  'DARE_API': process.env.DARE_API || "https://apis.davidcyriltech.my.id/dare",
  'CUP_AI': process.env.CUP_AI || 'https://apis.davidcyriltech.my.id/couplepp',
  'FONT_API': process.env.FONT_API || "https://www.dark-yasiya-api.site/other/font?text=",
  'PAIR_SITE': process.env.PAIR_SITE || "https://usual-marketa-dew-md3-348b662f.koyeb.app/code?number=",
  'TOURL_API': process.env.TOURL_API || "https://api.imgbb.com/1/upload?key=02b01525bdac411947ab8d1e2cd90a68",
  'SS_API': process.env.SS_API || "https://api.paxsenix.biz.id/tools/ssweb?url=",
  'TTS_API': process.env.TTS_API || "https://api.paxsenix.biz.id/tools/tts?text=",
  'NPM_API': process.env.NPM_API || "https://api.vreden.my.id/api/npmstalk?query=",
  'QR_API': process.env.QR_API || "https://api.qrserver.com/v1/create-qr-code/?data="
};
