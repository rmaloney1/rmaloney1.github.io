import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Typography } from "@mui/material";

import Experience from "@components/Experience";
import experiences from "../experiences";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Homepage = () => {
  return (
    <>
      <Grid
        container
        sx={{
          position: "relative",
        }}
      >
        <Grid
          container
          xs={12}
          md={6}
          sx={{
            // position: "absolute",
            // inset: 0,
            textAlign: "center",
            height: "100vh",
            position: "relative",
          }}
        >
          <Image layout="fill" src="/sunswift_photo.jpg" objectFit="cover" />
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          sx={{
            // position: "absolute",
            // inset: 0,
            backgroundColor: { md: "transparent", xs: "rgba(0,0,0,0.5)" },
            position: { md: "static", xs: "absolute" },
            top: 0,
            left: 0,
            textAlign: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            color: { md: "black", xs: "white" },
            alignItems: "center",
            justifyContent: "center",
            padding: "0 10%",
          }}
        >
          <Typography
            componenet="h1"
            sx={{
              fontSize: "3em",
              textTransform: "uppercase",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Rohan Maloney
          </Typography>
          <Typography
            componenet="h2"
            sx={{
              fontSize: "1.5em",
              textTransform: "uppercase",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Software Engineer, Sydney
          </Typography>
          <Typography
            componenet="p"
            sx={{
              fontSize: "1em",
              fontFamily: "Nunito, sans-serif",
              marginTop: "4em",
            }}
          >
            Welcome to my React/NextJS website.
          </Typography>
          <Typography
            componenet="p"
            sx={{
              fontSize: "1em",
              fontFamily: "Nunito, sans-serif",
              marginTop: "1em",
            }}
          >
            I have a range of passions including intuitive user interfaces,
            security engineering, machine learning and cloud application
            development.
          </Typography>
          <Typography
            componenet="p"
            sx={{
              fontSize: "1em",
              fontFamily: "Nunito, sans-serif",
              marginTop: "1em",
            }}
          >
            Read about my experiences, or view my linkedin and github, using the
            navigation bar above, you may even view the source of this website.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        direction="column"
        justifyContent="space-around"
        sx={{
          padding: "40px 0",
        }}
      >
        {experiences.map((e) => (
          <Experience key={e.name} {...e} />
        ))}
      </Grid>
    </>
  );
};

export default Homepage;
