import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faRss,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  instagram: faInstagram,
  twitter: faTwitter,
  facebook: faFacebook,
  rss: faRss,
  search: faSearch,
  menu: faBars,
};

export const iconPrint = (iconValue, hex = "#272727") => {
  let icon = icons[iconValue] || faQuestion;
  return <FontAwesomeIcon icon={icon} style={{ fill: hex, color: hex }} />;
};
