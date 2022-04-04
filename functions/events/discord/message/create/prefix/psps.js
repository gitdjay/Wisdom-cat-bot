// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let userString = context.params.event.content.split(' ')[1];
let reason = context.params.event.content.split(' ').slice(2).join(' ')
  || 'No reason provided.';

if (!userString || !userString.match(/<@.*>/)) {
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `You must tag a user to warn.`
  });
  return;
}

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `<@!${context.params.event.author.id}> meowed ${userString}!`,
  embed: {
    "type": "rich",
    "title": "Reason",
    "description": 'You got a angry meow, fool 😾  ' + reason,
    "color": 0xAA0000
  }
});

await lib.discord.users['@0.2.0'].dms.create({
  recipient_id: `${userString}`,
  content: `<@!${context.params.event.author.id}> meowed you!`,
  embed: {
    "type": "rich",
    "title": "Reason",
    "description": 'You deserve a paw of slap 😹 ' + reason,
    "color": 0xAA0000
  }
});