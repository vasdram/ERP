<template>
    <div class="wrapper ">
        <Uploads />
        <div class="table-wrapper"  v-if="report.length > 0">
            <Table :report="report" />
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
        report() {
            return this.$store.state.reports
        } 
    },
    components: {
        Uploads, Table
    }
}
</script>