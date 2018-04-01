var express = require("express");

app = express();
app.use(express.static(__dirname + "/public"));
app.get('/',(req,res) => {
	res.send("<h1>Wellcome, Mr. Wayne!!!<h1>");
});

console.log(__dirname + "/public")
app.get("/rooot",(req,res) => {
	res.send({
		us : "The league of shadows"
	});
});
app.listen(3000);
console.log("Server running and listening to port 3000");