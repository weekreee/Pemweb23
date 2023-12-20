<template>
    <section class="bg-pink-200">
      <div class="">
        <div class="">
          <div class="">
            <h1 class="">
              Register Your Data
            </h1>
            <form @submit.prevent="registerAcc" class="" action="#">
              <div>
                <label for="name" class="">Nama</label>
                <input v-model="name" type="text" name="name" id="name" ref="name" required>
              </div>
              <div>
                <label for="email" class="">Email</label>
                <input v-model="email" type="email" name="email" id="email" ref="email"   required>
              </div>
              <div>
                <label for="school" class="">Asal</label>
                <input v-model="sekolah" type="text" name="school" id="school" ref="school"   required>
              </div>
              <div>
                <label for="status" class="">Status</label>
                <select v-model="status" type="text" name="status" id="status" ref="status"   required>
                  <option value="Wating">Waiting</option>
                  <option value="Accepted">Rejected</option>
                  <option value="Rejected">Accepted</option>
                </select>
              </div>
              <div class="flex items-start">
              </div>
              <button type="submit">Register now</button>
              <p>
                Sudah bisa register? <NuxtLink to="/login" class="">Cek emailmu disini</NuxtLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        sekolah: '',
        status: ''
      };
    },
    methods: {
      async registerAcc() {
        try {
          const response = await axios.post('http://localhost:3100/api/data', {
            namaPanjang: this.name,
            email: this.email,
            asalSekolah: this.sekolah,
            status: this.status,
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (response.data) {
            alert('Registration Complete');
            // Optionally, reset form fields after successful registration
            this.name = '';
            this.email = '';
            this.sekolah = '';
            this.status = '';
          }
        } catch (error) {
          console.error(error);
          alert('Error occurred while registering data');
        }
      }
    }
  }
  </script>
  