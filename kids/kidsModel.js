const db = require('../data/dbConfig.js');

module.exports = {
    insert, 
    update, 
    remove,
    getAll,
    findById,
};

async function insert (kid){
    return db ('kids').insert(kid, "id")
}

async function update(id, changes){
    
}

async function remove(id){
    
}

async function getAll(){
    
}

async function findById(id){
    
}