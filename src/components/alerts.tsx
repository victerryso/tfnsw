import Alert from "./alert";

interface Props {
  alerts: any[];
}

const Alerts = ({ alerts = [] }: Props) => {
  console.table(alerts);
  return (
    <div>
      {alerts
        .filter((alert) => alert)
        .map((alert) => (
          <Alert
            title={alert.urlText}
            description={alert.content}
            // items={[...alert.affected.lines, ...alert.affected.stops].map(({ description }) => description)}
          />
        ))}
    </div>
  );
};

export default Alerts;
