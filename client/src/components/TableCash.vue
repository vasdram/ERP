<template>
  <div>
    <div class="table-head" v-if="isPreview">
        <button class="btn btn-primary mr-4" v-on:click="isShowFormHandler">Добавить отчет</button>
        <!-- <button class="btn btn-primary mr-4" v-if="!!rows.length">Редактировать строку</button>
        <button class="btn btn-primary mr-4" v-on:click="deleteRows" v-if="!!rows.length">Удалить строку</button> -->
        <button class="btn btn-primary" v-on:click="deleteTable">Удалить таблицу</button>
    </div>
    
    <div>
      <AddCashReport />
    </div>
    <table class="table" :id="id">
      <thead>
          <tr>
            <!-- <th scope="col"></th> -->
            <th scope="col">#</th>
            <th scope="col">Дата</th>
            <th scope="col">Сумма</th>
            <th scope="col">Наименование платежа</th>
            <th scope="col">Тип</th>
            <th scope="col">Категория</th>
            <th scope="col">Открыть</th>
          </tr>
        
      </thead>
      <tr v-for="(row, idx) in cash" :key="row['idRow']" >
        <!-- <th scope="row" >
          <div class="btn" v-on:click="deleteRows(row['idRow'])">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </div>
        </th> -->
        <th scope="row">{{idx++}}</th>
        <td contenteditable="true"></td>
        <td contenteditable="true">{{row.sum}}</td>
        <td contenteditable="true">{{row.payName}}</td>
        <td contenteditable="true">
          <span v-if="row.typeOperation ==='income'">Приход</span>
              <span class="" v-else>Расход</span>
        </td>
        <td contenteditable="true">{{row.category}}</td>
        <td contenteditable="true"></td>
       
      </tr>
    </table>
  </div>
</template>

<style>
.table-head{
    padding: 20px 0;
}
.table-wrapper {
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  margin: 40px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.table {
  font-size: 12px;
}
tr{
  transition: all .3s;
  
}
tr.active{
  background-color: rgba(0,0,0, .1);
}
td, th{
  vertical-align: middle !important;
}
</style>
<script>
import axios from 'axios';
import AddCashReport from "../components/AddCashReport"

export default {
  data() {
    return {
      isShowForm: false,
      // rowId: ""
    }
  },
  methods: {
    isShowFormHandler() {
      this.isShowForm = !this.isShowForm
    },
    async deleteTable() {
       console.log("del cash table");
    },
    async deleteRows(id) {
        console.log("del cash table row");
        // this.$store.dispatch("delRow", {id: this.id, row: id})
        // console.log(id);
    }
  },
  props: ["cash", "id", "isPreview"],
  components: {AddCashReport}
};
</script>