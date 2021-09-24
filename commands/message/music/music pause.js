const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mpause')
        .setDescription('[Command] => 현재 재생 중인 music을 일시중지합니다.'),
    aliases: ['mp'],
    voice_permission_check: true,
    user_privileges: true,
    execute(message, client) {
        client.musicSetting.emit('pause')
        message.reply('현재 재생되고 있는 오디오를 일시중지 하였습니다. :)')
    }
}