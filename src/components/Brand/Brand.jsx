import c from './Brand.module.css'
import pointer from '../Photos/data/pointer.png'

const Brand = () => {
  return (
    <div className={c.Brand}>
      <div className={c.Tag}>We Build <span className={c.great}>Brand</span></div>
      <div className={c.Text}>
        <div> Derom ni deromu haetr soki fi deli sharie, dero me daki goteki reboru siste dire fare tormen shire </div>
        <div> nifare doshi mento ri fatiki miguru larome dakoru fira</div>
      </div>
      <span className={c.Button_learn}>
        Learn More
      </span>
      <img className={c.pointer} src={pointer} />
    </div>
  );
}

export default Brand;
