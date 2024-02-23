const db = require("../db");
const MainModel = require("./MainModel");

class MehsulModel extends MainModel{
    constructor(){
        super()
        this.table = 'mehsullar'
        this.columns = [
            'name',
            'brand',
            'price',
            'location'
        ]
    }
}

module.exports = new MehsulModel