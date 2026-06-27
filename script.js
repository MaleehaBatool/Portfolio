// ---- TYPING EFFECT ----
const text = "Full Stack Developer · AI Enthusiast  · React & Node.js";
let idx = 0;
const typingEl = document.querySelector(".typing");

function typeEffect() {
    if (idx < text.length) {
        typingEl.innerHTML = text.slice(0, idx + 1);
        idx++;
        setTimeout(typeEffect, 45);
    }
}
window.addEventListener("load", typeEffect);

// ---- SCROLL REVEAL (Intersection Observer) ----
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
    }
);

sections.forEach((section) => observer.observe(section));

// ---- RESUME FUNCTIONS ----
// ---- RESUME DOWNLOAD (PDF) ----
function downloadResume() {
    // Direct PDF download from local file
    const link = document.createElement('a');
    link.href = 'resume.pdf';  // Apni PDF file ka naam
    link.download = 'Maleeha_Batool_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// ---- CERTIFICATE FUNCTIONS ----
function openCertificate(certId) {
    const modal = document.getElementById('certModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCertificate() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function downloadCertificate() {
    const certContent = `
Certificate of Completion

This certifies that

Maleeha Batool

has successfully completed the

Web Penetration Testing

course offered by PSDI

Date: 2025
    `;

    const blob = new Blob([certContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Web_Penetration_Testing_Certificate.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeCertificate();
    }
}

// ---- SMOOTH SCROLL FOR NAV ----
document.querySelectorAll('nav a, .btn-primary, .btn-secondary').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
