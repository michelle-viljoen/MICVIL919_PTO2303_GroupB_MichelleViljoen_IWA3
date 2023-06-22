// scripts.js

import {company} from '/configurations.js'
import {year} from '/configurations.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
