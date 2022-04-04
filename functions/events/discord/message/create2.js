// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Only respond to messages containing "cya", "gtg", or "bye" or "goodbye"
if (context.params.event.content.match(/cya|gtg|bye|goodbye/i)) {
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: 'boi boi, see u soon child',
    message_reference: {
      message_id: context.params.event.id
    }
  });
}