import React, { useContext } from 'react';
import CdsmModel from '../../assets/png/cdc/CDSM-Model.png';
import RailwayInforgraphic from '../../assets/png/cdc/Railway-infographic.png'
import { ThemeContext } from '../../contexts/ThemeContext';
import './MainPage.scss';
import CdcTimelineCard from './CdcTimelineCard';
import { cdcTimeline } from '../../data/cdcTimeline';

function CdcTimeline() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="cdc-education" id="resume" style={{ backgroundColor: theme.secondary }}>
      <div className="cdc-education-body">
        <div className="cdc-education-description">
          <h1 style={{ color: theme.primary, fontSize: '32px' }}>Timeline</h1>
          <div className="cdc-timeline-cards">
            {cdcTimeline.map((item) => (
              <div key={item.id} className="cdc-timeline-card">
                <CdcTimelineCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  week={item.week}
                  img={item.img}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="timeline-iframe">
            <img id="CdcImage" src={CdsmModel} style={{ borderStyle: 'solid', borderRadius: '15px' }} alt="Cdc Model" />
            <img id="CdcImage" src={RailwayInforgraphic} style={{ borderStyle: 'solid', borderRadius: '15px' }} alt="Cdc Model" />
        </div>
      </div>
    </div>
  );
}

export default CdcTimeline;
