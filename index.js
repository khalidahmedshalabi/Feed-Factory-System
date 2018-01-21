const express = require('express')
const app = express()

/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'factory'
});

connection.connect();*/

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

function findSubsetSum(set, n, sum)
{
	var subset = new Array(n);
    for(var i = 0; i != subset.length; ++ i)
        subset[i] = new Array(sum + 1);

	for (var i = 0; i != n; ++ i)
	    subset[i][0] = true;

	for (var i = 1; i <= sum; ++ i)
	    subset[0][i] = false;

	for (var i = 1; i != n; ++ i)
	{
    	for (var j = 1; j <= sum; ++ j)
    	{
    		if(j < set[i-1])
    		    subset[i][j] = subset[i-1][j];

            if (j >= set[i-1])
        		subset[i][j] = subset[i-1][j] ||
        								subset[i - 1][j-set[i-1]];
    	}
	}

    var tmpStr = "";
    for(var i = 0; i != n; ++ i)
    {
        tmpStr = "";
        for(var j = 0, max2 = sum+1; j != max2; ++ j)
        {
            tmpStr += subset[i][j] + "\t";
        }
        console.log(set[i]+"\t"+tmpStr);
    }



    var result = subset[n-1][sum];
    if(result)
    {
        var solArr = [];

        var i = n-2, j = sum;
        while(i >= 0)
        {
            if(subset[i][j])
            {
                // Go one row up
                -- i;
                console.log("Go one row up");
            }
            else
            {
                // Add to solution
                solArr.push(set[i]);
                console.log("Add " + set[i] + " to the solution");

                // Take steps to the left, the number of steps equals the value of set[i]
                j -= set[i];
                console.log("Take " + set[i] + " steps to the left");

                // Go one row up
                -- i;
                console.log("Go one row up");
            }
        }
        result = solArr;
    }
    return result;
}

// Make sure the array is sorted to give priority to lower values (combinations)
var set = [1,2,3,4,5,6,7,8,9];
var sum = 10;
var n = set.length;
console.log("Result = " + findSubsetSum(set, n, sum));

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
