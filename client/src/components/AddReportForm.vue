<template>
  <form class="addReportForm" action="" b-on:submit.prevent>
    <div class="form-wrapper">
      <div class="input-wrapper">
        <label for="">Дата</label>
        <input type="text" v-model="date"/>
      </div>
      <div class="input-wrapper">
        <label for="">Номер документа</label>
        <input type="text" v-model="number" />
      </div>
      <div class="input-wrapper">
        <label for="">Приход(+)</label>
        <input type="text" v-model="coming" />
      </div>
      <div class="input-wrapper">
        <label for="">Контраагент</label>
        <input type="text" v-model="contractor" />
      </div>
      <div class="input-wrapper">
        <label for="">Расход(-)</label>
        <input type="text" v-model="consumption" />
      </div>
      <div class="input-wrapper">
        <label for="">Наименование платежа</label>
        <input type="text" v-model="paymentDescription" />
      </div>
      <div class="input-wrapper">
        <label for="">Признак НДС</label>
        <input type="text" v-model="VATsign" />
      </div>
      <div class="input-wrapper">
        <label for="">Коммисия %</label>
        <input type="text" v-model="commission" />
      </div>
      <div class="input-wrapper">
        <label for="">Сумма коммисии</label>
        <input type="text" v-model="amountCommission" />
      </div>
      <div class="input-wrapper">
        <label for="">Категории платежа</label>
        <input type="text" v-model="paymentCategories" />
      </div>
      <div class="input-wrapper">
        <label for="">Оператор</label>
        <input type="text" v-model="operator" />
      </div>
      <div class="input-wrapper">
        <label for="">Комментарий</label>
        <input type="text" v-model="comment" />
      </div>
    </div>
    <div>
      <button class="btn btn-primary">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date,
      number,
      coming,
      contractor,
      consumption,
      paymentDescription,
      VATsign,
      commission,
      amountCommission,
      paymentCategories,
      operator,
      comment,
    }
  },
  methods: {
    addReport() {
      
    }
  }
}
</script>

<style>
.addReportForm{
  margin: 20px 0;
}
.form-wrapper{
  display: flex;
  justify-content: row;
  flex-wrap: wrap;
}
.input-wrapper{
  min-width: 300px;
  margin-bottom: 20px;
}
.input-wrapper label{
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}
</style>