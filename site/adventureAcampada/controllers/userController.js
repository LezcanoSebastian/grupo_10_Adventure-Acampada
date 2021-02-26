const path = require('path');
const fs = require('fs');

const {getUsers,setUsers} = require(path.join('..','data','user'));

const users = getUsers();

module.exports = {

}