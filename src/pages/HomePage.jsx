import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import {
  AssignmentInd,
  LocalHospital,
  Search,
  Chat,
  MonitorHeart,
  Schedule,
  Medication
} from '@mui/icons-material';

function HomePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h3" gutterBottom style={{
        marginBottom: '2rem',
        fontWeight: 600,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Health Dashboard
      </Typography>
      
      <Grid container spacing={3} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <MonitorHeart style={{ marginRight: '0.5rem', verticalAlign: 'bottom' }} />
                Health Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { icon: <LocalHospital />, text: 'Blood Pressure: 120/80 mmHg' },
                  { icon: <MonitorHeart />, text: 'Cholesterol: LDL 100 mg/dL' },
                  { icon: <Medication />, text: 'Blood Sugar: 90 mg/dL' },
                  { icon: <Schedule />, text: 'Appointment: June 15th 2:00 PM' }
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card variant="outlined" style={{ padding: '1rem' }}>
                      <Typography variant="body1">
                        {item.icon} {item.text}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3} style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <AssignmentInd style={{ marginRight: '0.5rem', verticalAlign: 'bottom' }} />
                Quick Actions
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    icon: <AssignmentInd fontSize="large" />,
                    title: 'Report Analysis',
                    link: '/report-analysis'
                  },
                  {
                    icon: <LocalHospital fontSize="large" />,
                    title: 'Test Recommendations',
                    link: '/test-recommendation'
                  },
                  {
                    icon: <Search fontSize="large" />,
                    title: 'Facility Search',
                    link: '/facility-search'
                  },
                  {
                    icon: <Chat fontSize="large" />,
                    title: 'Health Assistant',
                    link: '/health-assistant'
                  }
                ].map((feature, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Button
                      fullWidth
                      href={feature.link}
                      variant="outlined"
                      style={{
                        height: '100%',
                        padding: '1rem',
                        transition: 'transform 0.2s',
                        ':hover': { transform: 'scale(1.05)' }
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: '0.5rem' }}>{feature.icon}</div>
                        <Typography variant="body2">{feature.title}</Typography>
                      </div>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
