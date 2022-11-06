import derive from "../../api/derive"

import { CommandInteraction, Client, Interaction } from "discord.js";

export default (interaction: CommandInteraction): void => {

    var expressionBase = interaction.options.get("equation", true).value;
    console.log(expressionBase);
    interaction.reply("Done...");
    
};