import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 'auto',
    backgroundColor: 'rgb(0,122,255)',
    '&:hover': {
      backgroundColor: 'rgba(0,122,255,0.7)',
    },
  },
  snackbar: {
    backgroundColor: 'rgb(52,199,89)',
  },
}))

function Feedback() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const feedbackUrl = "https://hooks.slack.com/services/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"

  function handleClick(e) {
    const whatever = document.getElementById("feedback").value

    if (whatever !== "") {
      axios.post(feedbackUrl, JSON.stringify({ "text": whatever }))
      .then((response) => {
        console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
        document.getElementById("feedback").value = ''
        setOpen(true);
      })
      .catch((error) => {
        console.log('FAILED: Send slack webhook', error);
      });
    }

    e.preventDefault()
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div class="feedback">
      <h2>Your Opinion Matters</h2>
      <textarea id="feedback" placeholder="Tell me your thought about this article">
      </textarea>
      <div style={{ display: "flex" }}>
        <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
          Submit
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}>
            <SnackbarContent className={classes.snackbar} message={<span id="message-id">Thank you!</span>}></SnackbarContent>
        </Snackbar>
      </div>
    </div>
  )
}

export default Feedback