import React, {useEffect} from 'react';

const URL = 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'

const Search = ({filteredPosts, setFilteredPosts, posts, setPosts}) => { 


    // useEffect( async () => await fetch`${URL}`, {
    //     method: 'POST',
    //     headers: { 
    //         'Accept': 'application/vnd.github.v3+json',
    //         'per_page': 100
    //     }
        
    // }, [])
    const handleSearch = (event) => { 
        let value = event.target.value.toLowerCase();
        let result = [];
        result = posts?.filter((data) => { 
            return data?.name?.search(value) != -1;
        });
        setFilteredPosts(result)
    }

    // useEffect( async () => {
    //     const response = await fetch(`${URL}`, { 
    //         method: 'GET',
    //         headers: { 
    //             'Content-Type': 'Application/json',
    //             'accept': 'application/vnd.github.v3+json'            }
    //     }); 
    //     const data = await response.json();
    //     console.log('all data: ',data)
    //     console.log('data items', data.items)
    //     setFilteredPosts(data?.items)
    //     console.log('set posts: ',posts)
    // }, [])

    return (<>
    <div> 
        <label> </label>
        <input className='search' type='text' placeholder='search' onChange={(event) => handleSearch(event)} /> 

        <div>
            {filteredPosts?.map((value, index) => { 
                console.log('searched value: ',value)
            const {id, name, forks, forks_url, stargazers_count, stargazers_url, language, updated_at, html_url, full_name, description} = value; 
                return (<>
                <a classname='main-link' href={html_url}>{full_name}</a>
                <h3 className='main-desc'> {description} </h3>
                <p className='details'>  
                <a href={stargazers_url}> <img src={'/images/star.png'}/>{stargazers_count}</a> 
                <p id='circle'></p> {language} <b>License:</b> {value?.license?.name} <b>Updated:</b> {updated_at}</p>
                </>)
            })}
        </div>

       
    </div>
    </>)
};

export default Search; 