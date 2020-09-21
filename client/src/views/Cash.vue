<template>
  <div class="table-wrapper">
      <TableCash :cash="cash" />
  </div>
</template>

<script>
import TableCash from "../components/TableCash"
import {mapGetters} from "vuex"
export default {
    computed: mapGetters(["cash"]),
   
    components: {
        TableCash
    }
}
</script>

<style>

</style>