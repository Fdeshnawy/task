import React from "react";
import List from "./Lists";
import './ShwoList.css';
function ShowList(props){
	
    return(

        <ul className="list--style">
					{props.navigate.map((nav)=>(
						<List key={nav.k} navigate={nav.id} user={nav.user}
						profile={nav.profile}
						/>
					))}
				</ul>
    )
}
export default ShowList;