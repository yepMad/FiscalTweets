import 'dotenv/config';

import fetch from 'node-fetch';

import Twit from './lib/twit';
import DiscordEmbed from './lib/discordEmbed';

const stream = Twit.stream('statuses/filter', {
  follow:
    '1094631187123978244, 600560443, 2226676800, 818269355771383808, 972826078686384130', // ID's to monitore tweets.
});

stream.on('tweet', (data) => {
  const { id_str, text, user, extended_entities } = data;
  const { name, screen_name, profile_image_url_https } = user;
  const { media } = extended_entities;

  const embeds = [];

  const discordEmbed = DiscordEmbed({
    name,
    profile_image_url_https,
    screen_name,
    id_str,
    text,
  });

  embeds.push(discordEmbed);

  media.forEach((link) => {
    embeds.push({
      image: {
        url: link.media_url_https,
      },
    });
  });

  fetch(process.env.WEBHOOK, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      embeds,
    }),
  });
});
