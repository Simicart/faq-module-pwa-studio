import React from 'react';
import defaultClasses from './Social.css'
import { Facebook, Twitter, Google, Linkedin } from 'react-social-sharing'


const Social = props => {
	const classes = defaultClasses
	const url = window.location.href
	return (
		<div className={classes.container_social}>
			<Facebook link={url}/>
			<Twitter link={url}/>
			<Google link={url}/>
			<Linkedin link={url}/>
		</div>
	)
}

export default Social