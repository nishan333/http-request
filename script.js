var xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

fetch("https://example.com")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
