import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box, TextField } from '@mui/material';
import { css } from '@emotion/react';

const heroSection = css`
  text-align: right;
  padding: 80px 16px;
  background-color: #f6f6f6;
`;


const center = {
  textAlign: 'center',
  margin: 'auto',
  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Adjust as needed based on your layout
};

const ReferAndEarnLandingPage = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div css={heroSection}>
        <Typography variant="h3" gutterBottom style={center}>
          Refer & Earn
        </Typography>
        <Typography variant="h5" gutterBottom style={center}>
          Refer a friend and earn rewards!
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpen} style={center}>
          Refer Now 
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...center, width: '80%', maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom >
            Refer a Course
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="referrerName"
              label="Your Name"
              fullWidth
              margin="normal"
              value={form.referrerName}
              onChange={handleChange}
              required
            />
            <TextField
              name="referrerEmail"
              label="Your Email"
              type="email"
              fullWidth
              margin="normal"
              value={form.referrerEmail}
              onChange={handleChange}
              required
            />
            <TextField
              name="refereeName"
              label="Friend's Name"
              fullWidth
              margin="normal"
              value={form.refereeName}
              onChange={handleChange}
              required
            />
            <TextField
              name="refereeEmail"
              label="Friend's Email"
              type="email"
              fullWidth
              margin="normal"
              value={form.refereeEmail}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default ReferAndEarnLandingPage;
