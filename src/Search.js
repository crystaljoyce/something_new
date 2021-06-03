import React from 'react';

const URL = 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'

const Search = ({filteredPosts, setFilteredPosts, posts}) => { 

    const handleSearch = (event) => { 
        let value = event.target.value.toLowerCase();
        let result = [];
        result = posts?.filter((data) => { 
            return data?.name?.search(value) != -1;
        });
        setFilteredPosts(result)
    }

    return (<>
    <div> 
        <input className='search' type='text' placeholder='search' onChange={(event) => handleSearch(event)} /> 
        <div>
            {filteredPosts?.map((value, index) => { 
            const {id, name, forks, forks_url, stargazers_count, stargazers_url, language, updated_at, html_url, full_name, description} = value; 
                return (<>
                <div key={id}>
                <a classname='main-link' href={html_url}>{full_name}</a>
                <h3 className='main-desc'> {description} </h3>
                <p className='details'>  
                <a href={stargazers_url}> <img src={'/images/star.png'}/>{stargazers_count}</a> 
                <p id='circle'></p> {language} {value?.license?.name} <b>Updated:</b> {updated_at}</p>
                </div>
                </>)
            })}
        </div>
    </div>
    </>)
};

export default Search; 