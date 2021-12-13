
import Camera from './Photos/data/camera.png'
import Settings from './Photos/data/settings.png'
import Composs from './Photos/data/composs.png'
import Telephone from './Photos/data/telephone.png'
import Market from './Photos/data/market.png'
import Music from './Photos/data/music.png'



export const initialStateicons = {
  icons: [
    { id: 0, picture: Camera, sorter: 'WEB DESIGN' },
    { id: 1, picture: Music,  sorter:'WEB DESIGN'},
    { id: 2, picture: Composs, sorter:'FLAT DESIGN' },
    { id: 3, picture: Settings, sorter:'WEB DESIGN' },
    { id: 4, picture: Market,  sorter:'GRAPHIC DESIGN'},
    { id: 5, picture: Telephone, sorter:'FLAT DESIGN'},
    { id: 6, picture: Settings, sorter:'GRAPHIC DESIGN' },
    { id: 7, picture: Music,  sorter:'FLAT DESIGN'},
  ] ,
  filters: [
    'ALL', 'WEB DESIGN', 'GRAPHIC DESIGN', 'FLAT DESIGN'
  ],
}
export const filtration = (e) => {
 let filteredicons=[]
  console.log(e.target.value)
  console.log(initialStateicons.icons)
if(e.target.value==='ALL')
{filteredicons =initialStateicons.icons} else 
{filteredicons =initialStateicons.icons.filter(icon => icon.sorter===e.target.value)}
console.log(filteredicons)
  return filteredicons}
