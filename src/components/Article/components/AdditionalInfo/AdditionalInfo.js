import React from 'react';
import defaultClasses from './AdditionalInfo.css'
import Social from './Social';
import Rating from './Rating';

const AdditionalInfo = props => {
	const classes = defaultClasses
	const {
		positives,
		negatives
	} = props.data
	return (
		<div className={classes.container_additionalinfo}>
			<Social />
			<hr/>
			<Rating positives={positives} negatives={negatives}/>
		</div>
	)
}

export default AdditionalInfo 