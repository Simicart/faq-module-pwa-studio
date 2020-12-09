import React, { useState, Fragment } from 'react';
import defaultClasses from './Articles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
const Articles = props => {
	const classes = defaultClasses
	const { articles } = props
	const [viewAll, setViewAll] = useState(false);
	const onClick = () => {
		setViewAll(!viewAll)
	}

	const extendArticles = 	articles.slice(3, articles.length).map(article => {
								return (
									<li key={article.article_id}>
										<div className={classes.header}>
											<span>
												<a href={`/faq/article/${article.url_key}`}>
													<FontAwesomeIcon className={classes.icon} icon={faFileAlt}/>
													{article.name}
												</a>
											</span>
										</div>
									</li>
								)
							})
							

	return (
		<ul className={classes.articles}>
			{
				articles.slice(0,3).map(article => {
					return (
						<li key={article.article_id}>
							<div className={classes.header}>
								<span>
									<a href={`/faq/article/${article.url_key}`}>
										<FontAwesomeIcon className={classes.icon} icon={faFileAlt}/>
										{article.name}
									</a>
								</span>
							</div>
						</li>
					)
				})
			}
			{articles.length <= 3 ? 
				null : viewAll ? 
				(
				<Fragment>
					{articles.slice(3, articles.length).map(article => {
									return (
										<li key={article.article_id}>
											<div className={classes.header}>
												<span>
													<a href={`/faq/article/${article.url_key}`}>
														<FontAwesomeIcon className={classes.icon} icon={faFileAlt}/>
														{article.name}
													</a>
												</span>
											</div>
										</li>
									)
					})}
					<a 
						className={classes.extend} 
						onClick={onClick}
					>
						<FontAwesomeIcon className={classes.arrow} icon={faAngleDoubleUp}/>
						Show less
					</a>
				</Fragment>
				)
				: 	<a 
						className={classes.extend} 
						onClick={onClick}
					>
						<FontAwesomeIcon className={classes.arrow} icon={faAngleDoubleDown}/>
						View all
					</a>  
			}
		</ul>
	)
}

export default Articles