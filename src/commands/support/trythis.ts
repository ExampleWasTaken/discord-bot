import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

const trythisDescription = makeLines([
    'Please try and remove all other mods/liveries from the community folder and test our addon again. This will help rule out mod conflicts.',
    '',
    'See [this article](https://docs.flybywiresim.com/fbw-a32nx/support/reported-issues/#test-with-only-the-a32nx-add-on-in-community) on how to this quickly.',
]);

export const trythis: CommandDefinition = {
    name: 'trythis',
    description: 'Provide basic troubleshooting steps',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const trythisEmbed = makeEmbed({
            title: 'Try This',
            description: trythisDescription,
            footer: { text: 'Report back the result of this test.' },
        });

        return msg.channel.send({ embeds: [trythisEmbed] });
    },
};
