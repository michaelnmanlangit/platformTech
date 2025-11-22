const express = require('express');
const app = express();

// Get port from environment variable or use 3000 as default
const PORT = process.env.PORT || 3000;

// Serve static files (CSS)
app.use(express.static('public'));

// Root route - Display student information
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js PaaS Deployment</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .container {
          background: #f8f9fa;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 50px;
          max-width: 600px;
          width: 100%;
          text-align: left;
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        h1 {
          color: #333;
          margin-bottom: 30px;
          font-size: 2em;
          background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .info-section {
          margin: 25px 0;
          padding: 20px;
          background: white;
          border-radius: 10px;
        }
        
        .label {
          font-weight: bold;
          color: #e94560;
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        
        .value {
          color: #333;
          font-size: 1.3em;
          line-height: 1.6;
        }
        
        .quote-section {
          margin-top: 30px;
          padding: 25px;
          background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
          border-radius: 10px;
          color: white;
          font-style: italic;
          position: relative;
        }
        

        
        .quote-text {
          font-size: 1.2em;
          line-height: 1.8;
          position: relative;
          z-index: 1;
        }
        
        .footer {
          margin-top: 30px;
          color: #666;
          font-size: 0.9em;
        }
        
        .badge {
          display: inline-block;
          background: #28a745;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8em;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Node.js PaaS Deployment</h1>
        
        <div class="info-section">
          <div class="label">Full Name</div>
          <div class="value">Manlangit, Michael N.</div>
        </div>
        
        <div class="info-section">
          <div class="label">Class Section</div>
          <div class="value">BSIT BA 4101</div>
        </div>
        
        <div class="quote-section">
          <div class="quote-text">
            "The only way to do great work is to love what you do." - Steve Jobs
          </div>
        </div>
        
        <div class="footer">
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});
