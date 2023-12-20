/** @type {import('payload/types').CollectionConfig} */
const Account = {
  slug: "account",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "sekolah",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: ["Waiting", "Rejected", "Accepted"],
      defaultValue: "Waiting",
    },
    {
      name: "tanggal",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
      required: true,
    },
  ],
};

export default Account;
