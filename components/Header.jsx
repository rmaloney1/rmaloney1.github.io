import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import MuiNextLink from "@components/MuiNextLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";
import experiences from "experiences";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const navLinks = experiences.map((e) => ({
  title: e.name,
  path: `/#${e.name}`,
}));
navLinks.push(
  {
    title: "github",
    path: "https://github.com/rmaloney1",
  },
  {
    title: "linkedin",
    path: "https://linkedin.com/in/rohan-maloney",
  },
  {
    title: "resume (pdf)",
    path: `${process.env.url}${process.env.basePath}/RohanMaloney_resume.pdf`,
  }
);

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container
              sx={{
                display: `flex`,
                justifyContent: { md: `space-between`, xs: "flex-end" },
              }}
            >
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
