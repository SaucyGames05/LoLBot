const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "BOT_TOKEN";

const prefix = "~";
bot.on("ready", () => {
  console.log("bot is working");
});
function pokeinfo() {
  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(results => {
      const pokemon = results.map(result => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map(type => type.type.name).join(", "),
        id: result.id
      }));
    });
  };
}
function emoji(id) {
  return bot.emojis.get(id).toString();
}
bot.on("message", msg => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();
  console.log(args);

  if (command === "banana") {
    msg.react("🍌");
  }

  if (command === "help") {
    msg.reply("Ok look i just want 5 bucks");
  }
  if (command === "actualhelp") {
    msg.reply(">>> Ok here: https://saucygames05.github.io/actualhelp");
  }
  if (command === "pet") {
    msg.channel.send("Woof");
  }

  if (command === "minecraft") {
    msg.channel.send(">>> Ok buddy: https://minecraft.net/en-us");
  }

  if (command === "purge") {
    msg.channel.bulkDelete(100);
    msg.channel.bulkDelete(100);
    msg.channel.bulkDelete(100);
    msg.channel.bulkDelete(100);
    msg.channel.bulkDelete(100);
    msg.channel.bulkDelete(100);
  }

  if (command === "sans") {
    msg.channel.send(emoji("667575933359620097"));
  }

  if (command === "srccode") {
    msg.channel.send(">>> Here is the code for the bot: ");
  }
  if (command === "pika") {
    pokeinfo();
    msg.channel.send(`${pokemon}`)
  }
  if (command === "sponger") {
    msg.channel.send(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBUSquC0-QulL4olBQeoDLudnaqP09ZhgvEaesGzucXvNLlsiNw&s"
    );
  }
});

bot.login(token);
