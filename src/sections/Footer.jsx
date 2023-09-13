
import {footerLogo} from '../assets/images';
import {footerLinks, products, socialMedia} from '../constants/index'
function Footer() {
  return (
    <footer className="max-container text-white-400">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="Logo" />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon)=>(
              <a className='flex justify-center items-center  w-12 h-12 bg-white rounded-full  hover:bg-gray-400 transition-all' href={icon.href} target='_blank'><img src={icon.src} alt={icon.alt} width={24} height={24}/></a>            
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {footerLinks.map((section)=>(
                <div className='products'>
                <h3 className='text-2xl font-montserrat leading-normal font-medium mb-6  text-white'>{section.title}</h3>
                <ul>
                  {section.links.map((link)=>(
                    <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition-all cursor-pointer' key={link.name}><a href={link.link}>{link.name}</a></li>
                  ))}
                </ul>
              </div>
              ))}
        </div>
        <div className="w-full flex justify-between items-center gap-10 text-white-400 mt-24 max-sm:mt-0 max-sm:flex-col max-sm:items-center">
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat'>
            &copy; Copyright. All rights reserved. 
          </div>
          <a href="#" className='font-montserrat cursor-pointer'>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer