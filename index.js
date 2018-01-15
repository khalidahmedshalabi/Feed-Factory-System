const express = require('express')
const app = express()

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'factory'
});

connection.connect();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))


app.get('/api/sell', function(req, res) {
    var q = req.param('q');

    /*
        1. check if there is opened contracts.
        2. if yes > have them locally.
            2.1 sum +
        3. if no > open the nearest contract to this value

        8


        7
        5
        3
        2


        8


        7
        4
        3
        3
        2

    */

  /*connection.query('SELECT id FROM `whole_contacts WHERE `type`=? AND `volume` > 0', [q], function (error, results) {
        if (!error)
        {
            if(results.length == 0)
            {

            }
            else
            {
                 connection.query('SELECT id FROM `whole_contacts WHERE `type`=? AND `volume` > 0', [q], function (error, results) {

                 });
            }
        }
    });*/

    res.send("Done");
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
