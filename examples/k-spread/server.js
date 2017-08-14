module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify({permissions: true}));
  res.end();
};
