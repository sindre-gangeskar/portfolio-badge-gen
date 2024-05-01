var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', async function (req, res, next) {

  router.use(express.static('public'))
  const style = `  <style>
    :root {
      --primary: #79dafa;
      --tertiary: #ff6e96;
      --secondary: #282a36;
    }

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI';
    }
    .compact.badge-title{
      font-size: 1.0rem;
    }
    .compact.badge-link{
      font-size: 0.8rem;
    }
    .compact.badge{
      width: calc(467px / 1.5);
      height: 36px;
    }

    .badge {
      padding: 5px;
      background-color: var(--secondary);
      width: calc(467px - 10px);
      height: calc(195px - 10px);
      border-radius: 1.2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      color: white;
      outline-offset: -1px;
      position: relative;
      z-index: 10;
    }
    .badge-title {
      font-weight: 600;
      margin-left: 20px;
      font-size: 16px;
      text-align: left;
      top: 0;
      position: absolute;
      color: var(--tertiary);

      animation-name: fadeIn;
      animation-duration: 2s;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .badge-description {
      padding: 20px;
      font-size: 14px;
      text-align: start;
      width: 100%;
      font-size: 0.8rem;
      height: 30%;

      animation-name: fadeIn;
      animation-duration: 2s;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .badge-link {
      font-size: 14px;
      text-decoration: none;
      color: var(--primary);
      font-weight: 800;
      margin: 10px auto;
      bottom: 5%;

      animation-name: fadeIn;
      animation-duration: 2s;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30%);
      }

      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  </style>`

  if (req.query) {
    if ('compact' in req.query) {
      var svg = `<svg height="46" width="467" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 467 46" fill="none" role="img">
      ${style}
    <foreignObject width="100%" height="100%">
      <div class="badge compact">
        <p class="badge-title compact" style="padding: 10px; margin: 0px;">${req.query?.title ? req.query.title : 'title'}</p>
        <a class="badge-link compact" href="${req.query?.url ? req.query.url : '/'}" target="_blank" style="margin-right: 10px;">${req.query?.linkName ? req.query.linkName : 'Live demo'}</a>
      </div>
    </foreignObject>
      </svg>`;

      res.status(200).send(svg);

    } else {
      var svg = `<svg height="195" width="467" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 467 195" fill="none" role="img">
      ${style}
    <foreignObject width="100%" height="100%">
      <div class="badge">
        <p class="badge-title">${req.query?.title ? req.query.title : 'title'}</p>
        <p class='badge-description'>${req.query?.description ? req.query.description : 'description'}</p>
        <a class='badge-link' href='${req.query?.url ? req.query.url : '/'}'target='_blank'>${req.query?.linkName ? req.query.linkName : 'Live demo'}</a>
      </div>
    </foreignObject>
      </svg>`;
      
      res.status(200).send(svg);
    }
  }

});

//#region HTML
/*       var badge = `
      <link rel="stylesheet" href="/stylesheets/style.css"></link>
      <div class='badge'">
       <p class='badge-title'>${req.query?.title ? req.query.title : 'title'}</p>
       <p class='badge-description'>${req.query?.description ? req.query.description : 'description'}</p>
       <a class='badge-link' href='https://github.com/sindre-gangeskar' target='_blank'>${req.query?.linkName ? req.query.linkName : 'Live demo'}</a>
      </div>`
      
            var badge = `
      <link rel="stylesheet" href="/stylesheets/style.css"></link>
      <div class='badge'" style="width: calc(467px / 2);">
       <p class='badge-title compact' style="margin: 10px;">${req.query?.title ? req.query.title : 'title'}</p>
       <a class='badge-link compact' href='https://github.com/sindre-gangeskar' target='_blank' style="margin-right: 10px;">${req.query?.linkName ? req.query.linkName : 'Live demo'}</a>
      </div>`
      
      */
//#endregion
module.exports = router;
