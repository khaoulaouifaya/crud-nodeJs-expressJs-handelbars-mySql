import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getAll(){
    const result = await pool.query("select * from user");
    const sortResult = result[0]
    return sortResult;
}

export async function getUser(id){
    const querySql = await pool.query("select * from user where id = ? " , [id]);
    const result = querySql[0][0];
    return result;
}

export async function insertUser(nom,prenom,age){
   pool.query("insert into user (nom,prenom,age) values (?,?,?)",[nom,prenom,age]);
   const result = {nom,prenom,age}
   return result;
}

export async function updateUser(id,nom,prenom,age){
    await pool.query("UPDATE user SET nom = ?, prenom = ?, age = ? WHERE id = ?",[nom,prenom,age,id]);
    const result = {id,nom,prenom,age};
    return result;
}

export async function deleteUser(id){
    await pool.query("delete from user where id = ?",[id]);
    return "user deleted with sucess";
}





