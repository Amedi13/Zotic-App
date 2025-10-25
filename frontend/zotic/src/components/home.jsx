import React, { useState } from 'react'
import SearchBar from './SearchBar';    

const Home = () => {

    return (
    <div>
        <header>
            <h2>Find Trusted Care for Your Exotic Pet</h2>
            <h3>Connect with experienced, verified caretakers who specialize in exotic animals. From reptiles to birds, your unique companion deserves expert care.</h3>
        </header>
    
        <main>
            <SearchBar></SearchBar>
        </main>
    </div>
    
); 
}; 
export default Home; 