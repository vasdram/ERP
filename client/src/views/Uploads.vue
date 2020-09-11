<template>
    <div class="wrapper ">
        <Uploads />
        <Table />
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
   
    components: {
        Uploads, Table
    }
}
</script>