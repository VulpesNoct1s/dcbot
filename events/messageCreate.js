export default {
    name: "messageCreate",
    async execute(message) {
     
      if (message.author.bot) return;

     
      if (message.content.trim() === "Yasak") {
        message.channel.send("#FreeDiscord");
      }
    },
};