import express from 'express';
import taskRoutes from './routes/tasks'
const app = express();


//esto nos sirve para poder enviar datos por json
app.use(express.json());

app.use(taskRoutes)

export default app