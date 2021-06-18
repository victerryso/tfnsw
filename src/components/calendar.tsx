import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface Props {
  date: Date;
  handleChange: (date: MaterialUiPickersDate) => void;
}

const Calendar = ({ date, handleChange }: Props) => (
  <DatePicker
    autoOk
    orientation="portrait"
    variant="static"
    openTo="date"
    value={date}
    onChange={handleChange}
  />
);

export default Calendar;
