import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import weatherRouter from './routes/weather';

dotenv.config();

const app = express();

app.use(cors());
app.use('/api/weather', weatherRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
