module.exports = server => {
    const sql = require('mssql')

    const ConnectionConfig = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })

    server.get('/movies', (require, response) => {
        const query = 'SELECT * FROM movies';
        console.dir(ConnectionConfig)

        // connect to your database
        sql.connect(ConnectionConfig, function (err) {
            if (err) console.log(err);
            // create Request object
            var request = new sql.Request();
            // query to the database and get the records
            request.query(query, function (err, recordset) {
                if (err) console.log(err)
                // send records as a response
                response.json(recordset)
                console.log(recordset)
            });
        });
        // Connection.query(sql, (error, res) => {
        //     if (error){
        //         return error;
        //     } console.log("movies: ", res);
        //     response.json(res)
        // })
    })
};
