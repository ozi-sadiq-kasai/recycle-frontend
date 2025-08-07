import './About.css';
import { TbBottle } from "react-icons/tb";
import { SiBoxysvg } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";

const About = () => {
    return (
        <div className='about'>
            <h2>What We Do</h2>
            <ul className='about-list'>
                <li className='about-list-item'>
                    <div className='about-list-item-content'>
                        <TbBottle size={37} className='about-icon'/>
                        <p>EcoSip organises and conducts community cleanup, collects discarded plastic from local areas.</p>
                    </div>
                </li>
                <li className='about-list-item'>
                    <div className='about-list-item-content'>
                        <SiBoxysvg size={37} className='about-icon' />
                        <p>
                            Utilizing the collected plastic, EcoSip creates eco-friendly products like bags, bottles, and more.
                        </p>
                    </div>
                </li>
                <li className='about-list-item'>
                    <div className='about-list-item-content'>
                            <GiArchiveResearch size={37} className='about-icon'/>
                        <p>EcoSip invests in research and development to discover innovative ways to recycle and repurpose plastic waste.</p>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default About
