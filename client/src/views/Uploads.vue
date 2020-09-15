<template>
    <div class="wrapper ">
        <Uploads />
        <div class="table-wrapper"  v-if="data.reports && data.reports.length > 0">
            <Table :id="data['_id']" :report="data.reports" />
        </div>
    </div>
</template>

<style >
.wrapper{
    max-width: 1600px;
    padding: 0 60px;
    margin: 0 auto;
}
</style>

<script>
import Uploads from "../components/Uploads"
import Table from "../components/Table"

export default {
    computed: {
        data() {
            return this.$store.state.data
        } 
    },
    components: {
        Uploads, Table
    }
}
</script>