const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Load saved data
app.get('/api/load', (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      res.setHeader('Content-Type', 'application/json');
      res.send(raw);
    } else {
      res.json({ DATA: null });
    }
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Save data
app.post('/api/save', (req, res) => {
  try {
    const payload = req.body;
    payload.savedAt = new Date().toISOString();
    fs.writeFileSync(DATA_FILE, JSON.stringify(payload), 'utf8');
    res.json({ ok: true, savedAt: payload.savedAt, rows: (payload.DATA || []).length });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Health check
app.get('/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
