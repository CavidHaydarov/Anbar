const MainModel = require('./MainModel')

class AnbarModel extends MainModel {
    constructor(){
        super()
        this.table = 'anbarlar'
        this.columns = [
            'name',
            'location',
            'field',
            'responsible' 
       ]
    }
}

module.exports = new AnbarModel