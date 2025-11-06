import express from 'express';
const app = express();

app.get('/healthz', (_req, res) => res.json({ service: 'search', status: 'running' }));
app.get('/', (_req, res) => res.send('search service'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => console.log(`search listening on ${PORT}`));
