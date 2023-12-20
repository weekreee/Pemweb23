<template>
  <form @submit.prevent="submitForm">
    <label for="name">Nama:</label>
    <input v-model="formData.name" type="text" id="name" required />

    <label for="email">Email:</label>
    <input v-model="formData.email" type="email" id="email" required />

    <label for="sekolah">Asal Sekolah:</label>
    <input v-model="formData.sekolah" type="text" id="sekolah" required />

    <label for="tanggal">Tanggal Pendaftaran:</label>
    <input v-model="formData.tanggal" type="date" id="tanggal" required />

    <button type="submit">Daftar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        sekolah: '',
        tanggal: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const apiUrl = 'http://localhost:3000/api/account';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        const responseData = await response.json();

        console.log('Sukses gan', responseData);

        this.formData = {
          name: '',
          email: '',
          sekolah: '',
          tanggal: '',
        };
      } catch (error) {
        console.error('yah gagal', error);
      }
    },
  },
};
</script><style scoped>
.registration-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
