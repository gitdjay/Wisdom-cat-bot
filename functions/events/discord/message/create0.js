// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Only respond to messages containing "lun".
if (context.params.event.content.toLowerCase().includes('lun')) {

  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `You deserve respect mate, meow salute to you 😻🙌`,
    message_reference: {
      message_id: context.params.event.id
    }
  });
}