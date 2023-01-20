import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "mysql2/promise";
import morgan from "morgan";

//import library to make post requests

//use body parser to parse json

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
// const connection = await createConnection({
// 	host: "db",
// 	user: "root",
// 	password: "example",
// 	database: "aws_example",
// });

app.get("/", async (req, res) => {
	// const [rows, fields] = await connection.execute("SELECT * FROM `users`");

	// res.json(rows);

	res.send("Hello World from here, I am running on port 8000");
});

app.post("/get-data", async (req, res) => {
	const { body } = req;
	console.log("Hello world from here")
	return res.send({ body });
});

app.listen(8000, () => {
	console.log("Server is running on port 8000");
});
