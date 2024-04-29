var express = require('express');
var router = express.Router();
var svgToimg = require('svg-to-img');
/* GET home page. */
router.get('/', async function (req, res, next) {
  const { title, description, link, linkName } = req.query;

  router.use(express.static('public'))
  const badge = `
  <link rel="stylesheet" href="/stylesheets/style.css"></link>
  <div class='badge'">
   <p class='badge-title'>${title}</p>
   <p class='badge-description'>${description}</p>
   <a class='badge-link' href='https://github.com/sindre-gangeskar'>${linkName}</a>
  </div>`


  const svg = `
    <svg xmlns="http://w3.org/2000/svg" width="467" height="195">
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

:root {
  --primary: #79dafa;
  --tertiary: #ff6e96;
  --secondary: #282a36;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

.badge {
  background-color: var(--secondary);
  width: 467px;
  height: 195px;
  border-radius: 1.2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  outline: 2px solid var(--tertiary);
  outline-offset: -1px;
  position: relative;
}

.badge-title {
  font-weight: 800;
  margin-left: 20px;
  font-size: 16px;
  text-align: left;
  top: 0;
  position: absolute;
  color: var(--tertiary)
}

.badge-description {
  padding: 10px;
  font-size: 14px;
  text-align: start;
  width: 100%;
  font-size: 0.8rem;
  height: 30%;
}

.badge-link {
  font-size: 14px;
  text-decoration: none;
  color: var(--primary);
  font-weight: 800;
  margin: 10px auto;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -50%);
}
    </style>
    <rect x="0" y="0" width="467" height="195" fill="#f8f9fa"/>
      <text x="10" y="30" class="badge-title">${title}</text>
      <text x="10" y="60" class="badge-description">${description}</text>
      <a x="10" y="90" class="badge-link" href="${link}">${linkName}</a>
    </svg>
  `

 /*  await svgToimg.from(svg).toPng();

  res.set({ 'Content-Type': 'image/png' }); */
  res.send(badge);
});

module.exports = router;
