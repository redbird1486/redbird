const express = require('express');
const vision = require('@google-cloud/vision');

const app = express();
const port = process.env.PORT || 3001;

// Increase the limit for JSON request bodies
app.use(express.json({ limit: '10mb' }));

const client = new vision.ImageAnnotatorClient();

app.post('/api/tag', async (req, res) => {
  try {
    if (process.env.MOCK_VISION === 'true') {
      console.log('Returning mock vision labels');
      return res.json({
        labels: [
          { description: 'Mock Object', score: 0.99 },
          { description: 'Test Data', score: 0.95 },
          { description: 'Scaffold', score: 0.91 },
        ],
      });
    }

    const { imageBase64 } = req.body || {};
    if (!imageBase64) {
      return res.status(400).json({ error: 'imageBase64 required' });
    }

    const [result] = await client.labelDetection({
      image: { content: imageBase64 },
    });
    const labels = (result.labelAnnotations || []).map(l => ({
      description: l.description,
      score: l.score,
    }));
    return res.json({ labels });
  } catch (err) {
    console.error('Vision API error:', err);
    return res.status(500).json({ error: 'vision_failed' });
  }
});

app.post('/api/search', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

app.get('/api/messages', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

app.post('/api/messages', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

const server = app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

module.exports = { app, server };
