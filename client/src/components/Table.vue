<template>
    <div class="table-wrapper" v-if="reports.length > 0">
    <table class="table">
             <thead>
                <tr>
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
                <tr v-for="(row, idx) in reports" :key="row['Номер']">
                    <th scope="row">{{idx++}}</th>
                    <td contenteditable="true">10.09.2020</td>
                    <td contenteditable="true">{{row["Номер"]}}</td>
                    <td contenteditable="true">{{row["ВсегоПоступило"]}}</td>
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
.table-wrapper {
    padding: 20px;
    background-color: #fff;
    border-radius: 3px;
    margin: 40px auto;
    box-shadow: 0 0 10px rgba(0,0,0, .4);
}
.table{
    font-size: 12px;
}
</style>
<script>

export default {
    // data() {
    //     return {
    //         reports: this.$store.state.reports
    //     }
    // },
    computed: {
        reports() {
            return this.$store.state.reports
        } 
    }
}
</script>