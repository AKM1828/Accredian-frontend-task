import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box, TextField } from '@mui/material';
import { css } from '@emotion/react';

const heroSection = css`
  text-align: center;
  padding: 64px 16px;
  background-color: #f5f5f5;
`;

const modalStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 24px;
  padding: 32px;
`;

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
        <Typography variant="h3" gutterBottom>
          Refer & Earn
        </Typography>
        <Typography variant="h5" gutterBottom>
          Refer a friend and earn rewards!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box css={modalStyle}>
          <Typography variant="h6" gutterBottom>
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
