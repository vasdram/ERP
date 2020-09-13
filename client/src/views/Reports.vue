<template>
  <div class="table-wrapper">
      <Table 
      v-for="(table, indx) in reports" 
      :report="table['reports']"
      :key="indx" />
  </div>
</template>

<script>
import axios from 'axios'
import Table from "../components/Table"
  export default {
    data() {
      return {
        reports: null
      }
    },
    async mounted() {
      const reports = await axios.get('/api/table/', {headers: 
        {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`
      }})
      
      this.reports = reports.data
      console.log("----reports", reports.data)
    },

    components: {
      Table
    }
    
  }
</script>
