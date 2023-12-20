<template>
    <div class="">
      <h2 class="">Cek email</h2>
      <form @submit.prevent="statusCheck">
        <div class="  ">
          <label for="email" class="">Email:</label>
          <input type="email" id="email" v-model="email" required class="" />
        </div>
        <button type="submit" class="">
          Check Status
        </button>
      </form>
  
      <div v-if="status !== null" class="">
        <h3 class="">Registering Status:</h3>
        <p class="">{{ status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        status: null,
      };
    },
    methods: {
      async statusCheck() {
        try {
          const apiUrl = `http://localhost:3100/api/data?email=${this.email}`;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (response.ok) {
            const responseData = await response.json();
            console.log("API Response:", responseData);
  
            if (responseData.docs && responseData.docs.length > 0) {
              const userDocument = responseData.docs.find(
                (doc) => doc.email === this.email
              );
  
              if (userDocument) {
                this.status = userDocument.status;
              } else {
                console.error("Error: Email not found in the API response.");
              }
            } else {
              console.error("Error: No documents found in the API response.");
            }
          } else {
            console.error(
              "Failed to fetch status.",
              response.status
            );
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
    },
  };
  </script>
  