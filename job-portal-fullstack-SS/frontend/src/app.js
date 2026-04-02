const API = "http://localhost:5000/api/jobs";

async function loadJobs(){
  const res = await fetch(API);
  const data = await res.json();
  document.getElementById("jobs").innerHTML =
    data.map(j=>`<li>${j.title}</li>`).join("");
}

async function addJob(){
  const title = document.getElementById("title").value;
  await fetch(API,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"YOUR_TOKEN"
    },
    body: JSON.stringify({title, company:"Demo", location:"India"})
  });
  loadJobs();
}

loadJobs();
