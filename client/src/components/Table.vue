<template>
  <div>
    <div class="table-head" v-if="isPreview">
        <button class="btn btn-primary mr-4" v-on:click="isShowFormHandler">Добавить отчет</button>
        <button class="btn btn-primary mr-4" v-if="!!rows.length">Редактировать строку</button>
        <button class="btn btn-primary mr-4" v-on:click="deleteRows" v-if="!!rows.length">Удалить строку</button>
        <button class="btn btn-primary" v-on:click="deleteTable">Удалить таблицу</button>
    </div>
    
    <div>
      <AddReportForm :id="id" v-if="isShowForm"/>
    </div>
    <table class="table" :id="id">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">#</th>
          <th scope="col">Дата и время</th>
          <th scope="col">Номер документа</th>
          <th scope="col">Приход(+)</th>
          <th scope="col">Контраагент</th>
          <th scope="col">Расход(-)</th>
          <th scope="col">Наименование платежа</th>
          <th scope="col">Признак НДС</th>
          <th scope="col">Коммисия %</th>
          <th scope="col">Сумма коммисии</th>
          <th scope="col">Категории платежа</th>
          <th scope="col">Оператор</th>
          <th scope="col">Комментарий</th>
        </tr>
      </thead>
      <tr v-for="(row, idx) in report" :key="row['idRow']" :class="rows.includes(row['idRow']) ? 'active' : ''">
        <th scope="row">
          <input type="checkbox" v-model="rows" :value="row['idRow']" name="" id="">
        </th>
        <th scope="row">{{idx++}}</th>
        <td contenteditable="true">{{row["Дата"]}}</td>
        <td contenteditable="true">{{row["Номер"]}}</td>
        <td contenteditable="true">{{row["Сумма"]}}</td>
        <td contenteditable="true">{{row["Плательщик"]}}</td>
        <td contenteditable="true">{{row["ВсегоСписано"]}}</td>
        <td contenteditable="true">{{row["НазначениеПлатежа"]}}</td>
        <td contenteditable="true">--//--</td>
        <td contenteditable="true">--//--</td>
        <td contenteditable="true">--//--</td>
        <td contenteditable="true">--//--</td>
        <td contenteditable="true">--//--</td>
        <td contenteditable="true">--//--</td>
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
</style>
<script>
import axios from 'axios';
import AddReportForm from "./AddReportForm";

export default {
  data() {
    return {
      isShowForm: false,
      rows: []
    }
  },
  methods: {
    isShowFormHandler() {
      this.isShowForm = !this.isShowForm
    },
    async deleteTable() {
       const del = await axios.post("/api/table/delete", {id: this.id}, {headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`
            }
        })
        this.$store.dispatch("delReport", del.data.tableId)
    },
    async deleteRows() {
        this.$store.dispatch("delRows", {rows: this.rows})
    }
  },
  props: ["report", "id", "isPreview"],
  components: {AddReportForm}
};
</script>