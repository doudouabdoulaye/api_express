const express = require("express");
const app = express();
const PORT = 3000;

// Middleware JSON
app.use(express.json());

// Importer les routes
const tasksRouter = require("./routes/tasks");

// Préfixe /tasks
app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/tasks`);
});
