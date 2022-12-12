const con = require('../config/server');

module.exports = class userApi{
    constructor(){}

    static getAllData(){
        return new Promise((resolve, reject)=>{
            let selQuery = `SELECT u.id, u.username, u.email, r.role, r.group_name, u.status, u.created_at 
                            FROM users u, roles r 
                                WHERE r.user_id = u.id`;
            con.query(selQuery, (err, result)=>{
                if(result){
                    resolve(result);
                }
                else{
                    reject(err);
                }
            })
        })
    }
}