var pg = require("pg");

var connectionString = {
    user: 's.matthew.english',
    host: 'localhost',
    database: 's.matthew.english',
    password: 's.matthew.english',
    port: 5432,
};

var pool = new pg.Pool(connectionString);

pool.connect(function(err, client, done) {

    const query = client.query(new pg.Query("SELECT * from game_table"))
    query.on('row', (row) => {
        console.log(row);
    })
    query.on('end', (res) => {
        // pool shutdown
        console.log("ending");
        pool.end()
    })
    query.on('error', (res) => {
        console.log(res);
    })

    done()
})