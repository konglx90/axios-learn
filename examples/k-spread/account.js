/**
 * Created by kong90 on 17-8-13.
 */
module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify({'account': 30}));
  res.end();
};