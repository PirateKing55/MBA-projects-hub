import express from 'express';
import cors from 'cors';

import { rootRouter } from './src/routes/rootRouter.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', rootRouter);


app.get('/', (req, res) => {
    res.send('Welcome to the RM Projects API');
});

// Global error handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
