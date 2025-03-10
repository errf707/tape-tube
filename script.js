const videos = [
    { id: 1, title: "React Tutorial", url: "https://via.placeholder.com/300" },
    { id: 2, title: "JavaScript Basics", url: "https://via.placeholder.com/300" },
    { id: 3, title: "CSS Flexbox Guide", url: "https://via.placeholder.com/300" }
];

const videoList = document.getElementById("video-list");
const searchInput = document.getElementById("search");

function renderVideos(filter = "") {
    videoList.innerHTML = "";
    videos.filter(video => video.title.toLowerCase().includes(filter.toLowerCase()))
          .forEach(video => {
              const div = document.createElement("div");
              div.className = "video";
              div.innerHTML = `<img src="${video.url}" alt="${video.title}"><h3>${video.title}</h3>`;
              videoList.appendChild(div);
          });
}

searchInput.addEventListener("input", (e) => renderVideos(e.target.value));

renderVideos();
