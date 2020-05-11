import fetch from 'node-fetch';

import app from './app';

import Twit from './lib/twit';
import DiscordEmbed from './lib/discordEmbed';

const stream = Twit.stream('statuses/filter', {
  follow: '1094631187123978244, 600560443, 2226676800, 818269355771383808', // ID's to monitore tweets.
});

stream.on('tweet', (data) => {
  const { id_str, text, user } = data;
  const { name, screen_name, profile_image_url_https } = user;

  const embed = DiscordEmbed({
    name,
    profile_image_url_https,
    screen_name,
    id_str,
    text,
  });

  fetch(process.env.WEBHOOK, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      embeds: [embed],
    }),
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server online');
});
