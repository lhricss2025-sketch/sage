async function githubCommand(sock, chatId) {
    const repoInfo = `*𝕾𝖆𝖌𝖊_𝐗𝐝*

*Github:*
╭━━━❰⚡ *𝕾𝖆𝖌𝖊 XD V2 IS HERE!* ⚡❱━━━╮  
┃  
┃ 🚀 *New Commands Unlocked!*  
┃ 🎮 Fun Menu  
┃ 📥 Download Menu  
┃ 👑 Owner Menu  
┃ 👥 Group Menu  
┃  
┃ 🔗 *Pair now & get FREE access to*  
┃ 💠 *300 Servers* – Limited slots!  
┃  
┃ 🤖 *Pair Using Any Server Below:*  
┃ ┗ t.me/sageclan_bot  
┃ ┗  
┃ ┗  
┃ ┗ 
┃  
┃ ⏳ *𝕺𝖓𝖑𝖞 𝕾𝖆𝖌𝖊 𝖈𝖑𝖆𝖓𝖘 𝖈𝖆𝖓 𝖕𝖆𝖎𝖗 *  
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
Follow Rules and enjoy ✍️`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
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
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 