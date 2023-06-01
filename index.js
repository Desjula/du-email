import Email from "./email";

let index = document.querySelector("#index");

fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails")
.then((response) => {
  return response.json();
})
.then((data) => {
  const emails = data.emails;
  emails.map((email) => <Email sender={email.sender} subject={email.subject} time={email.time} />);

  return 
  inbox.append
  
});