const pool = require(`../config/db`);

exports.getAllReviews = async () =>{
const [rows] = await pool.query(`SELECT * FROM reviews`);
return rows;
}; 

exports.createReviews = async () =>{


    
}