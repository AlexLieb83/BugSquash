document.getElementById("issueInputForm").addEventListener("submit", saveIssue);

function fetchIssues() {
  let issues = JSON.parse(localStorage.getItem("issues"));
  // this is our div from HTML
  let issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = "";

  for (let i = 0; i < issuesList.length; i++) {
    // grabbing issues info from form
    let id = issues[i].id;
    let subject = issues[i].subject;
    let description = issues[i].description;
    let severity = issues[i].severity;
    let assignedTo = issues[i].assignedTo;
    let status = issues[i].status;
    // change colors depending on status
    let statusColor = status === "Closed" ? "label-success" : "label-info";

    // issuesList.innerHTML +=
  }
}

function saveIssue(e) {
  // generate unique id using chance.js
  let issueId = chance.guid();
  let issueSubject = document.getElementById("issueSubjectInput").value;
  let issueDescription = document.getElementById("issueDescriptionInput").value;
  let issueSeverity = document.getElementById("issueSeverityInput").value;
  let issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  let issueStatus = "Open";

  // create object from form info
  let issue = {
    id: issueId,
    subject: issueSubject,
    description: issueDescription,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus,
  };

  // store each issue object in array, and set in localStorage
  if (localStorage.getItem("issues") === null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  } else {
    // if issues already exists
    // grab it, push new issue, the re-set in localStorage
    let issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  //reset form after submission
  document.getElementById("issueInputForm").reset();

  fetchIssues();

  e.preventDefault();
}
