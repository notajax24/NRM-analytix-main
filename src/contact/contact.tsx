import { Box, Typography, Container, Button, Stack, Card, CircularProgress } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";

// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <Box ref={ref} sx={{
      opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`, willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

// Custom Input Component
const CustomInput = ({ label, required, isTextArea = false, name, value, onChange, errorText }: { label: string, required?: boolean, isTextArea?: boolean, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, errorText?: string | null }) => (
  <Box sx={{ mb: 2.5 }}>
    <Typography variant="body2" sx={{ color: '#475569', mb: 1, fontWeight: 500, fontSize: '0.85rem' }}>
      {label} {required && <Box component="span" sx={{ color: '#ef4444' }}>*</Box>}
    </Typography>
    <Box
      component={isTextArea ? "textarea" : "input"}
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      sx={{
        width: '100%',
        bgcolor: '#f1f5f9',
        border: '1px solid',
        borderColor: errorText ? '#ef4444' : 'transparent',
        borderRadius: '12px',
        px: 2,
        py: 1.8,
        fontSize: '0.95rem',
        color: '#1e293b',
        fontFamily: 'inherit',
        resize: 'none',
        minHeight: isTextArea ? '120px' : 'auto',
        outline: 'none',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        '&:focus': {
          borderColor: errorText ? '#ef4444' : 'rgba(124, 58, 237, 0.4)',
          boxShadow: `0 0 0 2px ${errorText ? 'rgba(239, 68, 68, 0.2)' : 'rgba(124, 58, 237, 0.2)'}`
        }
      }}
    />
    {errorText && (
      <Typography variant="caption" sx={{ color: '#ef4444', mt: 0.5, display: 'block' }}>
        {errorText}
      </Typography>
    )}
  </Box>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string | null>>({
    name: null,
    company: null,
    email: null,
    phone: null,
    message: null,
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string | null> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please let us know how we can help.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmissionStatus('loading');

    // Simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate a random failure for demonstration
      if (Math.random() > 0.8) {
        throw new Error('Failed to send message.');
      }

      setSubmissionStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    }
  };

  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      background: 'radial-gradient(circle at center, rgba(254, 226, 226, 0.3) 0%, rgba(255, 255, 255, 1) 70%)',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        {/* Responsive two-column layout */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { sm: 'center' },
            gap: { xs: 6, sm: 8 },
          }}
        >

          {/* ================= LEFT COLUMN (Content & Info) ================= */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%' }, minWidth: 0 }}>
            <FadeUp delay={100}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
                <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>
                  CONTACT US
                </Typography>
              </Box>

              <Typography variant="h2" sx={{ fontWeight: 300, color: '#1e293b', fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 4, lineHeight: 1.1 }}>
                Let's Talk About<br />
                <Box component="span" sx={{ color: '#ef4444', fontWeight: 400 }}>Your Data</Box>
              </Typography>

              <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 6, pr: { md: 4 } }}>
                Ready to <Box component="span" sx={{ color: '#7c3aed', fontWeight: 600 }}>simplify your Data and AI journey?</Box> Whether you have a specific project in mind, a platform challenge you need help solving, or simply want to explore what's possible — we would love to hear from you. Fill in the form below and a member of our team will be in touch within <Box component="span" sx={{ color: '#1e293b', fontWeight: 600, borderBottom: '2px solid #ef4444' }}>one business day</Box>.
              </Typography>
            </FadeUp>

            {/* Contact Details Card */}
            <FadeUp delay={200}>
              <Box sx={{ mb: 6, pr: { md: 4 } }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 3 }}>
                  Our Office
                </Typography>

                <Stack spacing={2} sx={{ color: '#475569', fontSize: '0.95rem' }}>
                  <Box>
                    <Box component="span" sx={{ fontWeight: 600, color: '#1e293b' }}>Email: </Box>
                    <a href="mailto:contact@nrmanalytix.com" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 500 }}>contact@nrmanalytix.com</a>
                  </Box>
                  <Box>
                    <Box component="span" sx={{ fontWeight: 600, color: '#1e293b' }}>Address: </Box>
                    No 1 Sundara Vinayagar Nagar, Velingapattarai, Orikkai, Kanchipuram, Tamil Nadu – 631502, India
                  </Box>
                  <Box>
                    <Box component="span" sx={{ fontWeight: 600, color: '#1e293b' }}>LinkedIn: </Box>
                    <a href="https://linkedin.com/company/nrm-analytix" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 500 }}>linkedin.com/company/nrm-analytix</a>
                  </Box>
                </Stack>
              </Box>
            </FadeUp>

            {/* Map Placeholder */}
            <FadeUp delay={300}>
              <Box sx={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
                <iframe
                  title="NRM Analytix Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.316886470876!2d79.69970921528696!3d12.82281899095368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c3ab41270c15%3A0xc3f8e6c757657904!2sOrikkai%2C%20Kanchipuram%2C%20Tamil%20Nadu%20631502!5e0!3m2!1sen!2sin!4v1689945142104!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </FadeUp>
          </Box>

          {/* ================= RIGHT COLUMN (The Form UI) ================= */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%' }, minWidth: 0 }}>
            <FadeUp delay={400}>
              <Card elevation={0} sx={{
                p: { xs: 4, sm: 5, md: 6 },
                borderRadius: '24px',
                bgcolor: '#ffffff',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.02)',
                border: '1px solid rgba(0,0,0,0.03)',
                minHeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>

                {submissionStatus === 'success' ? (
                  <Box sx={{ textAlign: 'center', p: 4 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>Message Sent!</Typography>
                    <Typography sx={{ color: '#475569' }}>Thank you for reaching out. We'll get back to you shortly.</Typography>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <CustomInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required errorText={errors.name} />
                    <CustomInput label="Company Name" name="company" value={formData.company} onChange={handleChange} required errorText={errors.company} />
                    <CustomInput label="Business Email" name="email" value={formData.email} onChange={handleChange} required errorText={errors.email} />
                    <CustomInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} errorText={errors.phone} />
                    <CustomInput label="How Can We Help You?" name="message" value={formData.message} onChange={handleChange} required isTextArea errorText={errors.message} />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={submissionStatus === 'loading'}
                      sx={{
                        bgcolor: '#111827',
                        color: '#ffffff',
                        borderRadius: '50px',
                        py: 1.8,
                        mt: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        boxShadow: '0 4px 12px rgba(17, 24, 39, 0.2)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: '#374151',
                          transform: 'translateY(-2px)'
                        },
                        '&.Mui-disabled': {
                          bgcolor: '#64748b',
                          color: '#cbd5e1'
                        }
                      }}
                    >
                      {submissionStatus === 'loading' ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send Message →'}
                    </Button>

                    {submissionStatus === 'error' && <Typography sx={{ color: 'error.main', textAlign: 'center', mt: 2, fontSize: '0.875rem' }}>Something went wrong. Please try again later.</Typography>}

                    <Typography sx={{ color: '#64748b', fontSize: '0.75rem', textAlign: 'center', mt: 4, px: 2 }}>
                      We respect your privacy. Your information will never be shared with third parties.
                    </Typography>
                  </form>
                )}

              </Card>
            </FadeUp>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}