const settings = require('../settings');
const fs = require('fs');
const path = require('path');
const os = require('os');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function helpCommand(sock, chatId, message) {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: '*Loading 🔥....*' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);
    const helpMessage = `
╭══〘〘 *𖤝𝕾𝖆𝖌𝖊 𝐗𝐝 𝐌𝐄𝐍𝐔𖤝* 〙〙══⊷
┃❍ *Owner:* ${settings.botOwner}
┃❍ *Speed:* ${ping} ms
┃❍ *Uptime:* ${uptimeFormatted}
┃❍ *Date:* ${new Date().toLocaleString()}
┃❍ *Version:* ${settings.version} 
┃❍ *Rank:* *S Rank Hunter*
╰══════════════════⊷‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭━━❮ *𖤝OWNER𖤝* ❯━⊷
╏ ➜ .welcome
╏ ➜ .goodbye
╏ ➜ .ban 
╏ ➜ .unban
╏ ➜ .warnings 
╏ ➜ .warn 
╏ ➜ .tag
╏ ➜ .tagall
╏ ➜ .chatbot
╏ ➜ .resetlink
╏ ➜ .antibadword
╏ ➜ .delete
╏ ➜ .kick
╏ ➜ .mute
╏ ➜ .unmute
╏ ➜ .promote
╏ ➜ .demote
╏ ➜ .clear
╏ ➜ .add
╰━━━━━━━━━━━⊷ 
╭━━❮ *𖤝GENERAL𖤝* ❯━⊷
╏ ➜ .jid
╏ ➜ .vv
╏ ➜ .news
╏ ➜ .ping
╏ ➜ .groupinfo
╏ ➜ .weather
╏ ➜ .quote
╏ ➜ .ss
╏ ➜ .tts
╏ ➜ .owner
╏ ➜ .fact
╏ ➜ .attp
╏ ➜ .joke
╏ ➜ .8ball
╏ ➜ .alive
╏ ➜ .lyrics
╏ ➜ .menu
╏ ➜ .admins
╏ ➜ .trt
╰━━━━━━━━━━━⊷
╭━━❮ *𖤝SETTINGS𖤝* ❯━⊷  
╏ ➜ .autostatus  
╏ ➜ .autoread  
╏ ➜ .cleartmp  
╏ ➜ .mode public  
╏ ➜ .mode private  
╏ ➜ .autobio  
╏ ➜ .autoreact  
╏ ➜ .antidelete  
╏ ➜ .getpp  
╏ ➜ .setpp  
╏ ➜ .autotyping  
╏ ➜ .autorecording  
╏ ➜ .clearsession  
╰━━━━━━━━━⊷
╭━━❮ *𖤝STICKER𖤝* ❯━⊷  
╏ ➜ .meme  
╏ ➜ .take  
╏ ➜ .sticker  
╏ ➜ .blur  
╏ ➜ .emojimix  
╏ ➜ .tgsticker  
╏ ➜ .simage  
╰━━━━━━━━━━⊷

╭━━❮ *𖤝GAME𖤝* ❯━⊷  
╏ ➜ .guess  
╏ ➜ .truth  
╏ ➜ .trivia  
╏ ➜ .hangman  
╏ ➜ .answer  
╏ ➜ .tictactoe  
╏ ➜ .dare  
╰━━━━━━━━━━━⊷

╭━━❮ *𖤝AI𖤝* ❯━⊷  
╏ ➜ .flux  
╏ ➜ .gptgo  
╏ ➜ .imagine  
╏ ➜ .gpt  
╏ ➜ .gemini  
╰━━━━━━━━━━⊷

╭━━❮ *𖤝FUN𖤝* ❯━⊷  
╏ ➜ .compliment  
╏ ➜ .simp  
╏ ➜ .ship  
╏ ➜ .wasted  
╏ ➜ .flirt  
╏ ➜ .shayari  
╏ ➜ .goodnight  
╏ ➜ .character  
╏ ➜ .insult  
╏ ➜ .roseday  
╏ ➜ .stupid  
╰━━━━━━━━━━⊷
╭━━❮ *𖤝MAKER𖤝* ❯━⊷  
╏ ➜ .devil  
╏ ➜ .ice  
╏ ➜ .neon  
╏ ➜ .snow  
╏ ➜ .metallic  
╏ ➜ .purple  
╏ ➜ .glitch  
╏ ➜ .fire  
╏ ➜ .light  
╏ ➜ .arena  
╏ ➜ .sand  
╏ ➜ .matrix  
╏ ➜ .blackpink  
╏ ➜ .1917  
╏ ➜ .impressive  
╏ ➜ .hacker  
╏ ➜ .thunder  
╏ ➜ .leaves  
╰━━━━━━━━━━━⊷
 
╭━━❮ *𖤝SEARCH𖤝* ❯━⊷  
╏ ➜ .instagram  
╏ ➜ .ytmp4  
╏ ➜ .play  
╏ ➜ .video  
╏ ➜ .facebook  
╏ ➜ .song  
╏ ➜ .tiktok  
╰━━━━━━━━━━━⊷

╭━━❮ *𖤝GITHUB𖤝* ❯━⊷  
╏ ➜ .gitclone  
╏ ➜ .script  
╏ ➜ .sc  
╏ ➜ .repo  
╏ ➜ .git  
╏ ➜ .github  
╰━━━━━━━━━━━━⊷
> *Powered By 𝕾𝖆𝖌𝖊 𝕺𝖋 𝕾𝖎𝖝 𝕻𝖆𝖙𝖍 𝕮𝖑𝖆𝖓*`;
    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402232397719@newsletter',
                        newsletterName: '',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402232397719@newsletter',
                        newsletterName: '𝕾𝖆𝖌𝖊_𝐗𝐝',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
