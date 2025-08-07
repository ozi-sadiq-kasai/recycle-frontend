import './Works.css';
import bottle from '../../images/bottle.svg'
import Truck from '../../images/Truck.jpg'
import recycle from '../../images/recycle.jpg'

const Works = () => {
    return (
        <div className='works'>
            <h2>How We Work</h2>
            <ul className="works-step">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ul className='works-container'>
                <li>
                    <img src={bottle} alt="" className='work-image' />
                    <div className='works-item'>
                        <h3>Dispose of plastic waste.</h3>
                        <p>
                            To drop off plastic waste, you can visit our designated collection points or schedule a pickup through our website. We ensure that all collected plastic is handled responsibly.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={Truck} alt="" className='work-image' />
                    <div className='works-item'>
                        <h3>Plastic waste is picked up.</h3>
                        <p>
                            The plastic waste is picked up by recycling trucks and then it is transported to the recycling factory for processing.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={recycle} alt="" className='work-image' />
                    <div className='works-item'>
                        <h3>Plastic waste recycled.</h3>
                        <p>
                            The plastic waste is then recycled into new materials through various processes such as meeting, extrusion, and molding, creating usable products for different applications.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Works
