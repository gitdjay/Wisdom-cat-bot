// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Only respond to messages containing "lol", "lmao", "haha", "hehe"
if (context.params.event.content.match(/lol|lmao|haha|hehe/i)) {
  let messageContent = context.params.event.content.match(/lol|lmao|haha|hehe/i);

  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `enough of ${messageContent[0]}, go study ...jk ${messageContent[0]}`,
    message_reference: {
      message_id: context.params.event.id
    }
  });
}