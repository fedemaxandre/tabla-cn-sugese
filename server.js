const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.JSONBIN_KEY || '$2a$10$.1dswIbaemzuGyT0c73.4Ot0OvlcE64kzlWj5Q2/v0/iTAu2P1eWS';
const BIN_ID  = process.env.JSONBIN_BIN  || '6a29e858da38895dfea9db7d';
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Load
app.get('/api/load', async (req, res) => {
  try {
    const r = await fetch(BIN_URL + '/latest', {
      headers: { 'X-Master-Key': API_KEY }
    });
    const d = await r.json();
    res.json(d.record || { DATA: null });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Save
app.post('/api/save', async (req, res) => {
  try {
    const payload = req.body;
    payload.savedAt = new Date().toISOString();
    const r = await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify(payload)
    });
    const d = await r.json();
    res.json({ ok: true, savedAt: payload.savedAt, rows: (payload.DATA||[]).length });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Puerto ${PORT}`));
