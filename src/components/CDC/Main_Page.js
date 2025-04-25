import React, { useContext } from 'react';
import './MainPage.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import CdcLogoText from '../../assets/png/cdc/CDC-Logo-Text-2024.png';
import ProblemSpace from '../../assets/png/cdc/CDC-Day-1-Onboarding-Overview.png';
import GanttChart from '../../assets/png/sony/GanttChart.png';
import CdsmModel from '../../assets/png/cdc/CDSM-Model.png';
import EcProRoles from '../../assets/png/cdc/ecpro-roles-workflow.png';
import OriginalDesign from '../../assets/png/cdc/OriginalDesign.png';
import Familiarity from '../../assets/png/cdc/Familiarity.jpeg'

import Persona1 from '../../assets/png/cdc/Non-Technical-Customer.png';
import Persona2 from '../../assets/png/cdc/Technical-Customer.png';

import TimelineCard from './TimelineCard';
import CdcSkills from './CdcSkills'; // Import CdcSkills
import { BorderTopRounded } from '@material-ui/icons';

// Define cdcTimeline with imported images
const cdcTimeline = [
  {
    id: 1,
    title: "Project Kickoff and Broad Research into Core User Group Data",
    description: " ",
    week: "Part 1",
    img: CdcLogoText,
  },
  {
    id: 2,
    title: "Design System and Branding Guidelines",
    description: " ",
    week: "Part 2",
    img: CdcLogoText,
  },
  {
    id: 3,
    title: "Timeline Trajectories, Customer Expectations, and User Testing.",
    description: " ",
    week: "Part 3",
    img: CdcLogoText,
  },
  {
    id: 4,
    title: "Low/High Fidelity Mockups and Interactive Prototypes",
    description: " ",
    week: "Part 4",
    img: CdcLogoText,
  },
  {
    id: 5,
    title: "Usability Testing, Design Iteration, and Stakeholder Reviews",
    description: " ",
    week: "Part 5",
    img: CdcLogoText,
  },
  {
    id: 6,
    title: "Design to Developer Handoffs. Ensuring WCAG and Accessibility Compliance.",
    description: " ",
    week: "Part 6",
    img: CdcLogoText,
  },
  {
    id: 7,
    title: "Post-Launch Evaluation, Continuous Improvements, and User Feedback Loop",
    description: " ",
    week: "Part 7",
    img: CdcLogoText,
  },
  
];

const stepImages = [
  Familiarity, // Step 1
  OriginalDesign, // Step 2
  EcProRoles, // Step 3
  EcProRoles, // Step 4
];

function MainPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>

        {/* About Section */}
        <div className="about" id="about" style={{ backgroundColor: theme.secondary, marginBottom: '-3px' }}>
        <div className="line-styling">
          <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
          <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
          <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
        </div>
        <div className="about-body" style={{ textAlign: "center" }}>
          <div className="about-description" style={{ backgroundColor: theme.secondary }}>
            <h2 style={{ color: theme.primary, textAlign: "left" }}>GDIT x CDC Case Study: Solving IT Challenges with Human-Centered Design</h2>
            <p style={{ color: theme.tertiary80 }}>
              It's an honor to assist the vital responsibilities of the CDC with GDIT. I was called upon due to my expertise in web development, design, and UX, focusing on Customer Success Journey Mapping and Usability Testing.
              I rapidly prototyped web solutions, conducted user research, and refined designs to align with business requirements.
              In a fast-paced agile environment, I collaborated across teams to enhance user experience and meet client needs.
            </p>
          </div>
          <div className="about-img">
                <img src={CdcLogoText} alt="CDC Logo" />
            </div>
        </div>
      </div>

      {/* Problem Space Section */}
      <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
        <div className="problem-body" style={{ textAlign: "center" }}>
          <div className="problem-img">
            <img src={ProblemSpace} alt="CDC-Day-1-Onboarding-Overview.png" />
          </div>
          <div className="about-description" style={{ backgroundColor: theme.secondary }}>
            <h2 style={{ color: theme.primary, textAlign: "right", fontSize: "32px" }}>Problem Space</h2>
            <p style={{ color: theme.tertiary80 }}>
              My team was tasked with building and maintaining a critical service for the CDC using the ServiceNow Platform.
              Our goal is to develop and implement a business application software solution as a Software as a Service (SaaS)
              that utilizes ITSM (IT Service Management) and CRM (Customer Relationship Management) tools intended to
              optimize workflow efficiency, improve data integration, and ensure scalability for all technological operations.
            </p>
          </div>
        </div>
      </div>

      {/* User Personas Section */}
      <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
        <div className="personas-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary,fontSize:'32px' }}>User Personas</h2>
            <p style={{ color: theme.tertiary80}}>
              The CDC has a vast user base, which would lead to an enormous collection of User Personas. To streamline showing what
              drove many of our development decisions, here are the 2 core User Personas.
            </p>
          </div>

          <div className="personas-img-row">
            <div className="persona">
              <img src={Persona1} alt="Persona 1 Overview" />
              <p className="persona-caption">
                <strong>Persona 1:</strong> Tech-Savvy, Technical Based Role, Needs to access a large amount of IT Items
              </p>
            </div>
            <div className="persona">
              <img src={Persona2} alt="Persona 2 Overview" />
              <p className="persona-caption">
                <strong>Persona 2:</strong> General User, Service Based Role, Needs to access a limited amount of IT Items
              </p>
            </div>
          </div>
        </div>
        <img className='RolesOverview' src={EcProRoles} alt="EC Pro Roles Overview" />
        <p style={{textAlign:'center'}}className="persona-caption">
          <strong>Platform Roles:</strong> The above personas then slot into these roles with various privileges that revolve around the content intended for their
          user journeys.
        </p> 
      </div>

