import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface Props {
  currentMode: number | null;
  handleClick: (mode: number | null) => void;
}

const modes = {
  Train: 1,
  "Light Rail": 4,
  Bus: 5,
  Coach: 7,
  Ferry: 9,
  "School Bus": 11,
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

const Modes = ({ currentMode, handleClick }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Modes
      </Typography>
      <ButtonGroup color="primary">
        {Object.entries(modes).map(([text, mode]) => (
          <Button
            key={text}
            variant={currentMode === mode ? "contained" : "outlined"}
            onClick={() => handleClick(currentMode === mode ? null : mode)}
          >
            {text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Modes;
