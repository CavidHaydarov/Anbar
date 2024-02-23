const MainModel = require("./MainModel");



class UserModel extends MainModel {
    constructor(){
                super()
                this.table = 'isciler'
                this.columns = [
                    'id',
                    'name',
                    'surname',
                    'password',
                    'role'
                ]
            }
    
    
}


module.exports = new UserModel