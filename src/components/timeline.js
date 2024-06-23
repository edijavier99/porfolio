import React from "react";
import "../styles/timeline.css";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'PROJECT KICKOFF',
    title: 'Understanding Your Vision',
    description: `In this crucial first step, we hold a detailed meeting with
    you to understand your project requirements, business goals, target 
    audience, and any specific functionalities you need. We also discuss 
    the project timeline and budget to ensure that we have a clear 
    understanding of your vision. Our goal is to ensure we capture every 
    detail, laying a strong foundation for a successful project.`,
    optional: <Typography variant="caption">Step 1</Typography>,
  },
  {
    label: 'DESIGN PHASE',
    title: 'Bringing Ideas to Life',
    description: `Our design team creates wireframes that outline the basic structure
    and layout of your website or application. Once approved, we 
    develop high-fidelity mockups that incorporate your branding, 
    color schemes, and visual elements. This phase is all about 
    bringing your ideas to life, ensuring that the visual representation 
    aligns perfectly with your brand identity and resonates with your audience.`,
    optional: <Typography variant="caption">Step 2</Typography>,
  },
  {
    label: 'DEVELOPMENT PHASE',
    title: 'Building the Future',
    description: `Our skilled developers take the approved designs and transform 
    them into a fully functional website or application. We use the latest 
    technologies to ensure high performance, scalability, and security. 
    This phase is where the magic happens, turning static designs into 
    interactive, dynamic platforms that offer a seamless user experience.`,
    optional: <Typography variant="caption">Step 3</Typography>,
  },
  {
    label: 'LAUNCH & MAINTENANCE',
    title: 'Going Live and Beyond',
    description: `The final step involves deploying your website or 
    application to a live server and making it accessible to your users.
    We offer ongoing support and maintenance services to keep your site
    or app updated and running efficiently. This ensures that your 
    digital presence remains robust, secure, and up-to-date, allowing 
    you to focus on your core business.`,
    optional: <Typography variant="caption">Last step</Typography>,
  },
];

export const Timeline = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section id="timeline" className="container-fluid">
      <p className="category text-muted">PROJECTS TIMELINE</p>
      <h2>Workflow Process</h2>
      <div className="col-11 col-md-8 col-lg-8 mx-auto">
        <Box>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={step.optional}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography variant="h6" fontWeight="bold">{step.title}</Typography>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3, borderRadius: "20px", bgcolor: 'white', marginTop: "20px" }}>
              <Typography variant="h6" gutterBottom>
                Project Successfully Completed
              </Typography>
              <Typography>
                Congratulations! Your project has been successfully launched and is now live. 
                Your business is ready to engage with your audience. We are here to provide 
                ongoing support and ensure everything runs smoothly.
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 2 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </section>
  );
}
