<template>
    <div class="wrapper ">
        <Uploads />
        <div class="table-wrapper"  v-if="reportOne.reports && reportOne.reports.length > 0">
            <Table :isPreview="false" :id="reportOne['_id']" :report="reportOne.reports || []" />
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
        reportOne() {
            // console.log(this.$store.getters)
            return this.$store.getters.reportOne
        } 
    },
    components: {
        Uploads, Table
    }
}
</script>