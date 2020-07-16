import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faChalkboardTeacher, faLock, faMusic, faMapMarkerAlt, faPhoneAlt,  faEnvelope, faHandHoldingHeart, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Routes from './routes';

library.add(fab, faGraduationCap, faArrowAltCircleRight, faChalkboardTeacher,faLock, faMusic,faMapMarkerAlt, faPhoneAlt, faEnvelope, faHandHoldingHeart, faChevronLeft, faChevronRight);

function App() {
  return (
    <Routes/>
  );
}

export default App;
