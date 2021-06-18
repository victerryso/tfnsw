import Alert from "./alert";

interface Props {
  alerts: any[];
}

const Alerts = ({ alerts = [] }: Props) => {
  return (
    <div>
      {alerts.map((alert: any) => (
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
