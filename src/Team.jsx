import React from 'react';
import './Team.css';


function Team() {
    return (
        <div>
            <h1 className='team-title'>Meet Our Team</h1>
            <div className='team-container' id="team-container">
                <a className="skip-link5" tabIndex="0" href="#team-container">
                    Skip to main content
                </a>
                {/* <h2 className='team-title'>Meet Our Team</h2> */}

                <div className="team-member">
                    <img
                        src="../image/m1.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>SangYun Han</p>
                    <p className='team-member__position'>CEO</p>
                    <p className='team-member__desc'>Han is the CEO at LearnML. Prior to coming to LearnML, he was a director at Google Brain, leading research teams working on robust, responsible, reliable and efficient ML and AI. In his career in ML, he has worked on nearly every aspect of machine learning, and has led both product and research teams including those on some of the most challenging business problems. Some of his well known work involves ML Technical Debt, ML Education, ML Robustness, production-critical ML, and ML for scientific applications such as protein design. </p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m2.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>Julia Elliott</p>
                    <p className='team-member__position'>COO</p>
                    <p className='team-member__desc'>Julia Elliott is LearnML Junction's COO, overseeing its Operations, Strategy, Marketing, Developer Relations, and Program Management functions. She holds a degree in electrical engineering from the University of Pennsylvania and a MBA from the University of North Carolina at Chapel Hill. Prior to LearnML Junction, she worked at IBM and Upwork and is skilled at building scalable operational solutions for technology products that provide customer solutions. She's passionate about making technology more inclusive and accessible to historically marginalized communities.</p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m3.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>Jeff Moser</p>
                    <p className='team-member__position'>Chief Architect</p>
                    <p className='team-member__desc'>Good software is a game of inches where polishing is very important. My main strategy is to invest a lot of blood, sweat, and tears into a product and then multiply its value by the number of its happy users.</p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m4.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>William Cukierski</p>
                    <p className='team-member__position'>Head of Competitions and Data Scientist</p>
                    <p className='team-member__desc'>Will Cukierski has a bachelor’s degree in physics from Cornell University and a Ph.D. in biomedical engineering from Rutgers, where he studied applications of machine learning to cancer research. He has published on graph theory, dimensionality reduction, clustering, and image analysis.</p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m5.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>Jerad Rose</p>
                    <p className='team-member__position'>Developer</p>
                    <p className='team-member__desc'>Jerad is a full-stack software engineer with a focus on building highly interactive web applications. Before jumping on board the LearnML train, she was an architect for Humana. She has a drive for building online communities, founding & running his own web community since 2002.</p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m6.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>Meghan O'Connell</p>
                    <p className='team-member__position'>Strategy and Operations</p>
                    <p className='team-member__desc'>Meghan graduated from Santa Clara University with a double bachelor's degree in Economics and Marketing. Prior to joining LearnML Junction, Meghan worked as the Manager of Professional Services for a boutique outsourcing firm, where she was responsible for scaling project management operations.</p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m7.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>Myles O'Neill</p>
                    <p className='team-member__position'>Designer</p>
                    <p className='team-member__desc'>Myles is passionate about solving complex problems using elegant designs. He holds a bachelor's degree in computer science and genetics from the Australian National University. Myles likes to create things in his spare time. He recently Kickstarted and published his own board game.</p>
                </div>

                <div className="team-member">
                    <img
                        src="../image/m8.jpg"
                        alt="member"
                        className="team-member__logo"
                    />
                    <p className='team-member__name'>Meg Risdal</p>
                    <p className='team-member__position'>Product Manager</p>
                    <p className='team-member__desc'>Meg holds Master's degrees in linguistics from UCLA and NC State University where she studied laboratory phonology and sociophonetics. Prior to LearnML Junction, she was a data scientist in market research and product manager at Stack Overflow. She's passionate about open technical communities.</p>
                </div>
            </div>








        </div>


    );
}

export default Team;
