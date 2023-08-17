import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Universities from "./Universities";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Harvard from "./imgs/Harvard.jpg";
import JohnsHopkins from "./imgs/J-H.png";
import Michigan from "./imgs/U-M.jpg";
import Oxford from "./imgs/oxford.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>My Universities </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item lg={3} md={6} xs={12}>
            <Universities
              image={Harvard}
              title="Harvard University"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit accusamus laboriosam, 
              a repudiandae assumenda id ad quo tempore quia."
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Universities
              image={JohnsHopkins}
              title="Johns H. University"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit accusamus laboriosam, 
              a repudiandae assumenda id ad quo tempore quia."
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Universities
              image={Michigan}
              title="University of Michigan"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit accusamus laboriosam, 
              a repudiandae assumenda id ad quo tempore quia."
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Universities
              image={Oxford}
              title="Oxford University"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit accusamus laboriosam, 
              a repudiandae assumenda id ad quo tempore quia."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
