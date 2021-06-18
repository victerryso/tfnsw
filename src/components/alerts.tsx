import List from "@material-ui/core/List";
import Alert from "./alert";

interface Props {
  alerts: any[];
}

const Alerts = ({ alerts = [] }: Props) => {
  return (
    <List>
      {alerts.map((alert: any) => (
        <Alert
          title={alert.urlText}
          description={alert.content}
          // items={[...alert.affected.lines, ...alert.affected.stops].map(({ description }) => description)}
        />
      ))}
    </List>
  );
};

export default Alerts;
