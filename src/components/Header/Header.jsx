import c from './Header.module.css'
import B from '../Photos/data/B.png'

const Header = () => {
return (
  <div className={c.header}>
<div className={c.Logo}>
<img src={B}/>
<div className={c.Logo_tags}>
  <div className={c.Logo_name}>BLA BLA</div>
  <div>One Page Flat Template</div>
  </div>
</div>
<div className={c.top_right_bar}>
<span className={c.element}>HOME</span>
<span className={c.element}>PORTFOLIO</span>
<span className={c.element}>ABOUT</span>
<span className={c.element}>CONTACT</span>
</div>
</div>
)
}

export default Header