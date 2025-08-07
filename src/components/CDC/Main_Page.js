import React, { useContext } from "react";
import "./MainPage.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

import GditxCDC from "../../assets/png/cdc/GDITxCDC.jpg";
import CdcLogoText from "../../assets/png/cdc/CDC-Logo-Text-2024.png";
import ProblemSpace from "../../assets/png/cdc/CDC-Day-1-Onboarding-Overview.png";
import GanttChart from "../../assets/png/sony/GanttChart.png";
import CdsmModel from "../../assets/png/cdc/CDSM-Model.png";
import EcProRoles from "../../assets/png/cdc/ecpro-roles-workflow.png";
import OriginalDesign from "../../assets/png/cdc/OriginalDesign.png";
import Familiarity from "../../assets/png/cdc/Familiarity.jpeg";
import DigitalWorkflows from "../../assets/png/cdc/DigitalWorkflows.png";
import FeedbackAnalytics from "../../assets/png/cdc/fdbck-analytics-response.png";

import Persona1 from "../../assets/png/cdc/Non-Technical-Customer.png";
import Persona2 from "../../assets/png/cdc/Technical-Customer.png";

import DeliveryCadence from "../../assets/png/cdc/Delivery-Meeting-Cadence.png";
import ImplementationSchedule from "../../assets/png/cdc/Implementation Schedule.png";
import DataDrivenCX from "../../assets/png/cdc/Data Driven Approach - CX.png";
import EmbeddedSurvey from "../../assets/png/cdc/Embedded-Survey.png";
import GartnerSurvey from "../../assets/png/cdc/GartnerSurvey.png";
import FocusGroup from "../../assets/png/cdc/FocusGroup.png";

import CdcTimeline from "./CdcTimeline";
import CdcTimelineCard from "./CdcTimelineCard";
import CdcSkills from "./CdcSkills";
import { BorderTopRounded } from "@material-ui/icons";

import KareemV2 from "../../assets/png/cdc/Kareem-V2.png";
import KareemV3 from "../../assets/png/cdc/Kareem-V3.png";
import ServiceDesk2023 from "../../assets/png/cdc/ServiceDesk-2023-2024.png";
import ECProDraft2024 from "../../assets/png/cdc/ECPro-Draft-2024.png";
import ECProV5GoLive from "../../assets/png/cdc/ECProV5-GoLive.png";

import CdcImageSlider from "./CdcImageSlider";
import { SliderData } from "./CdcSliderData";

import Dashboard1 from "../../assets/png/cdc/Dashboard-1.png";
import Dashboard4 from "../../assets/png/cdc/Dashboard-4.png";
import Dashboard6 from "../../assets/png/cdc/Dashboard-6.png";
import Dashboard7 from "../../assets/png/cdc/Dashboard-7.png";
import Dashboard8 from '../../assets/png/cdc/Dashboard-8.png';

const stepImages = [
  Familiarity,
  OriginalDesign,
  FeedbackAnalytics,
  DigitalWorkflows,
];
const stepImages2 = [
  ImplementationSchedule,
  GartnerSurvey,
  FocusGroup,
  DataDrivenCX,
];
const stepImages3 = [
  OriginalDesign,
  KareemV2,
  KareemV3,
  ServiceDesk2023,
  ECProDraft2024,
  ECProV5GoLive,
];

const stepImages4 = [Dashboard8, Dashboard4, Dashboard6, Dashboard7];

function MainPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary, marginBottom: "-3px" }}
      >
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body" style={{ textAlign: "center" }}>
          <div
            className="about-description"
            style={{ backgroundColor: theme.secondary }}
          >
            <h2
              style={{
                color: theme.primary,
                textAlign: "left",
                fontSize: "2.5rem",
              }}
            >
              GDIT ServiceNow Implementation Case Study: Solving IT Challenges
              with Human-Centered Design
            </h2>
            <p style={{ color: theme.tertiary80 }}>
              I was called upon due to my expertise in web development, design,
              and UX, focusing on Customer Success Journey Mapping and Usability
              Testing. I rapidly prototyped web solutions, conducted user
              research, and refined designs to align with business requirements.
              In a fast-paced agile environment, I collaborated across teams to
              enhance user experience and meet client needs.
            </p>
          </div>
          <div className="about-img">
            <img src={GditxCDC} style={{ width: "42vw" }} alt="CDC Logo" />
          </div>
        </div>
      </div>
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="problem-body" style={{ textAlign: "center" }}>
          <div className="problem-img">
            <img src={ProblemSpace} alt="CDC-Day-1-Onboarding-Overview.png" />
          </div>
          <div
            className="about-description"
            style={{ backgroundColor: theme.secondary }}
          >
            <h2
              style={{
                color: theme.primary,
                textAlign: "right",
                fontSize: "32px",
              }}
            >
              Problem Space
            </h2>
            <p style={{ color: theme.tertiary80 }}>
              My team was tasked with building and maintaining a critical
              service for our client using the ServiceNow Platform. Our goal is
              to develop and implement a business application software solution
              as a Software as a Service (SaaS) that utilizes ITSM (IT Service
              Management) and CRM (Customer Relationship Management) tools
              intended to optimize workflow efficiency, improve data
              integration, and ensure scalability for all technological
              operations.
            </p>
          </div>
        </div>
      </div>
      <CdcTimeline />
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="personas-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary, fontSize: "32px" }}>
              User Personas
            </h2>
            <p style={{ color: theme.tertiary80 }}>
              Our client has a vast user base, which would lead to an enormous
              collection of User Personas. To streamline showing what drove many
              of our development decisions, here are the 2 core User Personas.
            </p>
          </div>
          <div className="personas-img-row">
            <div className="persona">
              <img src={Persona1} alt="Persona 1 Overview" />
              <p className="persona-caption">
                <strong>Persona 1:</strong> Tech-Savvy, Technical Based Role,
                Needs to access a large amount of IT Items
              </p>
            </div>
            <div className="persona">
              <img src={Persona2} alt="Persona 2 Overview" />
              <p className="persona-caption">
                <strong>Persona 2:</strong> General User, Service Based Role,
                Needs to access a limited amount of IT Items
              </p>
            </div>
          </div>
        </div>
        <img
          className="RolesOverview"
          src={EcProRoles}
          alt="EC Pro Roles Overview"
        />
        <p style={{ textAlign: "center" }} className="persona-caption">
          <strong>Platform Roles:</strong> The above personas then slot into
          these roles with various privileges that revolve around the content
          intended for their user journeys.
        </p>
      </div>
      {/* User Research */}
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="journey-body" style={{ textAlign: "center" }}>
          <div
            className="about-description"
            style={{ backgroundColor: theme.secondary }}
          >
            <h2
              style={{
                color: theme.primary,
                textAlign: "right",
                fontSize: "32px",
              }}
            >
              User Experience Insights: From Research to Optimization
            </h2>
            <p style={{ color: theme.tertiary80 }}>
              Our user research journey includes critical stages such as
              Surveys, Testing, and Data Analytics to continuously improve the
              user experience across the CDC platform.
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
                    flex: "1 1 50%",
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
                <div className="journey-step" style={{ flex: "1 1 50%" }}>
                  {step === 1 && (
                    <>
                      <h3>Step 1: Building </h3>
                      <div className="journey-step-detail">
                        <h4>
                          1.1: Know the Mission and the Needs Of Your Users
                        </h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Before doing anything, I ensure that I fully
                          understand what I was brought on to do. Understanding
                          the goals of my myself, my team, my customers, and any
                          who could potentially interact with the product.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>
                          1.2: Learn All You Can From What's Existed and Build
                          On It{" "}
                        </h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Design as a concept builds on the success and failures
                          of past trials. Going into this project, I reached out
                          to any key personnel and accessed content to build a
                          foundtation that'll iterate on the identity the
                          stakeholders have envisioned.
                        </p>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h3>
                        Step 2: User Metrics, Data Collection Means, and
                        Utilizing ServiceNow Capabilities
                      </h3>
                      <div className="journey-step-detail">
                        <h4>2.1: Engaging with Users for Insights</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Equipped with ServiceNow, we looked to create survey
                          opportunities within our web applications that will
                          both be seamlessly integrated into the user experience
                          and further our means of understanding user needs.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>2.2: User Behavior Analytics</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Going beyond surveys, with implementation of Employee
                          Center, we've systematically stood up User Behavior
                          Analytics that'll allow for data collection of time
                          spent on an item, clicking zones, frequency of content
                          visit, etc.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>2.3: Analyzing Survey Responses</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Through routine meetings with key personnel and
                          owners; reviewed response trends, segmented user
                          groups, and identified recurring feedback themes to
                          inform design changes.
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
                          Define tasks, scenarios, and success metrics for each
                          usability session to test critical workflows.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>3.2: Capturing User Behavior</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Observe how users interact with prototypes or live
                          systems to uncover confusion, friction, or
                          satisfaction.
                        </p>
                      </div>
                    </>
                  )}

                  {step === 4 && (
                    <>
                      <h3>Step 4: Metrics and Optimization</h3>
                      <div className="journey-step-detail">
                        <p style={{ color: theme.tertiary80 }}>
                          User metrics and success tracking to fuel data driven
                          components such as Search, AI, Filters, and Workflows.
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
      <div
        className="about-description"
        style={{ backgroundColor: theme.secondary, padding: "2rem" }}
      >
        <h1
          style={{
            alignSelf: "center",
            color: theme.primary,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Expertise in Action
        </h1>
      </div>
      <CdcSkills />{" "}
      {/* Add this component wherever it makes sense in the layout */}
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="journey-body" style={{ textAlign: "center" }}>
          <div
            className="about-description"
            style={{ backgroundColor: theme.secondary }}
          >
            <h2
              style={{
                color: theme.primary,
                textAlign: "right",
                fontSize: "32px",
              }}
            >
              From Interface to Infrastructure: Advancing Design with UX and
              Accessibility
            </h2>
            <p style={{ color: theme.tertiary80 }}>
              Through an Agile and Lean UX approach, the design has evolved
              significantly from its original state over the past three years.
              Leveraging the full suite of modern ServiceNow tools, each
              iteration has improved accessibility, responsiveness across
              devices, and alignment with the customer’s vision—translating
              complex needs into clear, intuitive experiences.
            </p>
          </div>
          <div className="journey-steps">
            {[1, 2, 3, 4, 5, 6].map((step, idx) => (
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
                <div className="journey-step" style={{ flex: "1 1 30%" }}>
                  {step === 1 && (
                    <>
                      <h3>Original Design and What I Was Tasked to Do</h3>
                      <div className="journey-step-detail">
                        <h4>
                          Journey to modernizing IT Services and Operations
                        </h4>
                        <p style={{ color: theme.tertiary80 }}>
                          While this instance of the ServiceDesk works for a
                          small group of trained or familiar users, our clients
                          aim to scale their services and adopt modern web
                          capabilities—such as Virtual Agent integration and a
                          more intuitive, dynamic site experience.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>
                          Building a Design System off Existing Components and
                          Assets
                        </h4>
                        <p style={{ color: theme.tertiary80 }}>
                          I was tasked with developing a unified design system
                          that could scale. Starting with existing ServiceNow
                          components and legacy assets, I established reusable
                          patterns, ensured WCAG accessibility compliance, and
                          introduced visual consistency across pages—laying the
                          foundation for a future-proof, maintainable interface.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h3>Enhancing Existing Functionalities</h3>
                      <div className="journey-step-detail">
                        <h4>Feeling Out Stakeholder Comfort with Change</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Gaining a clear understanding of what the platform
                          currently offers—and what it aims to achieve—was
                          essential in determining the right pace for
                          introducing change. Striking this balance helped
                          maintain stakeholder trust while avoiding disruption.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>Identifying Service Portal Pain Points</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Our user journey mapping revealed frequent drop-off
                          points where users couldn’t easily resolve their
                          issues. The existing Service Portal lacked clarity,
                          guidance, and accessible next steps—leading to
                          frustration and support escalations.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <h3>Applying UX Best Practices to Drive Adoption</h3>
                      <div className="journey-step-detail">
                        <h4>Continuous Feedback Loops</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Through reviews of usability testing conducted by the
                          client’s Design Team, we identified a recurring
                          pattern of slow adoption. These insights directly
                          shaped how thoroughly we briefed stakeholders on
                          upcoming changes and how much effort was dedicated to
                          fully fleshing out new layout concepts and feature
                          designs.
                        </p>
                        <h4>Implementing Progressive Disclosure</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          We applied progressive disclosure principles to ease
                          users into the redesigned interface—revealing new
                          features gradually, only after users completed
                          familiar workflows. This reduced cognitive overload
                          and improved user confidence during the transition.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <h3>Product Maturity Stage</h3>
                      <div className="journey-step-detail">
                        <h4>The end of the Service Portal Era</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Document how your design met scalability and
                          accessibility needs—such as responsive behavior,
                          consistent ARIA roles, color contrast, and screen
                          reader testing.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 5 && (
                    <>
                      <h3>ServiceNow Employee Center Era</h3>
                      <div className="journey-step-detail">
                        <h4>Design Discovery Phase</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          As users grew more familiar with the ServiceNow
                          platform, our timeline aligned with the latest
                          platform updates to introduce Employee Center Pro. EC
                          Pro is a unified experience hub designed to address
                          prior limitations while equipping developers with
                          modern tools to deliver end-to-end solutions.
                        </p>
                        <h4>Enhanced Capabilities</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          This transition empowered teams with real-time user
                          analytics, advanced branding flexibility, and—most
                          importantly—AI integration through enhanced search and
                          Virtual Agent capabilities.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 6 && (
                    <>
                      <h3>
                        Designing for Seamless Developer Handoff in ServiceNow
                      </h3>
                      <div className="journey-step-detail">
                        <h4>Platform-Driven Design</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          Designs were created within ServiceNow’s UI
                          constraints, leveraging reusable components and
                          accessibility standards. This ensured feasibility and
                          sped up implementation, minimizing rework between
                          design and dev.
                        </p>
                      </div>
                      <div className="journey-step-detail">
                        <h4>Guided by Nielsen Norman Heuristics</h4>
                        <ul
                          style={{
                            color: "#C5D2C4",
                            paddingLeft: "1rem",
                            marginTop: "1rem",
                          }}
                        >
                          <li>
                            <strong>Visibility:</strong> Clear feedback via
                            loaders and toasts.
                          </li>
                          <li>
                            <strong>Match System & Real World:</strong>{" "}
                            Consistent labels and familiar icons.
                          </li>
                          <li>
                            <strong>User Control:</strong> Undo and clear
                            navigation paths.
                          </li>
                          <li>
                            <strong>Consistency:</strong> Standard spacing,
                            fonts, and behaviors.
                          </li>
                          <li>
                            <strong>Error Prevention:</strong> Inline validation
                            and confirmations.
                          </li>
                          <li>
                            <strong>Recognition:</strong> Explicit actions and
                            labels.
                          </li>
                          <li>
                            <strong>Flexibility:</strong> Keyboard shortcuts and
                            streamlined flows.
                          </li>
                          <li>
                            <strong>Minimalism:</strong> Clean layouts focusing
                            on tasks.
                          </li>
                          <li>
                            <strong>Error Recovery:</strong> Helpful messages
                            and field highlights.
                          </li>
                          <li>
                            <strong>Help:</strong> Optional tooltips for complex
                            features.
                          </li>
                        </ul>
                      </div>
                      <div className="journey-step-detail">
                        <h4>Results</h4>
                        <p style={{ color: theme.tertiary80 }}>
                          The design system became a single source of truth,
                          enabling developers to build confidently. Users
                          benefited from intuitive, accessible, and responsive
                          ServiceNow experiences.
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div
                  style={{
                    flex: "1 1 70%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "20px",
                    width: "40vw",
                    height: "100%",
                  }}
                >
                  <img
                    src={stepImages3[idx]}
                    alt={`Step ${step}`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className="about"
            id="about"
            style={{
              backgroundColor: theme.secondary,
            }}
          >
            <div
              className="about-body"
              style={{
                textAlign: "center",
              }}
            >
              <div className="about-img">
                <CdcImageSlider slides={SliderData} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="about"
          id="about"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="journey-body" style={{ textAlign: "center" }}>
            <div
              className="about-description"
              style={{ backgroundColor: theme.secondary }}
            >
              <h2
                style={{
                  color: theme.primary,
                  textAlign: "right",
                  fontSize: "32px",
                }}
              >
                From Insights to Implementation: Scaling UX Through Data,
                Dashboards, and Documentation
              </h2>
              <p style={{ color: theme.tertiary80 }}>
                Evolving beyond UI design alone, this phase focused on building
                an ecosystem of insights and enablement. Passive data collection
                provided clarity on user behaviors, while rich enterprise
                dashboards offered transparency across business units. Every
                interface and system component was meticulously
                documented—Interface Control Documents, System Descriptions, and
                support manuals were developed in sync with code to ensure
                long-term scalability, accessibility, and maintainability.
              </p>
            </div>

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
                      flex: "1 1 50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: "20px",
                      width: "40vw",
                      height: "100%",
                    }}
                  >
                    <img
                      src={stepImages4[idx]}
                      alt={`Step ${step}`}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>

                  {/* RIGHT TEXT */}
                  <div className="journey-step" style={{ flex: "1 1 50%" }}>
                    {step === 1 && (
                      <>
                        <h3>Step 1: Passive Data Collection Infrastructure</h3>
                        <div className="journey-step-detail">
                          <h4>
                            1.1: Laying the Foundation for Scalable Insights
                          </h4>
                          <p style={{ color: theme.tertiary80 }}>
                            We implemented built-in behavioral analytics and
                            passive tracking tools to better understand user
                            actions—click rates, time on page, task
                            abandonment—all integrated with ServiceNow's
                            Employee Center.
                          </p>
                        </div>
                        <div className="journey-step-detail">
                          <h4>1.2: Contextual Triggers and Survey Layers</h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Lightweight, context-aware survey prompts were
                            embedded to collect insights during key decision
                            points without disrupting workflows.
                          </p>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <h3>Step 2: Standing Up Enterprise Dashboards</h3>
                        <div className="journey-step-detail">
                          <h4>2.1: Tailored Reporting for Stakeholders</h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Created real-time, role-specific dashboards using
                            ServiceNow Performance Analytics, enabling
                            executives and service managers to visualize KPIs
                            across support funnels and content usage.
                          </p>
                        </div>
                        <div className="journey-step-detail">
                          <h4>2.2: Multi-Tiered Metrics Architecture</h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Dashboards were structured for scalability—from
                            high-level summaries to granular task
                            performance—allowing each team to act on data
                            aligned to their goals.
                          </p>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <h3>Step 3: System and Interface Documentation</h3>
                        <div className="journey-step-detail">
                          <h4>
                            3.1: Interface Control and Description Documents
                          </h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Developed ICDs, IDDs, and System Descriptions using
                            the same Agile processes as the software—ensuring
                            documentation was version-controlled, accurate, and
                            implementation-ready.
                          </p>
                        </div>
                        <div className="journey-step-detail">
                          <h4>3.2: Cross-Team Collaboration with SMEs</h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Worked with dev, product, and compliance leads to
                            make technical documentation a shared source of
                            truth—bridging design intent with system behavior.
                          </p>
                        </div>
                      </>
                    )}

                    {step === 4 && (
                      <>
                        <h3>Step 4: Production-Ready Support Artifacts</h3>
                        <div className="journey-step-detail">
                          <h4>4.1: Manuals and Maintenance Guides</h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Authored and delivered User Manuals, Maintenance
                            Protocols, Troubleshooting Guides, and Administrator
                            Docs with the same rigor as production assets.
                          </p>
                        </div>
                        <div className="journey-step-detail">
                          <h4>4.2: Living Documentation for Agile Systems</h4>
                          <p style={{ color: theme.tertiary80 }}>
                            Documents were integrated into workflows and
                            continuously refined—ensuring they evolve with the
                            system and remain usable across onboarding, dev
                            handoff, and maintenance cycles.
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
      </div>
    </div>
  );
}

export default MainPage;
