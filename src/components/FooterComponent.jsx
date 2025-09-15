import React from 'react'

export default function FooterComponent() {
  return (
    <div className="p-10 rounded footer footer-center bg-base-200 text-base-content">
            <div className="footer-content">
                <a href="#" className="">Kurt Rion</a>
                <ul className="grid grid-flow-col gap-4 my-5">
                    <li><a href="#home" className='hover:text-primary'>Home</a></li>
                    <li><a href="#about" className='hover:text-primary'>About</a></li>
                    <li><a href="#tech" className='hover:text-primary'>Skills</a></li>
                    <li><a href="#projects" className='hover:text-primary'>Projects</a></li>
                    <li><a href="#experience" className='hover:text-primary'>Experience</a></li>
                    <li><a href="#contact" className='hover:text-primary'>Contact</a></li>
                </ul>
                <div className="grid grid-flow-col gap-8 mb-4">
                    <a href="#"><i className="text-3xl devicon-github-original hover:text-primary"></i></a>
                    <a href="#"><i className="text-3xl devicon-linkedin-plain hover:text-primary"></i></a>
                    <a href="#"><i className="text-3xl devicon-facebook-plain hover:text-primary"></i></a>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} Kurt Rion. All rights reserved.</p>
            </div>
        </div>
  )
}
