import React, { useContext } from 'react';
import CdsmModel from '../../assets/png/cdc/CDSM-Model.png';
import RailwayInforgraphic from '../../assets/png/cdc/Railway-infographic.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import './MainPage.scss';
import CdcTimelineCard from './CdcTimelineCard';
import { cdcTimeline } from '../../data/cdcTimeline';
import ECProV5 from '../../assets/png/cdc/ECPro-V5-Timeline.png';

function CdcTimeline() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="cdc-education"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
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

        <div
          className="timeline-iframe"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginTop: '2rem',
          }}
        >
          <img
            id="CdcImage"
            src={CdsmModel}
            alt="Cdc Model"
            style={{
              borderStyle: 'solid',
              borderRadius: '15px',
              maxWidth: '90%',
              height: 'auto',
            }}
          />
          <img
            id="CdcImage"
            src={ECProV5}
            alt="ECPro V5 Timeline"
            style={{
              borderStyle: 'solid',
              borderRadius: '15px',
              maxWidth: '90%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CdcTimeline;
