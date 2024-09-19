import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {
    const slider = useRef();
    let translateX = 0;


    const slideForward = () => {
        if (translateX > -50) {
            translateX = translateX - 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`

    }
    const slideBackward = () => {
        if (translateX < 0) {
            translateX = translateX + 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`

    }
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Jackson</h3>
                                    <span>Microsoft,USA</span>
                                </div>
                            </div>
                            <p>"Attending Vedanta Engineering University has been one of the best decisions of my life. The faculty's dedication to my success and the hands-on learning opportunities have truly transformed my understanding of the subject. I've grown not only academically but also personally, thanks to the vibrant campus life and support from my peers. [University Name] has set me on a path to a bright future!"
                                — JACKSON M., Computer Science Major</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Krishna</h3>
                                    <span>Google,INDIA</span>
                                </div>
                            </div>
                            <p>"Choosing Vedanta Engineering University has been a game-changer for me. The emphasis on practical experience and the innovative teaching methods have significantly enhanced my skills. The university's dynamic environment and strong network have opened doors for numerous opportunities. I’m grateful for the comprehensive education and the supportive community that have been pivotal in my professional development.— KRISHNA S., Computer Science Major"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>PERRY</h3>
                                    <span>Dell,UK</span>
                                </div>
                            </div>
                            <p>"Enrolling at Vedanta Engineering University was a transformative experience. The engaging coursework, combined with the dedication of the faculty, has provided me with an unparalleled education. The supportive community and extensive resources available have empowered me to excel both academically and personally. I am confident that the skills and knowledge I have gained here will serve me well in the future!— PERRY G., Computer Science Major"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>SMITH D.</h3>
                                    <span>Tech Innovators, SOUTH AFRICA</span>
                                </div>
                            </div>
                            <p>"My time at Vedanta Engineering University has been incredibly rewarding. The combination of hands-on learning and academic rigor has deeply enriched my understanding of computer science. The university’s vibrant campus life and the unwavering support from the faculty and peers have made my journey here memorable and impactful. I feel well-prepared for the challenges ahead in my career!"— SMITH N., Computer Science Major</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
