import React from 'react';
// import lightql, { LRUCache } from '../../../../npm-package/lightql';
import { browserHistory } from 'react-router'
import { Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styling/sitewide.scss';
import Homepage from './Homepage.js';
import Docs from './Docs.js';
import AboutUs from './AboutUs.js';
import Demo from './homepageComponents/Demo.js'
import GitHubIcon from '@mui/icons-material/GitHub.js';

const logo = require('../../../assets/nobg-LightQL.png')
const blackLogo = require('../../../assets/black-logo.png')
const npmLogo = require('../../../assets/npm-vector.png')

const App = () => {

   
	return (
		<>
			 <section id='navbar'>
				<section id='left-nav'>
					<motion.img 
						whileHover={{
							rotate: -20,
							bounce: 2
						}}
						id='navbar-logo' 
						src={logo.default} 
						alt='LightQL Homepage'
					/>
					<Link 
					to='/'
					>
						<motion.button 
						whileHover={{
							scale: 1.1
						}}
						id='home-btn' 
						className='nav-btns'
						>
						Home
						</motion.button>
					</Link>
					<Link to='/docs'>
						<motion.button 
							whileHover={{
								scale: 1.1
							}} 
							id='docs-btn' 
							className='nav-btns'
						>
						Docs
						</motion.button>
					</Link>
					<Link to='/aboutus'>
						<motion.button 
							whileHover={{
								scale: 1.1
							}} 
							id='aboutus-btn' 
							className='nav-btns'
						>
						About Us
						</motion.button>
					</Link>				
				</section>
				<section id='right-nav'>
					<motion.a 
						name='Github Link'
						aria-label='Click to access our Github repository'
						whileHover={{
							type: "bounce",
							scale: 1.2
						}}
						href="https://github.com/oslabs-beta/LightQL" 
						target="_blank"
						
						>
						<GitHubIcon sx={{color: '#323949'}} className='top-right-icons'></GitHubIcon>
					</motion.a>
					<motion.a 
						name='NPM Link'
						aria-label='Click to view our NPM package on npmjs.com'
						whileHover={{
							type: "bounce",
							scale: 1.2
						}}
						href="https://www.npmjs.com/package/lightql-cache" 
						target="_blank"
						>
						<motion.img alt='NPM Link' id='npm-logo' className='top-right-icons' src={npmLogo.default}></motion.img>
					</motion.a>
				</section>
			 </section>
			<Routes>
				<Route 
					path='/'
					element={
						<Homepage 
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/docs'
					element={
						<Docs
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/aboutus'
					element={
						<AboutUs
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/demo'
					element={
						<Demo
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
			</Routes>
			<section id='footer'>
				<img alt='LightQL Logo' id='black-logo' src={blackLogo.default}></img>
				<p id='footer-text'>Made with love by LightQL.</p>
			</section>
		</>
	)

}

export default App;