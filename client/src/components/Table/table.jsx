import React from 'react';
import styles from './table.module.css';

export const Table = ({data}) => {
   
    return(
        <div className="row">
        <table style={{fontSize: "12px"}} className={styles.table}>
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
            {data.map((row, idx) => {
                return <tr>
                    <th scope="row">{idx++}</th>
                    <td contenteditable="true">10.09.2020</td>
                    <td contenteditable="true">{row["Номер"]}</td>
                    <td contenteditable="true">{row["ВсегоПоступило"]}</td>
                    <td contenteditable="true">{row["Плательщик"]}</td>
                    <td contenteditable="true">{row["ВсегоСписано"]}</td>
                    <td contenteditable="true">{row["НазначениеПлатежа"]}</td>
                    <td contenteditable="true">--//--</td>
                    <td contenteditable="true">--//--</td>
                    <td contenteditable="true">--//--</td>
                    <td contenteditable="true">--//--</td>
                    <td contenteditable="true">--//--</td>
                    <td contenteditable="true">--//--</td>
                </tr>
            })}
        </table>
        </div>
    )
}