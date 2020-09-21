<template>
  <form class="addReportForm" action b-on:submit.prevent>
    <div class="form-wrapper">
      <div class="input-wrapper">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Необходимо выбрать категорию</label>
          <select class="form-control" v-model="category" id="exampleFormControlSelect1">
            <option>Оплата поставщику</option>
            <option>Оплата от клиента</option>
            <option>Выплата заработной платы</option>
            <option>Выдача подотчетнику</option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="form-check">
          <input
            class="form-check-input"
            name="type"
            value="income"
            type="radio"
            id="income"
            v-model="typeOperation"
          />
          <label class="form-check-label" for="income">Приход</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            name="type"
            value="outcome"
            type="radio"
            id="outcome"
            v-model="typeOperation"
          />
          <label class="form-check-label" for="outcome">Расход</label>
        </div>
      </div>
      <div class="input-wrapper">
        <label for>Сумма</label>
        <input type="text" v-model="sum" />
      </div>
      <div class="input-wrapper">
        <label for>Конкретизация</label>
        <input type="text" v-model="payName" />
      </div>
      <div class="input-wrapper">
        <button class="btn btn-primary" v-on:click.prevent="addReport">Добавить</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      typeOperation: "",
      category: "",
      sum: "",
      payName: "",
    };
  },
  methods: {
    addReport() {
      const formData = {
        typeOperation: this.typeOperation, 
        category: this.category, 
        sum: this.sum, 
        payName: this.payName
      }
      this.$store.dispatch("addCash", formData)
    },
  },
};
</script>

<style>
.form-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.input-wrapper {
  margin: 0 20px 20px;
}
.input-wrapper label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}
</style>