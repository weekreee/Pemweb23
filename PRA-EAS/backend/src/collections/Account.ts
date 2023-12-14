import { CollectionConfig } from 'payload/types'

const Account: CollectionConfig = {
  slug: 'account',
  auth: true,
  admin: {
    useAsTitle: 'username',
  },
  access:{
    create: () => true
  },
  fields: [
    {
        name: 'username',
        type: 'text',
        minLength: 8,
        maxLength: 20,
        required: true
    },
  ],
}

export default Account