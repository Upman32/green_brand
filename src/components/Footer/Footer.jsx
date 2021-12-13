import c from './Footer.module.css'
import icon from '../Photos/data/54.png'

const Footer = () => {
  return (
<div className={c.Footer}>
  <div className={c.copyright}>© Copyright 2016 Bla Bla Studio | One Page Flat Templater</div>
  <div className={c.icon}><img src={icon}/></div>
  </div>);
}

export default Footer;
