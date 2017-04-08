var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello Express');
})

app.get('/users', function(req, res){

    var users_array = [
       {name: "Michael", email: "michael@codingdojo.com"},
       {name: "Jay", email: "jay@codingdojo.com"},
       {name: "Brendan", email: "brendan@codingdojo.com"},
       {name: "Andrew", email: "andrew@codingdojo.com"}
   ];
    res.render('users', {users:users_array})
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function(){
    console.log('listining on 8000');
});
