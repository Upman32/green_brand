import { useState } from 'react'
import c from './Portfolio.module.css'



const Portfolio = ({initialStateicons, filtration}) => {
  let [filteredicons, setarrayIcons] = useState(initialStateicons.icons)
  const handlefilter = (e) => {
    setarrayIcons((filtration(e)))
    console.log(filteredicons)}
  const icons = filteredicons.map((icon) =>
  <div className={c.icon}><img className={c.menu} src={icon.picture} /></div>)
  const filters = initialStateicons.filters.map((text) => <button value={text}
  onClick={handlefilter} className={c.Filter}>{text}</button>)
  return (
    <div className={c.Portfolio}>
      <div className={c.Theme}>Portfolio</div>
      <div className={c.sentence}>Coreva nan keru sini shira fio maraku remo deva perok regadse.</div>
      <div className={c.bar}>
        {filters}
      </div>
      <div className={c.menus}>
        {icons}
      </div>
    </div>
  );
}

export default Portfolio;
