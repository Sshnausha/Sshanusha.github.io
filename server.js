var express = require('express');
var app = express();

var port = 30001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at' + port);



app.get('/api/login',function (req,res) {
	
	var results = [{	
		title: "Java",
		instructor: "Saurabh",
		level: "Beginner",
		total_videos: 10
	},{
		title: "C++",
		instructor: "Saurabh",
		level: "Beginner",
		total_videos: 15
	},{
		title: "C",
		instructor: "Saurabh",
		level: "Beginner",
		total_videos: 12
	},{

		title: "Web Development",
		instructor: "Saurabh",
		level: "Beginner",
		total_videos: 20.
	},{

		title: "Web Development",
		instructor:"Saurabh",
		level: "Beginner",
		total_videos: 20
	}];
	
	res.json(results);

})