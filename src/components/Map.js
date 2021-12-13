import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Mapper = () => (
  <YMaps>
      <Map
      defaultState={{ center: [55.797149094700366, 37.69807865874827],
       zoom: 13 }} >
      <Placemark  
       geometry={[55.797149094700366, 37.69807865874827]} />
      </Map>
  </YMaps>
);

export default Mapper 