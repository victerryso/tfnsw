import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Item {
  title: string;
  description: string;
}

interface Props {
  title?: string;
  description?: string;
  items?: Item[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      marginBottom: theme.spacing(2),
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
    title: {
      fontSize: 14,
    },
  })
);

const Alert = ({ title = "", description = "", items = [] }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Typography
          variant="body2"
          component="p"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/*        {items.map((item) => (
          <Typography variant="subtitle1" component="p" dangerouslySetInnerHTML={{ __html: items }}>
            <p>{item}</p>
          </Typography>
        ))}*/}
      </CardContent>
    </Card>
  );
};

export default Alert;
