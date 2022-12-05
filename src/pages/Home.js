import React from 'react'
import {Helmet} from "react-helmet";


export const Home = () => {
  return (
    <div>
        
        
     
    {/* <!-- Wrapper Starts --> */}
    <div className="wrapper">
		<div className="main-picture woman hide-on-med-and-down">
		</div>
        <div id="bl-main" className="bl-main">
            {/* <!-- Top Left Section Starts --> */}
            <section className="topleft">
                <div className="bl-box row valign-wrapper">
                    <div className="row valign-wrapper mb-0">
                        <div className="title-heading">
                            <div className="selector uppercase" id="selector">
                                <h3 className="ah-headline p-none m-none">
                                    <span className="font-weight-400">Hi There ! I'm</span>
									<span className="my-name">K. Mohan Achary</span>
                                    <span className="ah-words-wrapper">
										<b className="is-visible">web designer</b>
										<b>UI developer</b>
										<b>PHP Developer</b>
									</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Top Left Section Ends --> */}
            {/* <!-- About Section Starts --> */}
            <section>
                {/* <!-- About Title Starts --> */}
                <div className="bl-box valign-wrapper">
                    <div className="page-title center-align">
                        <h2 className="center-align">
                            <span data-hover="About">About </span>
                            <span data-hover="Me"> Me</span>
                        </h2>
                    </div>
                </div>
                {/* <!-- About Title Ends --> */}
                {/* <!-- About Expanded Starts --> */}
                <div className="bl-content">
                    {/* <!-- Main Heading Starts --> */}
                    <div className="container page-title custom-page-title">
                        <h2 className="center-align">
                            <span>About</span>
                            <span>Me</span>
                        </h2>
                    </div>
                    {/* <!-- Main Heading Ends --> */}
                    <div className="container infos">
						{/* <!-- Divider Starts --> */}
                        <div className="divider center-align">
                            <span className="outer-line"></span>
                            <span className="fa fa-vcard" aria-hidden="true"></span>
                            <span className="outer-line"></span>
                        </div>
						{/* <!-- Divider Ends --> */}
						{/* <!-- Personal Informations Starts --> */}
                        <div className="row">
							{/* <!-- Picture Starts --> */}
                            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
								<img src="assets/images/men.jpg" className="responsive-img my-picture" alt="My Photo"/>
                            </div>
							{/* <!-- Picture Ends --> */}
                            <div className="col s12 m8 l12 xl12 personal-info section-padding">
                                <h6 className="uppercase"><i className="fa fa-user"></i> Personal Info</h6>
								<div className="col m12 l12 xl9 p-none">
									<p className="second-font">I'm a Freelance Web Designer & Developer based in Moscow, Russia. I have serious passion for UI effects, animations and creating intuitive, with over a decade of experience.
									</p>
								</div>
                                <div className="col s12 m12 l6 p-none">
                                    <ul className="second-font list-1">
                                        <li><span className="font-weight-700">First Name : </span> K. Mohan</li>
                                        <li><span className="font-weight-700">Last Name : </span> Achary</li>
                                        <li><span className="font-weight-700">Date of birth : </span>19 Dec 1999 </li>
                                        <li><span className="font-weight-700">Nationality : </span> Indian</li>
										<li><span className="font-weight-700">Freelance : </span> Available</li>
                                    </ul>
                                </div>
                                <div className="col s12 m12 l6 p-none">
                                    <ul className="second-font list-2">
                                        <li><span className="font-weight-700">Phone : </span> +91 9040046466</li>
                                        <li><span className="font-weight-700">Address : </span> Berhampur</li>
                                        <li><span className="font-weight-700">Email : </span> kmohanachary201@gmail.com</li>
                                        <li><span className="font-weight-700">Spoken Langages : </span> English - Hindi - Odia</li>
										<li><span className="font-weight-700">Skype : </span> kmohanachary</li>
                                    </ul>
                                </div>
                                <a href="" className="btn font-weight-700">
									Download Resume <i className="fa fa-file-pdf-o"></i>
								</a>
								<a href="#" className="btn btn-blog font-weight-700">
									My Blog <i className="fa fa-edit"></i>
								</a>
                            </div>
                        </div>
						{/* <!-- Personal Informations Ends --> */}
                    </div>
					{/* <!-- Resume Starts --> */}
					<div className="resume-container">
                        <div className="container">
                            <div className="valign-wrapper row">
								{/* <!-- Resume Menu Starts --> */}
                                <div className="resume-list col l4 section-padding">
                                    <div className="resume-list-item is-active" data-index="0" id="resume-list-item-0">
                                        <div className="resume-list-item-inner">
                                            <h6 className="resume-list-item-title uppercase"><i className="fa fa-briefcase"></i> Experience</h6>
                                        </div>
                                    </div>
                                    <div className="resume-list-item" data-index="1" id="resume-list-item-1">
                                        <div className="resume-list-item-inner">
                                            <h6 className="resume-list-item-title uppercase"><i className="fa fa-graduation-cap"></i> Education</h6>
                                        </div>
                                    </div>
                                    <div className="resume-list-item" data-index="2" id="resume-list-item-2">
                                        <div className="resume-list-item-inner">
                                            <h6 className="resume-list-item-title uppercase"><i className="fa fa-star"></i> Skills</h6>
                                        </div>
                                    </div>
                                </div>
								{/* <!-- Resume Menu Ends --> */}
								{/* <!-- Resume Content Starts --> */}
                                <div className="col s12 m12 l8 resume-cards-container section-padding">
                                    <div className="resume-cards">
										{/* <!-- Experience Starts --> */}
                                        <div className="resume-card resume-card-0" data-index="0">
											{/* <!-- Experience Header Title Starts --> */}
                                            <div className="resume-card-header">
                                                <div className="resume-card-name"><i className="fa fa-briefcase"></i> Experience</div>
                                            </div>
											{/* <!-- Experience Header Title Ends --> */}
											{/* <!-- Experience Content Starts --> */}
                                            <div className="resume-card-body experience">
                                                <div className="resume-card-body-container second-font">
													{/* <!-- Single Experience Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Web Designer - </span> Quikseo</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2020 - 2021</span>
														<p>Done Six Month Internship as a Web Designer at Quikseo from June 2020 to Feb 2021.</p>
                                                    </div>
													{/* <!-- Single Experience Ends --> */}
                                                    <span className="separator"></span>
													{/* <!-- Single Experience Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Web Developer - </span> Enut Technology Pvt. Ltd</h6>
														<span className="date"><i className="fa fa-calendar-o"></i>  </span>
														<p>This project manages the overall management functionality of a hospital. Using it, the hospital administration can manage all the departments of the hospital including patient management, HR Management, Payroll Management etc.</p>
                                                    </div>
													{/* <!-- Single Experience Ends --> */}
                                                    <span className="separator"></span>
													{/* <!-- Single Experience Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>PHP Developer - </span> Virtuewireless Pvt. Ltd</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2022 - 2022</span>
														<p>College ERP Site</p>
                                                    </div>
													{/* <!-- Single Experience Ends --> */}
                                                    <span className="separator"></span>
													{/* <!-- Single Experience Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Frontend Developer - </span>Metalok </h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2022</span>
														<p>Now Working On Metalok Solutions Private Limited</p>
                                                    </div>
													{/* <!-- Single Experience Ends --> */}
                                                </div>
                                            </div>
											{/* <!-- Experience Content Starts --> */}
                                        </div>
										{/* <!-- Experience Ends --> */}
										{/* <!-- Education Starts --> */}
                                        <div className="resume-card resume-card-1" data-index="1">
											{/* <!-- Education Header Title Starts --> */}
                                            <div className="resume-card-header">
                                                <div className="resume-card-name"><i className="fa fa-graduation-cap"></i> Education</div>
                                            </div>
											{/* <!-- Education Header Title Starts --> */}
                                            <div className="resume-card-body education">
                                                <div className="resume-card-body-container second-font">
													{/* <!-- Single Education Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Bachelor of Engineering - 
                                                        </span> VITAM</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2018-2021</span>
														<p>I Had Done My BTech In Vignan Institute of Technology and Management</p>
                                                    </div>
													{/* <!-- Single Education Ends --> */}
                                                    <span className="separator"></span>
													{/* <!-- Single Education Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Diploma - </span>Gandhi Polytechnic, Berhampur</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2015-2018</span>
														<p>I Had Done My Diploma In Gandhi Polytechnic, Berhampur</p>
                                                    </div>
													{/* <!-- Single Education Ends --> */}
                                                    <span className="separator"></span>
													{/* <!-- Single Education Starts --> */}
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>School - </span>Balaji Bidya Peetha, Kanisi</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2015</span>
														<p>I Complete my school Study In Balaji Bidya Peetha, Kanisi</p>
                                                    </div>
													{/* <!-- Single Education Ends --> */}
                                                </div>
                                            </div>
                                        </div>
										{/* <!-- Education Ends --> */}
										{/* <!-- Skills Starts --> */}
                                        <div className="resume-card resume-card-2" data-index="2">
											{/* <!-- Skills Header Title Starts --> */}
                                            <div className="resume-card-header">
                                                <div className="resume-card-name"><i className="fa fa-star"></i> Skills</div>
                                            </div>
											{/* <!-- Skills Header Title Starts --> */}
                                            <div className="resume-card-body skills">
                                                <div className="resume-card-body-container second-font">
                                                    <div className="row">
														{/* <!-- Skills Row Starts --> */}
                                                        <div className="col s6">
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">html</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">javascript</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">css</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">Bootstrap</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">jquery</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">React js</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
                                                        </div>
														{/* <!-- Skills Row Ends --> */}
														{/* <!-- Skills Row Starts --> */}
                                                        <div className="col s6">
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">wordpress</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">MySql</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">PHP</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">Digital Marketing</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">Adobe Photoshop</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
															{/* <!-- Single Skills Starts --> */}
                                                            <div className="resume-content">
																<h6 className="uppercase">SEO</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
															{/* <!-- Single Skills Ends --> */}
                                                        </div>
														{/* <!-- Skills Row Ends --> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
										{/* <!-- Skills Ends --> */}
                                    </div>
                                </div>
								{/* <!-- Resume Content Ends --> */}
                            </div>
                        </div>
                    </div>
					{/* <!-- Resume Ends --> */}
					{/* <!-- Fun Facts Starts --> */}
                    <div className="container badges">
                        <div className="row">
                            {/* <!-- Fact Badge Item Starts --> */}
                            <div className="col s12 m4 l4 center-align">
                                <h3>
                                    <i className="fa fa-briefcase"></i>
									<span className="font-weight-900">1+</span>
                                </h3>
                                <h6 className="uppercase font-weight-700">Years Experience</h6>
                            </div>
                            {/* <!-- Fact Badge Item Ends --> */}
                            {/* <!-- Fact Badge Item Starts --> */}
                            <div className="col s12 m4 l4 center-align">
                                <h3>
                                    <i className="fa fa-handshake-o"></i>
									<span className="font-weight-900">8+</span>
                                </h3>
                                <h6 className="uppercase font-weight-700">Done Projects</h6>
                            </div>
                            {/* <!-- Fact Badge Item Ends --> */}
                            {/* <!-- Fact Badge Item Starts --> */}
                            <div className="col s12 m4 l4 center-align">
                                 <h3>
                                    <i className="fa fa-heart-o"></i>
									<span className="font-weight-900">50+</span>
                                </h3>
                                <h6 className="uppercase font-weight-700">Happy customers</h6>
                            </div>
                            {/* <!-- Fact Badge Item Ends --> */}
                        </div>
                    </div>
					{/* <!-- Fun Facts Ends --> */}
                </div>
                {/* <!-- End Expanded About --> */}
                <img alt="close" src="assets/images/close-button.png" className="bl-icon-close" />
            </section>
            {/* <!-- About Ends --> */}
            {/* <!-- Portfolio Starts --> */}
            <section id="bl-work-section">
				{/* <!-- Portfolio Title Starts --> */}
                <div className="bl-box valign-wrapper">
                    <div className="page-title center-align">
                        <h2 className="center-align">
                            <span data-hover="my">my </span>
                            <span data-hover="portfolio">portfolio</span>
                        </h2>
                    </div>
                </div>
				{/* <!-- Portfolio Title Ends --> */}
                {/* <!-- Portfolio Expanded Starts --/> */}
                <div className="bl-content">
                    {/* <!-- Main Heading Starts --> */}
                    <div className="container page-title center-align">
                        <h2 className="center-align">
                            <span data-hover="my">my </span>
                            <span data-hover="portfolio">portfolio</span>
                        </h2>
                    </div>
                    {/* <!-- Main Heading Ends --> */}
                    <div className="container">
                        {/* <!-- Divider Starts --> */}
                        <div className="divider center-align">
                            <span className="outer-line"></span>
                            <span className="fa fa-suitcase" aria-hidden="true"></span>
                            <span className="outer-line"></span>
                        </div>
                        {/* <!-- Divider Ends --> */}
                        <div className="row center-align da-thumbs" id="bl-work-items">
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-1">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-1.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-2">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-2.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Slider Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-3">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-3.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Youtube Video</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-4">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-4.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Local Video</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts -- > */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-5">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-5.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-6">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-6.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-7">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-7.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                            {/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-8">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-8.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
							{/* <!-- Project Starts --> */}
                            <div className="col s12 m6 l6 xl4" data-panel="panel-9">
                                <a href="#">
									<img className="responsive-img" src="assets/images/projects/project-9.jpg" alt="Project" />
									<div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
								</a>
                            </div>
                            {/* <!-- Project Ends --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Expanded Ends --> */}
                <img alt="close" src="assets/images/close-button.png" className="bl-icon-close" />
            </section>
            {/* <!-- Portfolio Section Ends --> */}
            {/* <!-- Contact Section Starts --> */}
            <section>
				{/* <!-- Contact Title Starts --> */}
                <div className="bl-box valign-wrapper">
                    <div className="page-title center-align">
                        <h2 className="center-align">
                            <span data-hover="get">get </span>
                            <span data-hover="in touch">in touch</span>
                        </h2>
                    </div>
                </div>
				{/* <!-- Contact Title Ends --> */}
                {/* <!-- Expanded Contact Starts --> */}
                <div className="bl-content">
                    {/* <!-- Main Heading Starts --> */}
                    <div className="container page-title center-align">
                        <h2 className="center-align">
                            <span data-hover="get">get </span>
                            <span data-hover="in touch"> in touch</span>
                        </h2>
                    </div>
                    {/* <!-- Main Heading Ends --> */}
                    <div className="container">
                        {/* <!-- Divider Starts --> */}
                        <div className="divider center-align">
                            <span className="outer-line"></span>
                            <span className="fa fa-envelope-open" aria-hidden="true"></span>
                            <span className="outer-line"></span>
                        </div>
                        {/* <!-- Divider Ends --> */}
                        <div className="row contact section-padding">
							{/* <!-- Contact Infos Starts --> */}
                            <div className="col s12 m5 l5 xl4 leftside">
								{/* <!-- Contacts Starts --> */}
                                <h6 className="font-weight-700 uppercase">Phone</h6>
                                <span className="font-weight-400 second-font"><i className="fa fa-phone"></i>
                                <a href="tel:9040046466 ">+91 9040046466 </a></span>
								<h6 className="font-weight-700 uppercase">Email</h6>
								<span className="font-weight-400 second-font email1"><i className="fa fa-envelope"></i><a href="mailto:kmohanachary201@gmail.com">  kmohanachary201@gmail.com </a></span>
								<h6 className="font-weight-700 uppercase">Skype</h6>
								<span className="font-weight-400 second-font"><i className="fa fa-skype"></i> <a href="skype:kmohanachary?add">kmohanachary</a></span>
								<h6 className="font-weight-700 uppercase">Address</h6>
								<span className="font-weight-400 second-font"><i className="fa fa-home"></i> Berhampur</span><br/>
								{/* <!-- Contacts Ends --> */}
								{/* <!-- Social Media Profiles Starts --> */}
                                <h6 className="font-weight-700 uppercase">Social Profiles</h6>
                                <div className="social">
                                    <ul className="list-inline social social-intro center-align p-none">
                                        <li className="facebook"><a href="https://www.facebook.com/kmohan.achary.5/"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a href="https://twitter.com/KMohanAchary1"><i className="fa fa-twitter"></i></a></li>
                                        <li className="google-plus"><a href="https://www.instagram.com/kmohanachary/"><i className="fa fa-instagram"></i></a></li>
                                        <li className="linkedin"><a href="https://www.linkedin.com/in/k-mohan-achary/"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
								{/* <!-- Social Media Profiles Ends --> */}
                            </div>
							{/* <!-- Contact Infos Ends --> */}
							{/* <!-- Contact Form Starts --> */}
                            <div className="col s12 m7 l7 xl8 rightside">
								<h6 className="uppercase m-none font-weight-700">Feel free to drop me a line</h6>
								<div className="row">
									<p className="col s12 m12 l12 xl10 second-font">
										If you have any suggestion, project or even you want to say Hello.. Please fill out the form below and I will reply you shortly.
									</p>
								</div>
                                <form className="contactform" method="post" action="#">
                                    {/* <!-- Name Field Starts --> */}
                                    <div className="input-field second-font">
                                        <i className="fa fa-user prefix"></i>
                                        <input id="name" name="name" type="text" className="validate" required/>
                                        <label className="font-weight-400"  >Your Name</label>
                                    </div>
                                    {/* <!-- Name Field Ends --> */}
                                    {/* <!-- Email Field Starts --> */}
                                    <div className="input-field second-font">
                                        <i className="fa fa-envelope prefix"></i>
                                        <input id="email" type="email" name="email" className="validate" required/>
                                        <label  >Your Email</label>
                                    </div>
                                    {/* <!-- Email Field Ends --> */}
                                    {/* <!-- Comment Textarea Starts --> */}
                                    <div className="input-field second-font">
                                        <i className="fa fa-comments prefix"></i>
                                        <textarea id="comment" name="comment" className="materialize-textarea" required></textarea>
                                        <label  >Your Comment</label>
                                    </div>
                                    {/* <!-- Comment Textarea Ends --> */}
									{/* <!-- Submit Form Button Starts --> */}
                                    <div className="col s12 m12 l9 xl8 submit-form">
                                        <button className="btn font-weight-700" type="submit" name="send">
											Send Message <i className="fa fa-send"></i>
										</button>
                                    </div>
                                    {/* <!-- Submit Form Button Ends --> */}
                                    <div className="col s12 m12 l8 xl8 form-message">
                                        <span className="output_message center-align font-weight-700 uppercase"></span>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- Contact Form Ends --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Expanded Contact Ends --> */}
                <img alt="close" src="assets/images/close-button.png" className="bl-icon-close" />
            </section>
            {/* <!-- Contact Section Ends --> */}
            {/* <!-- Portfolio Panel Items Starts --> */}
            <div className="bl-panel-items" id="bl-panel-work-items">
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-1">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <img className="responsive-img" src="assets/images/projects/project-1.jpg" alt="project" />
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Image Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Envato</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">php, html, css, javascript</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-2">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <div className="carousel carousel-slider">
                                <a className="carousel-item" href="#one!"><img className="responsive-img" src="assets/images/projects/project-2.jpg" alt="project" /></a>
                                <a className="carousel-item" href="#two!"><img className="responsive-img" src="assets/images/projects/project-1.jpg" alt="project" /></a>
                                <a className="carousel-item" href="#three!"><img className="responsive-img" src="assets/images/projects/project-3.jpg" alt="project" /></a>
                                <a className="carousel-item" href="#four!"><img className="responsive-img" src="assets/images/projects/project-4.jpg" alt="project" /></a>
                            </div>
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Slider Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Themeforest</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">php, html, css, javascript</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-3">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <div className="videocontainer">
                                <iframe className="youtube-video" src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" allowFullScreen></iframe>
                            </div>
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Youtube Video</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Photodune</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">Adobe After Effects, Adobe Audition</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-4">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <video id="video" className="responsive-video" controls poster="assets/images/projects/video/video-poster.png">
								<source src="assets/images/projects/video/video.mp4" type="video/mp4" />
							</video>
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Local Video</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Videohive</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">Adobe After Effects, Movie Maker</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-5">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <img src="assets/images/projects/project-5.jpg" alt="project" />
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Image Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Graphicriver</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">Adobe Photoshop, Gimp</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-6">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <img src="assets/images/projects/project-6.jpg" alt="project" />
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Image Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Activeden</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">Adobe Flash, Paint</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-7">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <img src="assets/images/projects/project-7.jpg" alt="project" />
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Image Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">3D Ocean</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">3DS Max, Adobe Photoshop</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-8">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <img src="assets/images/projects/project-8.jpg" alt="project" />
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Image Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Audiojungle</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">Adobe Audition, Adobe Premiere</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
				{/* <!-- Project Starts --> */}
                <div data-panel="panel-9">
                    <div className="row">
                        {/* <!-- Project Main Content Starts --> */}
                        <div className="col s12 l6 xl6 section-padding section-padding-right-none">
                            <img src="assets/images/projects/project-9.jpg" alt="project" />
                        </div>
                        {/* <!-- Project Main Content Ends --> */}
                        {/* <!-- Project Details Starts --> */}
                        <div className="col s12 l6 xl6 section-padding">
                            <h3 className="font-weight-700 uppercase">Image Project</h3>
                            <ul className="project-details second-font">
                                <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">Audiojungle</span></li>
                                <li><i className="fa fa-calendar-o"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">02/11/2017</span></li>
								<li><i className="fa fa-calendar-check-o"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">02/08/2018</span></li>
                                <li><i className="fa fa-cogs"></i> <span className="font-weight-700"> Used Technologies</span> : <span className="font-weight-400 uppercase">Adobe Audition, Adobe Premiere</span></li>
                            </ul>
                            <hr/>
                            <a href="#" className="waves-effect waves-light btn font-weight-700">Preview <i className="fa fa-external-link"></i></a>
                        </div>
                        {/* <!-- Project Details Ends --> */}
                    </div>
                </div>
				{/* <!-- Project Ends --> */}
                {/* <!-- Portfolio Navigation Starts --> */}
                <nav>
                    {/* <!-- Previous Work Icon Starts --> */}
                    <span className="control-button bl-previous-work"><i className="fa fa-angle-left"></i></span>
                    {/* <!-- Previous Work Icon Ends --> */}
                    {/* <!-- Close Work Icon Starts --> */}
					<img alt="close" src="assets/images/close-button.png" className="control-button bl-icon-close" />
                    {/* <!-- Close Work Icon Ends --> */}
                    {/* <!-- Next Work Icon Starts --> */}
                    <span className="control-button bl-next-work"><i className="fa fa-angle-right"></i></span>
                    {/* <!-- Previous Work Icon Ends --> */}
                </nav>
                {/* <!-- Portfolio Navigation Ends --> */}
            </div>
            {/* <!-- Portfolio Panel Items Ends --> */}
        </div>
    </div>
    {/* <!-- Wrapper Ends --> */}
    


    <Helmet>
    <script src="assets/js/jquery-2.2.4.min.js"></script>
    <script src="assets/js/jquery.animatedheadline.js"></script>
    <script src="assets/js/boxlayout.js"></script>
    <script src="assets/js/materialize.min.js"></script>
    <script src="assets/js/jquery.hoverdir.js"></script>
    <script src="assets/js/custom.js"></script>
 
    <script src="assets/js/styleswitcher.js"></script>
    </Helmet>
     
        
    </div>
  )
}

export default Home;