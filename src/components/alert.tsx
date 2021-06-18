import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

interface Props {
  title?: string;
  description?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
  })
);

const Alert = ({ title = "", description = "" }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <ListItem>
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
