import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
function Singlepage() {
    var myparameters = useParams();
    var id = myparameters.id;
    // var postsLink=""
    const[singlepost,setPostes]=useState([])
	const[recentpost,setRecent]=useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/singlepost.php?id=" + id)
        .then((r)=>r.json())
        .then((r)=>{
			setPostes(r);
			// console.log(singlepost)
            // postsLink=r.item[1].request.url.raw;
            // fetch(postsLink + id)
            // .then((r)=>r.json())
            // .then((r)=>{
            //     console.log(r);
            //     setPostes(r);
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
			{
				singlepost.map((p)=>{
					return(
						<>
						<div className="contentLeft">
				<div className="singlePostMeta">
					<div className="singlePostTime"></div>

					<div className="singlePostTime">{p.date}</div>
					<h1>{p.title}</h1>
				</div>
				<div className="singlePostWrap">
					<div className="singlePostImg">
						<img src={"https://webeetec.com/itsharks24/blog/admin/" + p.image} alt="Francoise img"/>
					</div>
					<p>{p.description}</p>
					
				</div>
			</div>
			</>
					);
				})
			}


			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="https://webeetec.com/itsharks24/blog/admin/images/ourlogo.png" alt="Francoise img" />
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
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
		<div className="ourInstagram">
			<div id="sb_instagram">
				<div className="sb_instagram_header">
					<a href="#" className="sbi_header_link">Follow on instagram</a>
				</div>
				<div id="sbi_images">
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="https://webeetec.com/itsharks24/blog/admin/images/content/inst.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="https://webeetec.com/itsharks24/blog/admin/images/content/inst2.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#"className="sbi_photo">
								<img src="https://webeetec.com/itsharks24/blog/admin/images/content/inst3.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="https://webeetec.com/itsharks24/blog/admin/images/content/inst4.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="https://webeetec.com/itsharks24/blog/admin/images/content/inst5.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
        
    );
}

export default Singlepage ;