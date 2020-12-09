import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import defaultClasses from './CategoryBlock.css'
import Articles from './Articles'

const CategoryBlock = props => {
	const {
		url_key,
		name,
		articles
	} = props.data
	const classes = defaultClasses
	const percent = 100/props.column
	const width = `${percent}%` //width of a category column
	
	return (
		<div className={classes.block} style={{width: width}}>
			<div className={classes.category}>
				<h4>
					<a href={`/faq/category/${url_key}`}>
		                <FontAwesomeIcon icon={faFolderOpen} />
		                &thinsp;{name}&thinsp;
		                <span>{`(${articles.items.length})`}</span>
	                </a>
					<hr/>
				</h4>
			</div>
			<Articles articles={articles.items} searchInput={props.searchInput}/>
		</div>
	)
}

export default CategoryBlock