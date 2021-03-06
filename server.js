var express = require("express");
var hbs = require("hbs");
var fs = require("fs");
var port = process.env.PORT || 3000;

app = express();
app.set("view engine",'hbs');


hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getYear", new Date().getFullYear() );
hbs.registerHelper("makeItBig" , (text) =>{
	return text.toUpperCase();
});
/*
app.use((req,res,next)=>{
	res.render("maintenance.hbs");
}); 
*/

app.use(express.static(__dirname + "/public"));
app.use((req,res,next)=>{
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFileSync("server.log",log + "\n");
	next()
});

app.get('/',(req,res) => {
	res.render("home.hbs",{
		heading:"Wellcome, Mr. Wayne!!!",
		body   :  "Coming here was a grave mistake by you, I am afraid."
	});
});

app.get('/projects',(req,res)=>{
	res.render("projects.hbs",{
		heading :"Projects",
		body   :  "We have done several sabotages through the centuries. For sole monetary sustenance we also provide mercenary services given that the service is not immoral." 
		});
});
app.get("/about",(req,resp)=>{
	resp.render("about.hbs",{
		heading : "About Us",
		body 	: "League of Shadows has been a top level saboteur for a millennium. We sacked Rome, loaded the merchent ships with plague rats, we burnt London. Whenever an emprire reaches the pinnacle of its decadence, we come back to restore the order."
	})
});

app.get("/intro",(req,res) => {
	res.render("intro.hbs",{
		heading : "Who are we ?",
		body :    "The league of Shadows"
	});
});

app.listen(port);
console.log(`Server running and listening to port ${port}`);

