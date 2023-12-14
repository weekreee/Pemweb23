// collections/channels.js

const Channels = {
    slug: 'channels',
    auth: true,
    fields: [
      {
        name: 'name',
        label: 'Channel Name',
        type: 'text',
        required: true,
        unique: true,
      },
      {
        name: 'users',
        label: 'Users',
        type: 'relationship',
        relationTo: 'Account',
        hasMany: true,
      },
      {
        name: 'chats',
        label: 'Chats',
        type: 'text',
        richText: true,
        required: true,
      },
    ],
  };
  
  module.exports = Channels;
  