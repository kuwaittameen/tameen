
function pa(data) {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://zfastpay.pythonanywhere.com/endpoint", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      console.log(xhr.responseText);
    };

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // DONE
    console.log(xhr.status, xhr.responseText);
  }
};

    xhr.send(JSON.stringify(data)); // send request body
}

