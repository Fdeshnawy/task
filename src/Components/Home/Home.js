import React from 'react';
import CurrentDate from './Date/CurrentDate';
import Card from './Card/Card';

import './Home.css'

function Home(props) {
 
	return(
		<div className="main--home">
       
			
            <CurrentDate />
            <Card  />
        
			
		</div>
	)
}

export default Home;