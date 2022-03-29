import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 5 }}
        mt={5}
        sx={{
          backgroundColor: "secondary.dark",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Pre-Storic</Typography>
              <Typography variant="caption">
                Developed by Rifqi Finaldy
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  width: "50%",
                }}
              >
                Pages
                <hr />
              </Box>
              <Box>
                <Link href="/">Home</Link>
              </Box>
              <Box>
                <Link href="/about">About</Link>
              </Box>
              <Box>
                <Link href="/dino">Dino</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  width: "50%",
                }}
              >
                Social Media
                <hr />
              </Box>
              <Box>
                <Link href="/">Facebook</Link>
              </Box>
              <Box>
                <Link href="/">Instagram</Link>
              </Box>
              <Box>
                <Link href="/">Linkedln</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
