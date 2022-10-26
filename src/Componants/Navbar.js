import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
function Navbar() {
	var categoryLink=""
    const[categorydata,setCategory]=useState([])
    useEffect(()=>{
        fetch("./posts.postman_collection.json")
        .then((r)=>r.json())
        .then((r)=>{
            categoryLink=r.item[2].request.url.raw;
            fetch(categoryLink)
            .then((r)=>r.json())
            .then((r)=>{
                setCategory(r);
				console.log(categorydata)
            })
    })
},[])
    return ( 
        <>
        <header id="header">
		<div className="siteHeader">
			<div className="wrapper clear">
				<Link to="index.html" className="mobile-logo">
				</Link>
				<ul className="mainMenu clear">
					<li>
						<Link to="/home">home</Link>
					</li>
					<li>
						<Link to="/home">Category</Link>
						<ul>
							{
								categorydata.map((c)=>{
									return(
										<li><Link to={'/category/'+ c.name}>{c.name}</Link></li>
									);

										
								})
							}
						</ul>
					</li>
					
				</ul>
				<div className="pull-right clear">
					<div className="headerSocialLinks clear">
						<Link to="/home"><i className="fa fa-instagram"></i></Link>
						<Link to="/home"><i className="fa fa-facebook"></i></Link>
						<Link to="/home"><i className="fa fa-twitter"></i></Link>
						<Link to="/home"><i className="fa fa-heart"></i></Link>
						<Link to="/home"><i className="fa fa-pinterest"></i></Link>
						<Link to="/home"><i className="fa fa-google-plus"></i></Link>
					</div>
					<div className="searchIcon"></div>
				</div>
				<span className="showMobileMenu">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>	
		</div>
		<Link to="/home" className="logo">IT SHARKS 25</Link>
	</header>
        </>
    );
}

export default Navbar ;