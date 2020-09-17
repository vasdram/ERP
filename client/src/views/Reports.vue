<template>
  <div class="table-wrapper">
      <Table 
      v-for="(table, indx) in allReports" 
      :report="table['reports']"
      :id="table['_id']"
      :isPreview="true"
      :key="indx" />
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import Table from "../components/Table"
  export default {
    computed: mapGetters(["allReports"]),
    components: {
      Table
    }
    
  }
</script>
