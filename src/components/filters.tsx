import { DatePicker } from "@material-ui/pickers";

interface Props {
  date: Date;
}

const StaticDatePicker = ({ date }: Props) => (
  <DatePicker
    autoOk
    orientation="landscape"
    variant="static"
    openTo="date"
    value={date}
    onChange={() => {}}
  />
);

export default StaticDatePicker;
