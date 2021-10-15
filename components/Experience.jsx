import { Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function experience({ name, url, date, image, full, points }) {
  return (
    <Grid
      id={name}
      container
      xs={11}
      spacing={4}
      justifyContent="space-around"
      sx={{
        // position: "absolute",
        // inset: 0,
        margin: "40px 10px",
        padding: "10px",
      }}
    >
      <Grid
        item
        sx={{
          width: "40%",
          position: "relative",
        }}
      >
        <Image layout="fill" objectFit="contain" src={image} />
      </Grid>
      <Grid item xs={7}>
        <Link
          href={url}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: "2em",
            }}
          >
            {full}
          </Typography>
          <OpenInNewIcon
            fontSize="large"
            sx={{
              margin: "0 10px",
            }}
          />
        </Link>
        <Typography component="p">{date}</Typography>
        <List>
          {points.map((p, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                {p.icon ? (
                  <p.icon fontSize="small" />
                ) : (
                  <FiberManualRecordIcon fontSize="small" />
                )}
              </ListItemIcon>
              <ListItemText primary={p.text} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
