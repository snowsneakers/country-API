let input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    input = document.querySelector("input").value;
    console.log(input);
    let url = `https://restcountries.com/v3.1/name/${input}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.querySelector("img").src = data[0].flags.png;
        document.querySelector(
          ".name"
        ).innerText = `Country: ${data[0].name.common}`;
        document.querySelector(
          ".capName"
        ).innerText = `Capital: ${data[0].capital}`;
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
});


