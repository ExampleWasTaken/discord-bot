import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { Channels, CommandCategory, imageBaseUrl } from '../../constants';

const BRUHEG_URL = `${imageBaseUrl}/memes/bruheg.png`;

export const bruheg: CommandDefinition = {
    name: 'bruheg',
    description: 'bruheg momen',
    category: CommandCategory.MEMES,
    requirements: {
        channels: [Channels.CHAT, Channels.BOT_COMMANDS],
        verboseErrors: true,
    },
    executor: (msg) => {
        const bruhegEmbed = makeEmbed({ image: { url: BRUHEG_URL } });
        return msg.channel.send({ embeds: [bruhegEmbed] });
    },
};