{/* Journey Map Section */}
<div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
    <div className="journey-body" style={{ textAlign: "center" }}>
        <div className="about-description" style={{ backgroundColor: theme.secondary }}>
            <h2 style={{ color: theme.primary, textAlign: "right", fontSize: "32px" }}>Journey Map</h2>
            <p style={{ color: theme.tertiary80 }}>
                The Journey Map is designed to visualize the customer experience and track critical touchpoints across various stages of interaction with the ServiceNow Platform.
                This map highlights key challenges and opportunities that our team addresses to improve the overall user experience for the CDC's critical services.
            </p>
        </div>

        {/* Journey Steps */}
        <div className="journey-steps">

            {/* TEMPLATE FOR EACH STEP */}
            {[1, 2, 3, 4].map((step, idx) => (
                <div key={step} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "40px" }}>
                    
                    {/* LEFT CONTENT: TEXT */}
                    <div className="journey-step" style={{ flex: "1 1 40%" }}>
                        {step === 1 && (
                            <>
                                <h3>Step 1: Intuitiveness, Familiarity, and Recognition</h3>
                                <div className="journey-step-detail">
                                    <h4>1.1: Digital Solutions in Modern Society</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        Digital solutions through IT tools, Mobile Apps, and Websites are common practice in Modern Society.
                                        Our goal is to use ServiceNow components to build a system that flows naturally and intuitively.
                                    </p>
                                </div>
                                <div className="journey-step-detail">
                                    <h4>1.2: User Control and Instant Familiarity</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        The aim is for users to instantly feel in control when loading into our platform, providing a sense of familiarity from the start.
                                    </p>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h3>Step 2: Exploring Problem Solving Options</h3>
                                <div className="journey-step-detail">
                                    <h4>2.1: Understanding User Needs</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        Users come to our platform to solve a problem, and understanding the diversity of problem-solving approaches is crucial.
                                    </p>
                                </div>
                                <div className="journey-step-detail">
                                    <h4>2.2: Exploring Modern Solutions</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        It's up to the Designer to ensure the platform explores and implements the latest and greatest solutions.
                                    </p>
                                </div>
                                <div className="journey-step-detail">
                                    <h4>2.3: Empowering Users with Self-Service Tools</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        Equipping users with self-service tools, spotlighting popular site routes, and empowering human agents to assist users instantly when necessary.
                                    </p>
                                </div>
                                <div className="journey-step-detail">
                                    <h4>2.4: Implementing AI for Better Experience</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        Replicating human conversation with NLP-powered search/chatbots ensures a more intuitive and seamless experience for users.
                                    </p>
                                </div>
                                <div className="journey-step-detail">
                                    <h4>2.5: Ensuring Agents Get the Job Done when Needed</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        Most of the time a user simply wants to talk to a Human. If a problem cannot be solved with the approaches above, an Agent solution
                                        will be prompted to the user when all other tools cannot end their troubleshooting process. 
                                    </p>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h3>Step 3: Data Driven Improvements through Lean and Agile UX</h3>
                                <div className="journey-step-detail">
                                    <h4>3.1: Continuous Feedback Loops</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        We prioritize short iteration cycles with regular user feedback to guide design improvements. This lean approach helps identify pain points early and adapt quickly to user needs.
                                    </p>
                                </div>
                                <div className="journey-step-detail">
                                    <h4>3.2: Analytics-Informed Decisions</h4>
                                    <p style={{ color: theme.tertiary80 }}>
                                        Leveraging usage analytics, heatmaps, and behavior tracking enables the design team to make data-informed decisions. These insights are essential to evolving the platform in ways that improve usability and performance.
                                    </p>
                                </div>
                            </>
                        )}


                        {step === 4 && (
                            <>
                                <h3>Step 4: Trust and Reliability</h3>
                                <div className="journey-step-detail">
                                    <p style={{ color: theme.tertiary80 }}>
                                    Building trust with users means delivering reliable, secure, and transparent digital services. Our team emphasizes clear communication, accountability, and system dependability to ensure users feel confident in their interactions.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    {/* RIGHT IMAGE */}
                    <div style={{ flex: "1 1 60%", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "20px", width: '40vw',height: "100%" }}>
                      <img src={stepImages[idx]} alt={`Step ${step}`} style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                  </div>
            ))}
        </div>
    </div>
</div>






      {/* Timeline Section */}
      <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
        <div className="education-body">
          <div className="education-description">
            <h1 style={{ color: theme.primary, fontSize:'32px' }}>Timeline</h1>
            <div className="timeline-section">
              {cdcTimeline.map((item) => (
                <div key={item.id} className="timeline-card">
                  <TimelineCard
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
            <img id="CdcImage" src={CdsmModel} style={{ borderStyle: 'solid', borderRadius: '15px' }} />
            <img id="CdcImage" src={CdsmModel} style={{ borderStyle: 'solid', borderRadius: '15px' }} />
            <img id="CdcImage" src={CdsmModel} style={{ borderStyle: 'solid', borderRadius: '15px' }} />
            <img id="CdcImage" src={CdsmModel} style={{ borderStyle: 'solid', borderRadius: '15px' }} />
          </div>
        </div>
      </div>

      {/* Expertise in Action Section */}
      <div className="about-description" style={{ backgroundColor: theme.secondary, padding: "2rem"}}>
        <h1 style={{ alignSelf:'center',color: theme.primary, fontFamily: 'Poppins, sans-serif'}}>Expertise in Action</h1>
      </div>
      <CdcSkills /> {/* Add this component wherever it makes sense in the layout */}
    </div>
  );
}

export default MainPage;
