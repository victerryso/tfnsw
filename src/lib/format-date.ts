import { format } from "date-fns";

// Format date to query api
const formatDate = (date: Date): string => {
  return format(date, "dd-MM-yyyy");
};

export default formatDate;
