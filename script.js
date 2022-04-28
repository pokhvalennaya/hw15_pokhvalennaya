const albums = document.getElementById("albums");

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => {
    for (object in data) {
      const albumTitle = data[object].title;
      let li = document.createElement("li");
      li.innerHTML = albumTitle;
      li.className = "album_title";
      albums.append(li);
    }
  })
  .catch((error) => console.log(error));
