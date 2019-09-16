workflow "Deploy to Firebase" {
  on = "push"
  resolves = ["Deploy"]
}

action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install" {
  uses = "actions/npm@master"
  args = "ci"
  needs = ["Master"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "run build"
  needs = ["Install"]
}

action "Deploy" {
  uses = "natemoo-re/action-firebase@master"
  args = "deploy"
  secrets = [
    "FIREBASE_CI",
  ]
  needs = ["Build"]
}
