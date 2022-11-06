import { CommandInteraction, Client, Interaction } from "discord.js";
import pingCommand from './commands/ping';
import derive from './commands/derive';

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (!interaction.isCommand()) return;
        else await handleSlashCommand(client, interaction);
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {

    if (interaction.commandName === 'ping') {
        pingCommand(interaction);
    }

    if (interaction.commandName === 'derive') {
        derive(interaction);
    }

}; 