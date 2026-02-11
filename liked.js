function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

const episodesDiv = document.getElementById("episodes");

let likedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];

function renderLiked(){
  episodesDiv.innerHTML = "";

  likedSongs.forEach((ep)=>{
    const div = document.createElement("div");
    div.className="episode";

    div.innerHTML = `
      <strong>${ep.title}</strong><br>
      <small>${ep.desc}</small>
    `;

    episodesDiv.appendChild(div);
  });
}

renderLiked();
