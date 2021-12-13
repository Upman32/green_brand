import c from './Aboutus.module.css'
import Dmitry from '../Photos/data/Dmitry_Vachovski.png'
import Ellie from '../Photos/data/Ellie_Smith.png'
import Karaster from '../Photos/data/Karaster_Flore.png'
import google from '../Photos/data/google+.png'
import twitter from '../Photos/data/twitter.png'
import ball from '../Photos/data/ball.png'
import loop from '../Photos/data/loop.png'

const Aboutus = () => {
  let social = <div className={c.social}>
    <img src={google}  className={c.social_icon}/>
    <img src={ball}  className={c.social_icon} />
    <img src={twitter}  className={c.social_icon} />
    <img src={loop}  className={c.social_icon} />
  </div>
  return (
    <div className={c.About_us}>
      <div className={c.tag}>About Us</div>
      <div className={c.sentence}>Fir Sino Karok Shersfi nunololck sinterafa li derki zacko</div>
      <div className={c.profiles}>
        <div className={c.profile}>
          <div  className={c.avatar} >
            {social}
          </div>
          <div className={c.description}>
            <div className={c.name}>
              Paris Smith
            </div>
            <div className={c.profession}>
              Web Designer
            </div>
            <div className={c.desc}>
            Fir sino karok shersfi nunololck sinterafa li derki zacko
            </div>
          </div>
        </div>
        <div className={c.profile}>
        <div  className={`${c.avatar} ${c.avatar3}`} >
            {social}
          </div>
          <div className={c.description}>
            <div className={c.name}>
              Innokenti Koreev
            </div>
            <div className={c.profession}>
              Graphic Designer
            </div>
            <div className={c.desc}>
            Fir sino karok shersfi nunololck sinterafa li derki zacko
            </div>
          </div>
        </div>
        <div className={c.profile}>
        <div  className={`${c.avatar} ${c.avatar2}`} >
            {social}
          </div>
          <div className={c.description}>
            <div className={c.name}>
              Darma Tolk
            </div>
            <div className={c.profession}>
              Project Manager
            </div>
            <div className={c.desc}>
              Fir sino karok shersfi nunololck sinterafa li derki zacko
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Aboutus;
