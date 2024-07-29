var express = require('express');
var router = express.Router();
const request = require('request');
const cors = require('cors'); // corsミドルウエアを追加   14章で追加

// corsミドルウエアを追加   14章で追加
router .use(cors());  // 14章で追加

router.get('/', async (req, res) => {
request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;



