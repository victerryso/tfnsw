import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Alert from "./alert";

interface Props {
  alerts: any[];
}

const Alerts = ({ alerts = [] }: Props) => {
  return (
    <List>
      {alerts.map((alert: any) => (
        <Alert title={alert.urlText} description={alert.content} />
      ))}

      {alerts.length === 0 && (
        <>
          <Divider />
          <ListItem>
            <ListItemText
              primary="No alerts found"
              secondary="Try switching the date, mode or priority"
            />
          </ListItem>
        </>
      )}
    </List>
  );
};

export default Alerts;
