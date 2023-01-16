import express from "express";
import { createConnection } from "mysql2/promise";


const app = express();
const connection = await createConnection({
	host: "db",
	user: "root",
	password: "example",
	database: "aws_example",
});

app.get("/", async (req, res) => {

  const [rows, fields] = await connection.execute("SELECT * FROM `users`");

	res.json(rows);

  // res.send("Hello World from here, I am running on port 8000, xd   AA");
});

app.listen(8000, () => {
	console.log("Server is running on port 8000");
});
