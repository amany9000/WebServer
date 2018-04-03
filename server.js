var express = require("express");

app = express();
app.set("view engine",'hbs');
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res) => {
	res.send("<h1>Wellcome, Mr. Wayne!!!<h1>");
});

app.get("/about",(req,resp)=>{
	resp.render("About Us",{
		heading : "About Us",
		body 	: "League of Shadows has been a top level saboteur for a millennium. We sacked Rome, loaded the merchent ships with plague rats, we burnt London. Whenever an emprire reaches the pinnacle of its decadence, we come back to restore the order."	
	})
});

app.get("/rooot",(req,res) => {
	res.send({
		us : "The league of shadows"
	});
});
app.listen(3000);
console.log("Server running and listening to port 3000");