// @ts-nocheck

import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import {
  yellow,
  amber,
  orange,
  deepOrange,
  red,
} from "@material-ui/core/colors";

interface Props {
  title?: string;
  description?: string;
  priority?: string;
}

const colors = {
  veryLow: yellow,
  low: amber,
  normal: orange,
  high: deepOrange,
  veryHigh: red,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  })
);

// Single item alert
const Alert = ({ title = "", description = "", priority }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={classes.small}
            style={{ background: colors[priority][500] }}
          >
            {" "}
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          className={classes.text}
          primary={<div dangerouslySetInnerHTML={{ __html: title }} />}
          secondary={<div dangerouslySetInnerHTML={{ __html: description }} />}
        />
      </ListItem>
    </>
  );
};

export default Alert;
