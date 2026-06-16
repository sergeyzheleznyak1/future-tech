import Header from './Header.js'
import Reveal from './Reveal.js'
import TabsCollection from './Tabs.js'
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js'
import MagneticButton from './MagneticButton.js'

new Header()
new TabsCollection()
new Reveal()
new MagneticButton()

defineScrollBarWidthCSSVar()
