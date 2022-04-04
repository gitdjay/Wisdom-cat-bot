const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `913086226205122573`,
  "content": `Hi <@!${context.params.event.user.id}> welcome to server, i help you when you need wisdom`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Did you know`,
      "description": "",
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `Philosophy is not what philosophers or books say, it's how you would like to see things to have a better perspective of things 🌻🌼🌻`,
          "value": "\u200B"
        }
      ]
    }
  ]
});