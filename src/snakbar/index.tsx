import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { selectSnackbar, RemoveSnackbar, SnakbarState } from "./snakbarSlice";

export default function SimpleSnackbar() {
  interface State extends SnakbarState {
    open: boolean;
    size: "small" | "medium" | "large";
    color:
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning";

    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
    duration: number;
  }
  const [state, setState] = React.useState<State>({
    open: false,
    size: "small",
    duration: 6000,
    color: "inherit",
    vertical: "bottom",
    horizontal: "right",
    message: "",
  });

  const { vertical, horizontal, open, message, duration } = state;

  const dispatch = useAppDispatch();
  const snackbar = useAppSelector(selectSnackbar);

  React.useEffect(() => {
    if (snackbar.length > 0) {
      setState({ ...state, message: snackbar[0].message });
      dispatch(RemoveSnackbar());
    }
  }, [snackbar]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}
