const db = require("../db");

class MainModel {
    constructor(table, columns) {
        this.table = table;
        this.columns = columns;
    }

    insert(values) {
        let columns = [];
        let allValue = [];
        for (const property in values) {
            // console.log(property)
            if (this.columns.find(data => data == property)) {
                columns.push(property)
            } else {
                return 'error'
            }
            allValue.push(`'${String(values[property])}'`)
        }
        db.query(`INSERT INTO ${this.table} (${columns.join(',')}) VALUES (${allValue.join(',')})`, (err, result) => {
            console.log(result)
            // console.log(err)
        })

    }


    get(where = '') {
        return new Promise((resolve, rej) => {
            db.query(`SELECT * FROM ${this.table} ${where}`, (err, result) => {
                if (err) {
                    rej('Error')
                } else {
                    console.log(result)
                }

            })

        })

    }



    delete(where) {
        return new Promise((resolve, rej) => {
            db.query(`DELETE FROM ${this.table} WHERE id = '${where}'`, (err, result) => {
                if (err) rej('error');
                console.log('deleted');
            })
        })
    }



}


module.exports = MainModel