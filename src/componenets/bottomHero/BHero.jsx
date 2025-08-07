import './BHero.css'
import bottle from '../../images/bottle-moss.png'


const BHero = () => {
  return (
    <div className='bHero'>
        <img src={bottle} alt="" className='bHero-image'/>
        <div className="bHero-content">
          <h3>Journey Towards a Greener Earth</h3>
          <p>In the journey toward a greener Earth, every choice to recycle, repurpose, and reduce waste becomes a powerful step toward transformation. It’s a pledge to care for our planet where each recycled item not only conserves valuable resources but also helps maintain the fragile balance of our ecosystems. By embracing sustainable practices, we plant the seeds for a future where lush forests thrive, waters remain clean, and communities grow strong and vibrant in harmony with nature.</p>
        </div>
    </div>
  )
}

export default BHero
