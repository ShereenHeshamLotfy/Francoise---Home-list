import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
function Home() {
    var postsLink=""
    const[postsdata,setPostes]=useState([])
	const[recentpost,setRecent]=useState([])
    useEffect(()=>{
        fetch("./posts.postman_collection.json")
        .then((r)=>r.json())
        .then((r)=>{
            postsLink=r.item[0].request.url.raw;
            fetch(postsLink)
            .then((r)=>r.json())
            .then((r)=>{
                setPostes(r);
            })
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
<section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">
                    {
                        postsdata.map((p)=>{
                            return(<>
                                        <div className="blogPostListItem clear">
                                                                <Link to={'/singlepost/'+ p.id} className="blogPostListImg">
                                                                    <img src={"https://webeetec.com/itsharks24/blog/admin/" + p.image} alt="Francoise img" />
                                                                </Link>
                                                                <div className="blogPostListText">
                                                                    <div className="blogPostListTime">{p.date}</div>
                                                                    <h3><Link to="/singlepost">{p.title} </Link></h3>
                                                                    <p>{p.description}</p>
                                                                </div>
                                                            </div>
                                                            
                                                        </>
                            );
                        })
                    }
					
				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><Link to="/home">New posts</Link></li>
						<li className="olderPosts"><Link to="/home">Older posts</Link></li>
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
    );
}

export default Home;