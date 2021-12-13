import Mapper, { CustomTemplate } from '../Map';
import c from './Contact.module.css'


const Contact = () => {
  return (
      <div className={c.Contacts}>
        <div className={c.tag}>Contact us</div>
        <div className={c.fraze}>Lafte riro, sini terfa minine tadeo tyor</div>
        <div className={c.two_block}>
          <div className={c.inputer}>
            <div className={c.login}>
              <div className={c.enter}><input placeholder={'Your login'} className={c.letters} /></div>
              <div className={c.enter}><input placeholder={'Your email'} className={c.letters} /></div>
            </div>
            <div className={c.messagere}><textarea placeholder={'Your message'} className={c.textarea} /></div>
            <div className={c.submit_position}><span className={c.submit_button}>SUMBIT</span></div>
          </div>
          <div className={c.map}>
    <Mapper/>
          </div>
        </div>
      </div>
  );
}

export default  Contact;
