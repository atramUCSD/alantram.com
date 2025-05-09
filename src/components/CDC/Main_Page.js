import React, { useContext } from 'react';
import './MainPage.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import CdcLogoText from '../../assets/png/cdc/CDC-Logo-Text-2024.png';
import ProblemSpace from '../../assets/png/cdc/CDC-Day-1-Onboarding-Overview.png';
import GanttChart from '../../assets/png/sony/GanttChart.png';
import CdsmModel from '../../assets/png/cdc/CDSM-Model.png';
import EcProRoles from '../../assets/png/cdc/ecpro-roles-workflow.png';
import OriginalDesign from '../../assets/png/cdc/OriginalDesign.png';
import Familiarity from '../../assets/png/cdc/Familiarity.jpeg';
import DigitalWorkflows from '../../assets/png/cdc/DigitalWorkflows.png';
import FeedbackAnalytics from '../../assets/png/cdc/fdbck-analytics-response.png';

import Persona1 from '../../assets/png/cdc/Non-Technical-Customer.png';
import Persona2 from '../../assets/png/cdc/Technical-Customer.png';

import DeliveryCadence from '../../assets/png/cdc/Delivery-Meeting-Cadence.png'
import ImplementationSchedule from '../../assets/png/cdc/Implementation Schedule.png'
import DataDrivenCX from '../../assets/png/cdc/Data Driven Approach - CX.png'
import EmbeddedSurvey from '../../assets/png/cdc/Embedded-Survey.png'
import GartnerSurvey from '../../assets/png/cdc/GartnerSurvey.png'
import FocusGroup from '../../assets/png/cdc/FocusGroup.png'

import CdcTimeline from './CdcTimeline'; // adjust path as needed
import CdcTimelineCard from './CdcTimelineCard';
import CdcSkills from './CdcSkills'; // Import CdcSkills
import { BorderTopRounded } from '@material-ui/icons';

const stepImages = [
  Familiarity, // Step 1
  OriginalDesign, // Step 2
  FeedbackAnalytics, // Step 3
  DigitalWorkflows, // Step 4
];

const stepImages2 = [
  ImplementationSchedule, // Step 1
  GartnerSurvey, // Step 2
  FocusGroup, // Step 3
  DataDrivenCX, // Step 4
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

<CdcTimeline />

{/* User Research */}
  <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
  <div className="journey-body" style={{ textAlign: "center" }}>
    <div className="about-description" style={{ backgroundColor: theme.secondary }}>
      <h2 style={{ color: theme.primary, textAlign: "right", fontSize: "32px" }}>User Experience Insights: From Research to Optimization</h2>
      <p style={{ color: theme.tertiary80 }}>
        Our user research journey includes critical stages such as Surveys, Testing, and Data Analytics to continuously improve the user experience across the CDC platform.
      </p>
    </div>

    {/* Journey Steps */}
    <div className="journey-steps">
      {[1, 2, 3, 4].map((step, idx) => (
        <div
          key={step}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {/* LEFT IMAGE */}
          <div
            style={{
              flex: "1 1 60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "20px",
              width: "40vw",
              height: "100%",
            }}
          >
            <img
              src={stepImages2[idx]}
              alt={`Step ${step}`}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="journey-step" style={{ flex: "1 1 40%" }}>
            {step === 1 && (
              <>
                <h3>Step 1: Building </h3>
                <div className="journey-step-detail">
                  <h4>1.1: Know the Mission and the Needs Of Your Users</h4>
                  <p style={{ color: theme.tertiary80 }}>
                    Before doing anything, I ensure that I fully understand what I was brought on to do. Understanding the goals of my myself, my team, my customers, and any who could potentially
                    interact with the product.
                  </p>
                </div>
                <div className="journey-step-detail">
                  <h4>1.2: Learn All You Can From What's Existed and Build On It </h4>
                  <p style={{ color: theme.tertiary80 }}>
                  Design as a concept builds on the success and failures of past trials. Going into this project, I reached out to any key personnel and accessed content
                  to build a foundtation that'll iterate on the identity the stakeholders have envisioned. 
                  </p>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3>Step 2: User Metrics, Data Collection Means, and Utilizing ServiceNow Capabilities</h3>
                <div className="journey-step-detail">
                  <h4>2.1: Engaging with Users for Insights</h4>
                  <p style={{ color: theme.tertiary80 }}>
                    Equipped with ServiceNow, we looked to create survey opportunities within our web applications that will both be seamlessly integrated into the user experience
                    and further our means of understanding user needs.
                  </p>
                </div>
                <div className="journey-step-detail">
                  <h4>2.2: User Behavior Analytics</h4>
                  <p style={{ color: theme.tertiary80 }}>
                  Going beyond surveys, with implementation of Employee Center, we've systematically stood up User Behavior Analytics
                  that'll allow for data collection of time spent on an item, clicking zones, frequency of content visit, etc.
                  </p>
                </div>
                <div className="journey-step-detail">
                  <h4>2.3: Analyzing Survey Responses</h4>
                  <p style={{ color: theme.tertiary80 }}>
                    Through routine meetings with key personnel and owners; reviewed response trends, segmented user groups, and identified recurring feedback themes to inform design changes.
                  </p>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3>Step 3: User Testing</h3>
                <div className="journey-step-detail">
                  <h4>3.1: Usability Test Planning</h4>
                  <p style={{ color: theme.tertiary80 }}>
                    Define tasks, scenarios, and success metrics for each usability session to test critical workflows.
                  </p>
                </div>
                <div className="journey-step-detail">
                  <h4>3.2: Capturing User Behavior</h4>
                  <p style={{ color: theme.tertiary80 }}>
                    Observe how users interact with prototypes or live systems to uncover confusion, friction, or satisfaction.
                  </p>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h3>Step 4: Metrics and Optimization</h3>
                <div className="journey-step-detail">
                  <p style={{ color: theme.tertiary80 }}>
                    Use analytics, KPIs, and success tracking to evaluate design impact, refine experiences, and drive continuous improvement.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
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
