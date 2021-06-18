import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  currentPriority: string | null;
  handleClick: (value: string | null) => void;
}

const priorities = {
  "Very low": "veryLow",
  Low: "low",
  Normal: "normal",
  High: "high",
  "Very high": "veryHigh",
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    title: {
      display: "inline-block",
      margin: theme.spacing(2),
    },
  })
);

// Buttons to filter different priorities
const Priorities = ({ currentPriority, handleClick }: Props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Priority
      </Typography>
      <ButtonGroup color="primary" size={matches ? "medium" : "small"}>
        {Object.entries(priorities).map(([text, value]) => (
          <Button
            variant={currentPriority === value ? "contained" : "outlined"}
            onClick={() =>
              handleClick(currentPriority === value ? null : value)
            }
          >
            {text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Priorities;
