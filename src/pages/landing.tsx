import { useEffect, useState } from "react";
import formatDate from "../lib/format-date";
import requestData from "../lib/request-data";
import Calendar from "../components/calendar";

const LandingPage = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState();

  useEffect(() => {
    requestData({
      filterDateValid: formatDate(date),
    }).then(setData);
  }, [date]);

  return (
    <Calendar date={date} handleChange={(date) => date && setDate(date)} />
  );
};
export default LandingPage;
