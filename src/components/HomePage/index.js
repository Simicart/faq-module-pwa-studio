import React, { Fragment,useState } from 'react';
import SearchBox from '../SearchBox/searchbox'
import CategoriesList from '../FaqsListContainer/CategoriesList'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { Helmet } from 'react-helmet';
import { useHomePage } from '@faq/faq/src/talons/useHomePage'
import { useCategoryList } from '@faq/faq/src/talons/useCategoryList'

const FAQ = props => {
	const { 
		homepageData, 
		homepageLoading, 
		derivedErrorMessage
	} = useHomePage()
	const {
		title,
		category_column
	} = homepageData.MpMageplazaFaqsGetConfig.faq_home_page
	
	const { 
		categoriesData,
		categoriesLoading,
		categoriesError 
	} = useCategoryList()
	const categories = categoriesData.MpMageplazaFaqsCategoryList.items;

	const [userInput, setUserInput] = useState('');
	const [searchInput, setSearchInput] = useState('');	
	const [loading, setLoading] = useState(false)

	const onChange = (e) => {
		setUserInput(e.target.value)
	}

	const onSearch = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setSearchInput(userInput)
		}, 500)
	}

	return (
		<Fragment>
			<Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
			<SearchBox
				onChange={onChange}
				userInput={userInput}
				onSearch={onSearch}
			/>
			<CategoriesList 
				loading={loading}
				column={category_column} 
				categories={categories}
				searchInput={searchInput}
			/>
		</Fragment>
	)
}

export default FAQ;