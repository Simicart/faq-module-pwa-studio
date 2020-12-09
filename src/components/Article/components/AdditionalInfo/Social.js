import React from 'react';
import defaultClasses from './Social.css'
import { Facebook, Twitter, Google, Linkedin } from 'react-social-sharing'


const Social = props => {
	const classes = defaultClasses
	return (
		<div className={classes.container_social}>
			<Facebook link='https://facebook.com'/>
			<Twitter link='https://twitter.com'/>
			<Google link='https://plus.google.com'/>
			<Linkedin link='https://linkedin.com'/>
		</div>
	)
}

export default Social