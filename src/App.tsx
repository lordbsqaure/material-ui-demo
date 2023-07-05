import React from "react";
import "./App.css";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const array = new Array(5);
array.fill(0);

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className="cameraIcon" />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="heading">
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              This is a very long paragrph. I had to do the lorem enum i do not
              know why i did not do that instead
            </Typography>
            <div className="buttonGroup">
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="sm" className="cardGrid">
          <Grid container spacing={4}>
            {array.map((index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="imageTitle"
                    className="cardMedia"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h6">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card you can use this
                    </Typography>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <footer className="footer">
          <Typography gutterBottom align="center" variant="h6">
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            some good footer down
          </Typography>
        </footer>
      </main>
    </>
  );
}

export default App;
