const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 静态文件服务，将 dist 文件夹作为静态文件根目录
app.use(express.static(path.join(__dirname, 'dist')))

// 捕获所有路由，返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'indexApp.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});