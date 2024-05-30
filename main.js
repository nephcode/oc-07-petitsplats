import './style.css'
import javascriptLogo from '/images/common/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//import { footer } from './js/layout/footer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
   
    <h1>Petits Plats DEV</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

//document.querySelector('footer').innerHTML = footer
