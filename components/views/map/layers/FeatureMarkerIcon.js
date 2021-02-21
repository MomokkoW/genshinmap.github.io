import L from 'leaflet';

import { importFromContext } from 'components/Util';

const iconsContext = require.context('images/icons', true, /\.(png|webp|svg)/);
export const createMapIcon = ({
  key,
  marker = false,
  clusterIcon = '',
  done = false,
  ext = 'png',
  ...options
}) => {
  if (marker) {
    // Use the marker image.
    const iconUrl = importFromContext(iconsContext, `./filter/${key}.${ext}`);

    // This part is a little complex.
    // As a neat hack, the marker"s shadow is offset and used to implement the frame.
    // That way, the marker can be a separate icon from the image representing the item.
    const shadowUrl = importFromContext(
      iconsContext,
      `./marker/marker_${done ? 'green' : 'white'}_bg.svg`
    );

    const iconHTML = `<div class='map-marker-container'>
      <img style='width: 40px; height: 40px;' class='map-marker-shadow' alt="" src="${shadowUrl}"/>
      <img style='width: 24.25px; height: 24.25px;' class='map-marker-img' alt="" src='${iconUrl}'/>
    </div>`;

    return L.divIcon({
      className: `map-marker-${key}`,
      html: iconHTML,
      clusterIconUrl: iconUrl,
      iconSize: [40, 40], // size of the icon,
      iconAnchor: [20, 40], // point of the icon which will correspond to marker"s location,
      popupAnchor: [0, -35], // point from which the popup should open relative to the iconAnchor,
      ...options,
    });
  }

  // Else, don't use the marker image.
  const iconUrl = importFromContext(iconsContext, `./map/${key}.${ext}`);

  // Handle the niche case where cluster = true and marker = false.
  const clusterIconUrl = importFromContext(iconsContext, `./filter/${clusterIcon}.${ext}`);

  return L.icon({
    className: `map-marker-${key}`,
    iconUrl,
    clusterIconUrl,
    shadowUrl: '',
    ...options,
  });
};
