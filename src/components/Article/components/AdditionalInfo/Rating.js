import React from 'react';
import defaultClasses from './Rating.css'

const Rating = props => {
	const classes = defaultClasses
	const {
		positives,
		negatives
	} = props
	return (
		<div className={classes.container_rating}>
			<div className={classes.rating_label}>
				<span>Did you find it helpful? </span>
				<div className={classes.rating_action}>
					<div className={classes.positive}>
						<a className={classes.btn}>
							Yes&thinsp;
							(<span>{positives}</span>)
						</a>
					</div>
					<div className={classes.negative}>
						<a className={classes.btn}>
							No&thinsp;
							(<span>{negatives}</span>)
						</a>
					</div>
				</div>
				&thinsp;
			</div>
		</div>
	)
}

export default Rating