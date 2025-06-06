 document.querySelector('#complaintForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const inputs = document.querySelectorAll('#complaintForm input, #complaintForm textarea');
  formData.set("mobile_number", inputs[0].value);
  formData.set("otp", inputs[1].value);
  formData.set("pnr_number", inputs[2].value);
  formData.set("recent_station", inputs[3].value);
  formData.set("incident_date", inputs[4].value);
  formData.set("file", inputs[5].files[0]);
  formData.set("description", inputs[6].value);

  const res = await fetch('http://localhost:3000/submit-complaint', {
    method: 'POST',
    body: formData
  });

  const result = await res.json();
  alert(result.message);
});
