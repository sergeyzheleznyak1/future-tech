import Header from './Header.js'
import Reveal from './Reveal.js'
import TabsCollection from './Tabs.js'
import VideoPlayerCollection from './VideoPlayer.js'
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js'
import MagneticButton from './MagneticButton.js'

new Header()
new TabsCollection()
new VideoPlayerCollection()
new Reveal()
new MagneticButton()

defineScrollBarWidthCSSVar()
