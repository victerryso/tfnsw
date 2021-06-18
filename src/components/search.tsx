import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface Props {
  query: string;
  handleChange: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

const Search = ({ query, handleChange }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(event) => handleChange(event.target.value)}
        autoFocus
      />
    </div>
  );
};

export default Search;
