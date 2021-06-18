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

// Buttons to filter different modes
const Modes = ({ currentMode, handleClick }: Props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Modes
      </Typography>
      <ButtonGroup color="primary" size={matches ? "medium" : "small"}>
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
