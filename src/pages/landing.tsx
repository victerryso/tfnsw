import { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import formatDate from "../lib/format-date";
import requestData from "../lib/request-data";
import Header from "../components/header";
import Calendar from "../components/calendar";
import Alerts from "../components/alerts";

const LandingPage = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState<any>();

  useEffect(() => {
    requestData({
      filterDateValid: formatDate(date),
    }).then(setData);
  }, [date]);

  return (
    <div>
      <Header />
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={4}>
            <Paper elevation={1}>
              <Calendar
                date={date}
                handleChange={(date) => date && setDate(date)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            {data && <Alerts alerts={data?.infos?.current} />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default LandingPage;
