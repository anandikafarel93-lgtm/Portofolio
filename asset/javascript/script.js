const socialLinks = {
  'btn-github': 'https://github.com',
  'btn-facebook': 'https://facebook.com',
  'btn-instagram': 'https://instagram.com'
};

Object.keys(socialLinks).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(socialLinks[id], '_blank', 'noopener,noreferrer');
    });
  }
});

const ProjectMe = 'Dashboard'; 
const MyProject = [
{
    id: 1,
    title: "Project 1",
    desc: "recording and calculating expenses at every moment",
    image: "Project_Dumbways2.jpeg",
    tech: ["Html", "CSS", "Bootstrapt"],
    url: ["http://127.0.0.1:5503"]
},
{
    id: 2,
    title: "Project 2",
    desc: "Send a message to a friend and save it to LocalStorage",
    image: "Project_Dumbways.jpeg",
    tech: ["Html", "CSS", "Bootstarpt", "JavaScript"],
    url: ["http://127.0.0.1:5502/tugas.html"]
},
{
    id: 3,
    title: "Project 3",
    desc: "Calculate the students' average score based on the total sum.",
    image: "Project_Dumbways3.jpeg",
    tech: ["Html", "CSS", "JavaScript"],
    url: ["http://127.0.0.1:5501/index.html"]
}
]

localStorage.setItem(ProjectMe, JSON.stringify(MyProject));

const temp = localStorage.getItem(ProjectMe);
const savedData = JSON.parse(temp);
const projectItems = document.getElementById("project_id");

savedData.forEach((itemData) => {
    const childDiv = document.createElement('div');
        childDiv.className = 'col-12 col-md-4';
    
    let techData = '';
    
    itemData.tech.forEach(element => {
        techData = techData + `<span class="tag-category">${element}</span>`;
    });


    childDiv.innerHTML = `
        <div class="project-card h-100 border rounded-3 d-flex flex-column" >
            <div class="project-preview d-flex align-items-center justify-content-center p-3">
               <a href="${itemData.url}" target='_blank'><img src="asset/picture/${itemData.image}" class="img-fluid rounded border shadow-sm w-100 h-100" style="object-fit: cover;" /></a>
            </div>
            <div class="p-3 d-flex flex-column flex-grow-1">
                <h5 class="card-title fw-bold">${itemData.title}</h5>
                <p class="text-muted small mb-3 flex-grow-1">
                    ${itemData.desc}    
                </p>
                <div class="d-flex flex-wrap gap-2">
                    ${techData}
                </div>
            </div>
        </div>
    `;

    projectItems.appendChild(childDiv);
});

const Mytech = `skill`
const technologies = [
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js" }
];

localStorage.setItem(Mytech, JSON.stringify(technologies));

const techContainer = document.getElementById("TechProject");

let techHTML = "";

technologies.forEach((tech) => {
  techHTML += `
    <div class="tech-box d-flex flex-column align-items-center justify-content-center text-center">
      <i class="${tech.icon} tech-icon"></i>
      <div class="tech-name">${tech.name}</div>
    </div>
  `;
});

// 4. Masukkan ke dalam HTML
techContainer.innerHTML = techHTML;



// Menghubungkan ke whatsapp
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const myNumber = "6285880699373"
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsApp = document.getElementById('wa').value.trim();
    const message = document.getElementById('message').value.trim();

    const text = `${name}\n` +
                 `${email}\n\n` +
                 `${whatsApp}\n\n` +
                 `${message}`;

    const encodedText = encodeURIComponent(text);

    const whatsappURL = `https://wa.me/${myNumber}?text=${encodedText}`;

    // Buka WhatsApp di tab baharu
    window.open(whatsappURL, '_blank');
})