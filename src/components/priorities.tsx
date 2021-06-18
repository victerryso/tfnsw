import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface Props {
  currentPriority: string | null;
  handleClick: (value: string) => void;
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

const Modes = ({ currentPriority, handleClick }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Priority
      </Typography>
      <ButtonGroup color="primary">
        {Object.entries(priorities).map(([text, value]) => (
          <Button
            variant={currentPriority === value ? "contained" : "outlined"}
            onClick={() => handleClick(value)}
          >
            {text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Modes;
