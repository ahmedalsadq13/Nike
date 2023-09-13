
import {footerLogo} from '../assets/images'
function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
    <div className="flex flex-col items-start">
      <a href="/"><img src={footerLogo} alt="" /></a>
    </div>
      </div>
    </footer>
  )
}

export default Footer