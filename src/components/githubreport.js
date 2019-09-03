import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textButton: {
    margin: theme.spacing(1),
    color: 'rgb(0,122,255)',
    textTransform: 'none', // Disable uppercased
  },
}))

function GithubReport({ articleId }) {
  const classes = useStyles()
  const githubUrl = "https://github.com/ChrisXu/chrisxu.wtf"
  const issuesUrl = githubUrl.concat("/issues")
  const articleUrl = githubUrl.concat("/blob/master/src/pages").concat(articleId).concat("index.md")
  
  return (
    <div>
      <h5>
        Any suggestion? 
        <Button href={issuesUrl} className={classes.textButton}>
          Create issue
        </Button>
        or
        <Button href={articleUrl} className={classes.textButton}>
          Make PullRequest
        </Button></h5>
    </div>
  )
}

export default GithubReport