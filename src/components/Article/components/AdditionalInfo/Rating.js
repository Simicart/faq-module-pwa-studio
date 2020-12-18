import React, { useState } from 'react';
import defaultClasses from './Rating.css'

const Rating = props => {
	const classes = defaultClasses
	const [positive, setPositive] = useState(props.positives);
	const [negative, setNegative] = useState(props.negatives);
	const [positiveRated, setPositiveRated] = useState(false);
	const [negativeRated, setNegativeRated] = useState(false);
	const [disable, setDisable] = useState(false)
	const [display, setDisplay] = useState(false)
	const messageStyle = {
		background: !disable ? '#e5efe5' : '#fae5e5',
		color: !disable ? '#006400' : '#e02b27',
	}
	return (
		<div className={classes.container_rating}>
			<div className={classes.rating_label}>
				<span>Did you find it helpful? </span>
				<div className={classes.rating_action}>
					<div className={classes.positive} >
						<button 
							className={classes.btn}
							style={{
								'backgroundColor': positiveRated ? '#1abc9c' : '',
								'color': positiveRated ? '#fff' : '#000'
							}}
							onClick={() => {
								if(!positiveRated && !negativeRated) {
									setPositive(positive+1);
									setPositiveRated(true)
									setDisplay(true);
								} else {
									setDisplay(true)
									setDisable(true)
								}
							}}
						>
							Yes&thinsp;
							(<span>{positive}</span>)
						</button>
					</div>
					<div className={classes.negative}>
						<button 
							className={classes.btn}
							style={{
								'backgroundColor': negativeRated ? '#1abc9c' : '',
								'color': negativeRated ? '#fff' : '#000'
							}}
							onClick={() => {
								if(!negativeRated && !positiveRated) {
									setNegative(negative+1);
									setNegativeRated(true)
									setDisplay(true)
								} else {
									setDisplay(true)
									setDisable(true)

								}
							}}
						>
							No&thinsp;
							(<span>{negative}</span>)
						</button>
					</div>
				</div>
				&thinsp;
			</div>
			<div 
				className={classes.message} 
				style = {{
					display: display ? 'block' : 'none',
					...messageStyle
				}}
			>
				<div>
					{ !disable ? 'Thank for your vote!' : 'You have voted already!'}
				</div>
			</div>
		</div>
	)
}

export default Rating