import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

interface Props {
  mode: number | undefined;
  handleClick: (value: number) => void;
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
  })
);

const Modes = ({ mode, handleClick }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary">
        {Object.entries(modes).map(([text, value]) => (
          <Button
            variant={mode === value ? "contained" : "outlined"}
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
