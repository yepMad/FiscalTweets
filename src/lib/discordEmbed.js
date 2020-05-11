import Discord from 'discord.js';

const discordEmbed = (data) => {
  const { name, profile_image_url_https, screen_name, id_str, text } = data;

  return new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle(name)
    .setURL(`https://twitter.com/${screen_name}/status/${id_str}`)
    .setAuthor(
      `@${screen_name}`,
      profile_image_url_https,
      `https://twitter.com/${screen_name}`
    )
    .setDescription(text)
    .setTimestamp();
};

export default discordEmbed;
