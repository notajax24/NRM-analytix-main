import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App.tsx'
import LandingPage from './pages/LandingPage.tsx'
import theme from './theme.ts'
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/michroma/400.css';
import './index.css'
import logoNRM from './assets/logoNRM.png'

import ClarityBanner from './pages/ClarityBanner.tsx'
import Services from './pages/Services.tsx'
import WhyChooseUs from './pages/WhyChooseUs.tsx'
import SolutionsShowcase from './pages/SolutionsShowcase.tsx'
import Testimonials from './pages/Testimonials.tsx'
import MeetVisionaries from './pages/MeetVisionaries.tsx'
import CallToAction from './pages/CallToAction.tsx'
import Footer from './components/common/Footer.tsx'
import EventsSection from './event/EventsSection.tsx'
import AboutPage from './about/AboutPage.tsx'
import CareersPage from './career/CareersPage.tsx'
import BlogPage from './blog/BlogPage.tsx'
import DatabricksPartners from './partners/databricksPartners.tsx'


// Lazy load nested routes to dramatically improve initial page load times
const OurSolutionsHero = React.lazy(() => import('./solutions/OurSolutionsHero.tsx'))
const PracticeArea = React.lazy(() => import('./solutions/PracticeArea.tsx'))
const PracticeAreaTwo = React.lazy(() => import('./solutions/PracticeAreaTwo.tsx'))
const PracticeAreaThree = React.lazy(() => import('./solutions/PracticeAreaThree.tsx'))

const CodeSwitch = React.lazy(() => import('./products/CodeSwitch.tsx'))
const MetaflowPage = React.lazy(() => import('./products/MetaflowPage.tsx'))
const FinOpsCopilotPage = React.lazy(() => import('./products/FinOpsCopilotPage.tsx'))
const TalentJobAnalyzerPage = React.lazy(() => import('./products/DevsyncProductPage.tsx'))
const DevsyncProductPage = React.lazy(() => import('./products/TalentJobAnalyzerPage.tsx'))



const WhyNRMHero = React.lazy(() => import('./whyChooseUs/WhyNRMHero.tsx'))
const ReasonsToChooseUs = React.lazy(() => import('./whyChooseUs/ReasonsToChooseUs.tsx'))
const MeetLeadership = React.lazy(() => import('./whyChooseUs/MeetLeadership.tsx'))
const ContactPage = React.lazy(() => import('./contact/contact.tsx'))

// UPDATED: Smart Scroll Manager
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      // Wait a tiny bit for the new page to render, then scroll to ID
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If no hash is present, jump to the top like normal
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

// Dynamically inject the NRM logo as the site favicon
let faviconLink = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
if (!faviconLink) {
  faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  document.head.appendChild(faviconLink);
}
faviconLink.href = logoNRM;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Swapped ScrollToTop for ScrollManager here */}
        <ScrollManager />
        
        <React.Suspense fallback={<Box sx={{ display: 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center', bgcolor: '#fdfdfd' }}><CircularProgress sx={{ color: '#8b5cf6' }} /></Box>}>
        <Routes>
          <Route path="/" element={<App />}>
            
            {/* Main Landing Page */}
            <Route index element={
              <>
                <LandingPage />
                <ClarityBanner />
                <Box id="services">
                  <Services />
                </Box>
                <Box id="why-choose-us">
                  <WhyChooseUs />
                </Box>
                <Box id="solutions">
                  <SolutionsShowcase />
                </Box>
                <Testimonials />
                <MeetVisionaries />
                <Box id="contactUs">
                  <CallToAction />
                </Box>
                <Footer />
              </>
            } />
            
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<Services />} />

            {/* Main Products Page */}
            <Route path="products" element={<><CodeSwitch /><Footer /></>} />
            {/* <Route path="products/code-switch" element={<><CodeSwitch /><Footer /></>} />
            <Route path="products/dev-sync" element={<><DevsyncProductPage /><Footer /></>} /> */}
            {/* Individual Product Pages */}
            <Route path="products/code-switch" element={<><CodeSwitch /><Footer /></>} />
            <Route path="products/meta-flow" element={<><MetaflowPage /><Footer /></>} />
            <Route path="products/talend-job-analyzer" element={<><TalentJobAnalyzerPage /><Footer /></>} />
              <Route  path="products/dev-sync" element={<><DevsyncProductPage /><Footer /></>} />
            <Route path="products/finops-copilot" element={<><FinOpsCopilotPage /><Footer /></>} />

            {/* Solutions Page */}
            <Route path="solutions" element={
              <>
                <OurSolutionsHero />
                {/* Make sure these components contain id="practice1", id="practice2", etc. inside them! */}
                <PracticeArea />
                <PracticeAreaTwo />
                <PracticeAreaThree />
                <Footer />
              </>
            } />

            {/* Why NRM Analytix Page */}
            <Route path="why-nrm" element={
              <>
                <WhyNRMHero />
                <ReasonsToChooseUs />
                <MeetLeadership />
                <Footer />
              </>
            } />
             {/* Databricks Partner Page */}
            <Route path="partners/databricks" element={
              <>
                <DatabricksPartners />
                <Footer />
              </>
            } />
             {/* Career Page */}
            <Route path="careers" element={
              <>
               <CareersPage />
              </>
            } />
            {/* Events Page */}
            <Route path="events" element={
              <>
                <EventsSection />
                <Footer />
              </>
            } />

            <Route path="contact" element={
  <>
    <ContactPage />
    <Footer />
  </>
} />

             {/* Blog page */}
            <Route path="blog" element={
              <>
                <BlogPage />
                <Footer />
              </>
            } />

          </Route>
        </Routes>
        </React.Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)