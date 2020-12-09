import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SearchBox from '../SearchBox/searchbox.js';
import CategoriesList from '../FaqsListContainer/CategoriesList'
import { useCategoryListUrl } from '@faq/faq/src/talons/useCategoryListUrl'
import { useCategoryList } from '@faq/faq/src/talons/useCategoryList'

const Category = props => {
	const { categoryUrl = "" } = useParams();
	const {
		categoryData,
		categoryLoading,
		categoryErrorMessage
	} = useCategoryListUrl({url_key: categoryUrl});
	const { 
		categoriesData,
		categoriesLoading,
		categoriesError 
	} = useCategoryList()
	
	const [userInput, setUserInput] = useState('');
	const [searchInput, setSearchInput] = useState('');	
	const [categories, setCategories] = useState(categoryData.MpMageplazaFaqsCategoryList.items)
	const [loading, setLoading] = useState(false)

	const onChange = (e) => {
		setUserInput(e.target.value)
	}
	const onSearch = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			if(userInput != '') {
				setCategories(categoriesData.MpMageplazaFaqsCategoryList.items)
			} else {
				setCategories(categoryData.MpMageplazaFaqsCategoryList.items)
			}
			setSearchInput(userInput)
		}, 500)
	}

	return (
		<Fragment>
			<Helmet>
                <meta charSet="utf-8" />
                <title>{categories[0].name} - Frequently Answer and Question</title>
            </Helmet>
			<SearchBox 
				onChange={onChange}
				userInput={userInput}
				onSearch={onSearch}
			/>
			<CategoriesList
				loading={loading}
				categories={categories}
				searchInput={searchInput}/>
		</Fragment>
	)
}

export default Category