import React from 'react';
import {useEffect, useState} from 'react';
import Search from './Search'

const URL = 'https://api.github.com/search/repositories?q={query}'

const App = () => { 

    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]); 

    useEffect( async () => {
        const response = await fetch(`${URL}`, { 
            method: 'GET',
            headers: { 
                'accept': 'application/vnd.github.v3+json'            
            }
        }); 
        const data = await response.json();
        setPosts(data?.items)
    }, [])   

    return (<>
    <a id='git-logo' href='https://github.com/'> <img src='/images/github.png' /> </a>
    <div className='main'> 
   
        <Search filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} posts={posts} setPosts={setPosts} name={name} setName={setName} description={description} setDescription={setDescription} /> 
    
    {posts.map(post => { 
        const {id, stargazers_count, stargazers_url, language, updated_at, html_url, full_name, description } = post; 
        return (<>
        <div key={id}>
            <a classname='main-link' href={html_url}>{full_name}</a>
            <h3 className='main-desc'> {description} </h3>
            <p className='details'>  <a href={stargazers_url}> <img src={'/images/star.png'}/>{stargazers_count}</a> 
            <p id='circle'></p> {language}  {post?.license?.name} <b>Updated:</b> {updated_at.slice('t',10)}</p>
            <br/>
            </div>
            </>)
    })}

    <button className='btn'><link href={`https://api.github.com/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>`} rel="next" placeholder='next'/>next</button>
    </div>
    </>)
}

export default App; 