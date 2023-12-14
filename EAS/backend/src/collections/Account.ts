import { CollectionConfig } from "payload/types";

const Account: CollectionConfig = {
    slug: "account",
    auth: true,
    access: {
        create:() => true,
        read:() => true,
        update:() => true,
        delete:() => true
    },
    admin:{
        useAsTitle: "email",
    },
    fields: [
        {
            name: "name",
            type: "text",
            label: "Name",
            required: true,
        },
        {
            name: 'email', 
            type: 'email', 
            label: 'Email',
            required: true,
        },
        {
            name: "sekolah",
            type: "text",
            label: "Asal Sekolah",
            required: true,
        },
        {
            name: "status",
            "type": "select",
            "options": ["Waiting", "Rejected", "Accepted"],
            label: "Status",
            required: true,
        },
        {
            name: "tanggal",
            type: "date",
            label: "Tanggal Pendaftaran",
            required: true,
          },
    ],
};

export default Account;