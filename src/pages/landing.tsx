import { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import formatDate from "../lib/format-date";
import requestData from "../lib/request-data";
import Header from "../components/header";
import Calendar from "../components/calendar";
import Alerts from "../components/alerts";

const LandingPage = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState<any>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    requestData({
      filterDateValid: formatDate(date),
    }).then(setData);
  }, [date]);

  const regexp = new RegExp(query, "i");

  const alerts = (data?.infos?.current ?? []).filter((alert: any) => {
    return regexp.test(JSON.stringify(alert));
  });

  const handleCalendarChange = (date: MaterialUiPickersDate) => {
    if (date) {
      setDate(date);
      setData(null);
    }
  };

  return (
    <div>
      <Header
        value={query}
        handleChange={(event) => setQuery(event.target.value)}
      />
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={4}>
            <Paper>
              <Calendar date={date} handleChange={handleCalendarChange} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            {data && (
              <Paper>
                <Alerts alerts={alerts} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default LandingPage;
