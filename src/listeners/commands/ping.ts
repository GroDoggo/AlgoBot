
import { CommandInteraction, Client, Interaction } from "discord.js";

export default (interaction: CommandInteraction): void => {
    interaction.reply("Pong!");
};