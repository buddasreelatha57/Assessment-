document.addEventListener('DOMContentLoaded', () => {
  
});

const slides = document.querySelectorAll(".cf-slide");
const prevBtn = document.getElementById("cfPrev");
const nextBtn = document.getElementById("cfNext");
const pagination = document.getElementById("cfPagination");

let current = 1;

/* Create dots */
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "cf-dot";

  dot.addEventListener("click", () => {
    current = index;
    render();
  });

  pagination.appendChild(dot);
});

const dots = document.querySelectorAll(".cf-dot");

function render() {

  slides.forEach(slide => {
    slide.classList.remove(
      "active",
      "prev",
      "next",
      "hidden"
    );
  });

  dots.forEach(dot => dot.classList.remove("active"));

  const prev =
    (current - 1 + slides.length) % slides.length;

  const next =
    (current + 1) % slides.length;

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");

  dots[current].classList.add("active");

  slides.forEach((slide, index) => {
    if (
      index !== current &&
      index !== prev &&
      index !== next
    ) {
      slide.classList.add("hidden");
    }
  });
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  render();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  render();
});

/* Auto Play */
setInterval(() => {
  current = (current + 1) % slides.length;
  render();
}, 4000);

render();



var video1 = [
    {
        title:"Thumbnail",
        time:0
    },
    {
        title:" Pursuit of a Radical Rhapsody",
        time:10
    },
    {
        title:"L30 penthouse",
        time:15
    },
    {
       title:"design",
       time:30
    },
    {
        title:"library",
        time:42
    },
    {
        title:"kitchen",
        time:76
    },
    {
        title:"Living Area",
        time:130
    },
    {
        title:"BedRoom",
        time:175
    },
    {
        title:"Garden",
        time:210
    },
    {
        title:"overview of floors",
        time:270
    },
    {
        title:"sitting/Hall",
        time:305
    },
    {
        title:"working Area",
        time:340
    },
    {
        title:"kids Bedroom",
        time:372
    },
    {
        title:"exit to garden",
        time:398
    }
];

var video2 = [
    {
        title:"Introduction",
        time:0
    },
    {
        title:"roadway",
        time:19
    },
    {
        title:"gargare areas",
        time:73
    },
    {
        title:"drone view",
        time:93
    },
    {
        title:"beautifuljogging area",
        time:154
    },
    {
        title:"swimming pool",
        time:169
    },
    {
        title:"ground Area",
        time:200
    },
    {
        title:"road",
        time:220
    },
    {
        title:"overview",
        time:258
    }
];

var video3 = [
    {
        title:"Thumbnail",
        time:0
    },
    {
        title:"gargage",
        time:8
    },
    {
        title:"Sitting area",
        time:20
    },
    {
        title:"1st floor living area",
        time:63
    },
    {
        title:"library",
        time:75
    },
    {
        title:"kitchen",
        time:104
    },
    {
        title:"garden",
        time:120
    },
    {
        title:"bedroom",
        time:148
    },
    {
        title:"exit to pond",
        time:170
    }
];

function loadVideo(videoId, chapters) {

    document.getElementById("youtubePlayer").src =
        `https://www.youtube.com/embed/${videoId}`;

    renderChapters(videoId, chapters);
}

 


function renderChapters(
    videoId,
    chapters
){

    const container =
        document.getElementById(
            "chapters"
        );

    container.innerHTML = "";

    chapters.forEach(chapter=>{

        container.innerHTML += `
            <div class="chapter"
                 onclick="jumpTo(
                    '${videoId}',
                    ${chapter.time}
                 )">

                ${formatTime(chapter.time)}
                - ${chapter.title}

            </div>
        `;

    });

}

function jumpTo(videoId,time){

    document.getElementById(
        "youtubePlayer"
    ).src =
    `https://www.youtube.com/embed/${videoId}?start=${time}&autoplay=1`;

}

function formatTime(seconds){

    const mins =
        Math.floor(seconds/60);

    const secs =
        seconds%60;

    return `${mins}:${String(secs)
        .padStart(2,"0")}`;

}

loadVideo(
    "RJTCAL1DRro",
    video1
);




// const startBtn = document.getElementById("startWatchBtn");
// const leadModal = document.getElementById("leadModal");
// const closeBtn = document.getElementById("closeModal");
// const leadForm = document.getElementById("leadForm");

// startBtn.addEventListener("click", () => {

//     startBtn.disabled = true;
//     startBtn.textContent = "Watching...";

//     setTimeout(() => {
//         leadModal.classList.add("show");
//     }, 6000);

// });

// closeBtn.addEventListener("click", () => {
//     leadModal.classList.remove("show");
// });

// leadForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     alert("Lead Captured Successfully!");

//     leadModal.classList.remove("show");
//     leadForm.reset();
// });








const videoOverlay = document.getElementById("videoOverlay");
const leadModal = document.getElementById("leadModal");
const closeBtn = document.getElementById("closeModal");
const leadForm = document.getElementById("leadForm");

videoOverlay.addEventListener("click", () => {

    // Remove overlay so user can interact with video
    videoOverlay.style.display = "none";

    // Show form after 6 seconds
    setTimeout(() => {
        leadModal.classList.add("show");
    }, 6000);

});

closeBtn.addEventListener("click", () => {
    leadModal.classList.remove("show");
});

leadForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("🎉 Form Submitted Successfully!\n\nThank you for your interest. Our team will contact you soon.");

    leadModal.classList.remove("show");
    leadForm.reset();

});