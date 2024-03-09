import { connect } from "../database";

export const getTasks = async (req, res) => {
  const connection = await connect();

  const [rows] = await connection.query("select * from tasks");
  console.log(rows);

  res.json(rows);
};

export const getTask = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("select * from tasks where id =?", [req.params.id]);

  res.json(rows[0]);
};

export const getTasksCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("select count(*) from tasks");

  res.json(rows[0]["count(*)"]);
};

export const saveTasks = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query("INSERT INTO tasks(title, description) values(?,?)", [
    req.body.title,
    req.body.description
  ]);
  console.log(results);
  res.json({
    id: results.insertId,
    ...req.body
  });
};
export const deleteTasks = async (req, res) => {
  const connection = await connect();
    const result = await connection.query("DELETE from tasks where id =?",
        [req.params.id]);

    res.sendStatus(204);
  //res.json({});
};
export const updateTasks = async (req, res) => {
   const connection = await connect();
  const results = await connection.query("UPDATE  tasks SET ? WHERE id =?", [
    req.body,
    req.params.id
  ]);
  console.log(results);
  
     res.sendStatus(204);
};

