// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Only respond to messages containing "vow vow".
if (context.params.event.content.toLowerCase().includes('vow vow')) {

  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `😾 what? this is not allowed here, go to fool dog`,
    message_reference: {
      message_id: context.params.event.id
    }
  });
}