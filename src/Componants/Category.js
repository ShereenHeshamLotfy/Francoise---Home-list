import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
function Category() {
    var myparameters = useParams();
    var name = myparameters.name;
    var categoryLink=""
    const[singlecategory,setcategory]=useState([])
    const[recentpost,setRecent]=useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category=" + name)
        .then((r)=>r.json())
        .then((r)=>{
			setcategory(r);
            // categoryLink=r.item[3].request.url.raw;
            // fetch(categoryLink + name)
            // .then((r)=>r.json())
            // .then((r)=>{
            //     setcategory(r);
            // })
    })
},[])
useEffect(()=>{
    fetch("https://webeetec.com/itsharks24/blog/api/getrecentpost.php")
    .then((r)=>r.json())
    .then((r)=>{
    setRecent(r)
    })
},[])
    return ( 
        <>
        <section className="container">
		<div className="wrapper clear">
        <div className="contentLeft">
            {
                singlecategory.map((s)=>{
                    return(<>
                    
				<div className="archivePageTitle"><span>{s.category}</span></div>
				<div className="archivePostWrap">
                            
                            <div className="archivePostItem">
                                                <div className="archivePostTime">{s.date}</div>
                                                <h3 className="archivePostTitle"><a href="#">{s.title}</a></h3>
                                                <Link to={'/singlepost/'+ s.id} className="archivePostCategory">{s.category}</Link>
                                                <Link to={'/singlepost/'+ s.id} className="archivePostImg">
                                                    <img src={"https://webeetec.com/itsharks24/blog/admin/" +s.image} alt="Francoise img"/>
                                                </Link>
                                                <p>{s.description}</p>
                                                <div className="archivePostItemMeta">
                                                    <a href="#" className="archivePostItemComments">124 Comments</a>
                                                    <div className="archivePostItemShareLinks">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    </div>
                                                    <Link to={'/singlepost/'+s.id} className="archivePostReadMore">Read More</Link>
                                                </div>
                                            </div>
                            
                    
                    
				</div>
                    </>);
                })
            }
            <div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
            </div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="images/ourlogo.png" alt="Francoise img" />
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialLinks">
						<Link to="/home"><i className="fa fa-instagram"></i></Link>
						<span></span>
						<Link to="/home"><i className="fa fa-facebook"></i></Link>
						<span></span>
						<Link to="/home"><i className="fa fa-twitter"></i></Link>
						<span></span>
						<Link to="/home"><i className="fa fa-heart"></i></Link>
						<span></span>
						<Link to="/home"><i className="fa fa-pinterest"></i></Link>
						<span></span>
						<Link to="/home"><i className="fa fa-google-plus"></i></Link>
					</div>
				</div>
				
				<div className="sidebar-widget">
					{
						recentpost.map((r)=>{
							return(<>
							<h3>{r.title}</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<Link to={'/home'} className="popularPostsItemImg"><img src={"https://webeetec.com/itsharks24/blog/admin/" + r.image} alt="Francoise img" /></Link>
							<time datetime="2015-05-15">{r.date}</time>
							<h4><Link to={'/home'}>{r.description}</Link></h4>
						</div>
						
					</div>
							
							</>);
						})
					}
					
				</div>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
        </>
    );
}

export default Category;