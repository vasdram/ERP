<template>
  <div class="uploads input-group mb-3">
    
    <div class="custom-file">
      <input
        type="file"
        class="custom-file-input"
        id="inputGroupFile01"
        aria-describedby="inputGroupFileAddon01"
        ref="file" v-on:change="handleFileUpload()"
      />
      <label class="custom-file-label" for="inputGroupFile01">{{file.name}}</label>
    </div>
    <button class="btn btn-primary" v-on:click="submitFile">Загрузить</button>
  </div>
</template> 

<style>
.uploads {
  margin: 50px 0;
}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      file: {name: "Загрузите файл"},
    };
  },
  methods: {
    async submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      const res  = await axios.post('/api/table/upload', formData, {headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`
            }
        })

     this.$store.commit('setReports', res.data)
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>