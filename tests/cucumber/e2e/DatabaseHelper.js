require("dotenv").config();
const mysql = require("mysql2")

//Here the connection is started
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

//3 file to exports including this file
//3 function used to clear Review, user & user_titles
const clearReviewQuery = () => {
    connection.query(
        `delete from reviews`,
        (e) => {
            if (e) {
                throw e
            }
        }
    );
}

const clearUsersTitlesQuery = () => {
    connection.query(
        //NOT query
        //will delete all except user11,user12,...so on
        `delete from users_titles where username not in ('user11', 'user12', 'user13', 'user14')`,
        (e) => {
            if (e) {
                throw e
            }
        }
    )
}

const clearUsersQuery = () => {
    connection.query(
        `delete from users where username not in ('user11','user12','user13','user14','nabinale')`,
        (e) => {
            if (e) {
                throw e
            }
        }
    );
}


//function for connection end
const endConnection = () => {
    connection.end()
}

module.exports = { clearReviewQuery,clearUsersTitlesQuery,clearUsersQuery, endConnection }