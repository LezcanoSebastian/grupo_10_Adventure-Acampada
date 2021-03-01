const fs = require('fs');
const path = require('path');
const admins_db = path.join('data','users.json');
module.exports = {
    getAdmins : () => {
        return JSON.parse(fs.readFileSync(admins_db,'utf-8'));
    },
    setAdmins : (data) =>{
        fs.writeFileSync(admins_db,JSON.stringify(data,null,2),'utf-8');//donde quiero guardar?que es lo que quiero guardar?
    }
}