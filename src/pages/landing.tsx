import { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import formatDate from "../lib/format-date";
import requestData from "../lib/request-data";
import Header from "../components/header";
import Calendar from "../components/calendar";
import Alerts from "../components/alerts";
import Modes from "../components/modes";
import Priorities from "../components/priorities";
import Search from "../components/search";

const LandingPage = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState<any>();
  const [mode, setMode] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState<string | null>(null);

  // Request data when date or mode change
  useEffect(() => {
    requestData({
      filterMOTType: mode,
      filterDateValid: formatDate(date),
    }).then(setData);
  }, [date, mode]);

  // Create regex to filter out alerts
  const regexp = new RegExp(query, "i");

  // Get alerts from response data and filter via query and priority
  const alerts = (data?.infos?.current ?? []).filter((alert: any) => {
    return (
      regexp.test(JSON.stringify(alert)) &&
      (!priority || alert.priority === priority)
    );
  });

  // Callback when date is selected on calendar
  const handleCalendarChange = (date: MaterialUiPickersDate) => {
    if (date) {
      setDate(date);
      setData(null);
    }
  };

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
          <Grid item sm={12} md={4}>
            <Paper>
              <Calendar date={date} handleChange={handleCalendarChange} />
            </Paper>
          </Grid>
          <Grid item sm={12} md={8}>
            <Paper>
              <Search query={query} handleChange={setQuery} />
              <Modes currentMode={mode} handleClick={setMode} />
              <Priorities
                currentPriority={priority}
                handleClick={setPriority}
              />
              <Alerts alerts={alerts} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default LandingPage;
