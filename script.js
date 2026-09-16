:root {
    --background: #061426;
    --background-light: #0b2342;
    --card: rgba(30, 136, 229, .08);
    --card-hover: rgba(30, 136, 229, .16);
    --surface: #0b2342;
    --text: #f2f8ff;
    --muted: #a8c4df;
    --primary: #38bdf8;
    --blue: #2563eb;
    --blue-light: #60a5fa;
    --line: rgba(96, 165, 250, .2);
    --shadow: 0 25px 60px rgba(0, 70, 160, .3);
}

body.light-theme {
    --background: #f4f8fc;
    --background-light: #ffffff;
    --surface: #ffffff;
    --card: rgba(37, 99, 235, .06);
    --card-hover: rgba(37, 99, 235, .12);
    --text: #10233f;
    --muted: #526783;
    --line: rgba(37, 99, 235, .2);
    --shadow: 0 25px 60px rgba(37, 99, 235, .15);
    color: var(--text);
    background: linear-gradient(135deg, #f4f8fc, #e8f1fb);
}

body.light-theme .header {
    background: rgba(255, 255, 255, .82);
}

body.light-theme .floating-card {
    background: rgba(255, 255, 255, .9);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    scroll-behavior: smooth;
    font-family: "DM Sans", sans-serif;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 10rem;
}

body {
    color: var(--text);
    background:
        radial-gradient(circle at 10% 5%, rgba(37, 99, 235, .24), transparent 26rem),
        radial-gradient(circle at 90% 30%, rgba(56, 189, 248, .18), transparent 30rem),
        linear-gradient(135deg, #061426, #0b2342);
    overflow-x: hidden;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .25;
    background-image: linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
    background-size: 5rem 5rem;
    mask-image: linear-gradient(to bottom, black, transparent);
}

h1, h2, h3, .logo {
    font-family: "Space Grotesk", sans-serif;
}

a {
    color: inherit;
}

button,
input,
textarea {
    font: inherit;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
}

img {
    width: 100%;
    display: block;
    object-fit: cover;
}

.section {
    width: min(118rem, 90%);
    min-height: auto;
    margin: auto;
    padding: 12rem 0 5rem;
}

.header {
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    padding: 2.2rem 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(8, 17, 31, .72);
    border-bottom: 1px solid transparent;
    backdrop-filter: blur(1.5rem);
    transition: .3s;
}

.header.scrolled {
    border-color: var(--line);
}

.logo {
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: -.08rem;
}

.logo span,
h1 span,
h2 span {
    color: var(--primary);
}

.navbar {
    display: flex;
    gap: 3.2rem;
}

.navbar a {
    position: relative;
    color: var(--muted);
    font-size: 1.5rem;
    transition: .3s;
}

.navbar a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -.8rem;
    width: 0;
    height: .2rem;
    background: var(--primary);
    transition: .3s;
}

.navbar a:hover,
.navbar a.active {
    color: var(--text);
}

.navbar a:hover::after,
.navbar a.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    color: var(--text);
    background: none;
    cursor: pointer;
    font-size: 3rem;
}

.site-search {
    position: relative;
    display: flex;
    align-items: center;
    width: min(24rem, 22vw);
    margin-left: auto;
    margin-right: 2rem;
}

.site-search input {
    width: 100%;
    padding: 1rem 4rem 1rem 1.4rem;
    color: var(--text);
    background: rgba(37, 99, 235, .1);
    border: 1px solid var(--line);
    border-radius: .8rem;
    outline: none;
    font-size: 1.3rem;
}

.site-search input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 .2rem rgba(56, 189, 248, .12);
}

.site-search input::placeholder {
    color: var(--muted);
}

.site-search button {
    position: absolute;
    right: .4rem;
    display: grid;
    place-items: center;
    width: 3.2rem;
    height: 3.2rem;
    color: var(--primary);
    background: transparent;
    border: 0;
    cursor: pointer;
    font-size: 1.9rem;
}

.search-results {
    position: absolute;
    top: calc(100% + 1rem);
    right: 0;
    z-index: 1200;
    display: none;
    width: 26rem;
    padding: .7rem;
    background: var(--background-light);
    border: 1px solid var(--line);
    border-radius: 1rem;
    box-shadow: var(--shadow);
}

.search-results.show {
    display: block;
}

.search-results a {
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1rem;
    color: var(--muted);
    border-radius: .6rem;
    font-size: 1.3rem;
}

.search-results a:hover {
    color: var(--text);
    background: var(--card-hover);
}

.search-results a i {
    color: var(--primary);
    font-size: 1.8rem;
}

.search-empty {
    padding: 1rem;
    color: var(--muted);
    font-size: 1.3rem;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    align-items: center;
    gap: 7rem;
    padding-top: 14rem;
}

.available {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: .8rem 1.2rem;
    margin-bottom: 2.5rem;
    color: var(--primary);
    background: rgba(37, 99, 235, .12);
    border: 1px solid rgba(56, 189, 248, .3);
    border-radius: 10rem;
    font-size: 1.25rem;
}

.available span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 0 1rem var(--primary);
}

.eyebrow {
    color: var(--primary);
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: .25rem;
    margin-bottom: 1.8rem;
}

.hero h1 {
    max-width: 75rem;
    font-size: clamp(4.5rem, 7vw, 8rem);
    line-height: 1.02;
    letter-spacing: -.5rem;
    margin-bottom: 2.5rem;
}

.hero-description,
.about-content > p,
.contact-box p {
    max-width: 58rem;
    color: var(--muted);
    font-size: 1.7rem;
    line-height: 1.8;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    margin: 3rem 0;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    padding: 1.35rem 2.2rem;
    border-radius: .8rem;
    font-size: 1.45rem;
    font-weight: 700;
    transition: .3s;
}

.btn-primary {
    color: #ffffff;
    background: linear-gradient(135deg, var(--blue), var(--primary));
    box-shadow: 0 1rem 2.5rem rgba(37, 99, 235, .35);
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--primary), var(--blue-light));
}

.btn-outline {
    border: 1px solid var(--line);
    color: var(--text);
}

.btn-outline:hover {
    border-color: var(--primary);
    color: var(--primary);
}

.hero-socials {
    display: flex;
    gap: 1rem;
}

.hero-socials a {
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    color: var(--muted);
    border: 1px solid var(--line);
    border-radius: 50%;
    font-size: 2rem;
    transition: .3s;
}

.hero-socials a:hover {
    color: var(--primary);
    border-color: var(--primary);
    transform: translateY(-.3rem);
}

.hero-visual {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 50rem;
}

.image-ring {
    position: absolute;
    width: min(42rem, 90%);
    aspect-ratio: 1;
    border: 1px solid rgba(102, 227, 207, .3);
    border-radius: 50%;
    box-shadow: 0 0 8rem rgba(102, 227, 207, .12);
}

.image-ring::before {
    content: "";
    position: absolute;
    inset: 2rem;
    border: 1px dashed rgba(85, 185, 245, .4);
    border-radius: 50%;
    animation: rotate 20s linear infinite;
}

.hero-image {
    position: relative;
    width: min(33rem, 75%);
    aspect-ratio: 1;
    overflow: hidden;
    border: 1rem solid rgba(255,255,255,.06);
    border-radius: 50%;
    box-shadow: var(--shadow);
}

.hero-image img {
    height: 100%;
    object-fit: cover;
}

.floating-card {
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1.2rem 1.5rem;
    color: var(--text);
    background: rgba(15, 31, 50, .8);
    border: 1px solid var(--line);
    border-radius: 1rem;
    box-shadow: var(--shadow);
    font-size: 1.3rem;
    animation: float 4s ease-in-out infinite;
}

.floating-card i {
    color: var(--primary);
    font-size: 2.2rem;
}

.card-one { top: 16%; right: 2%; }
.card-two { bottom: 15%; left: 1%; animation-delay: 1s; }

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding-top: 3rem;
    padding-bottom: 10rem;
}

.stat-item {
    padding: 2rem;
    border-left: 1px solid var(--line);
}

.stat-item strong {
    display: block;
    font-family: "Space Grotesk", sans-serif;
    font-size: 3.5rem;
}

.stat-item strong span {
    color: var(--primary);
}

.stat-item p {
    margin-top: .5rem;
    color: var(--muted);
    font-size: 1.4rem;
}

.about {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    align-items: center;
    gap: 8rem;
}

.about-image {
    position: relative;
}

.about-image img {
    height: 48rem;
    border-radius: 1.5rem;
    filter: saturate(.8);
}

.experience-badge {
    position: absolute;
    right: -2rem;
    bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    color: var(--text);
    background: var(--background-light);
    border: 1px solid var(--line);
    border-radius: 1rem;
    box-shadow: var(--shadow);
    font-size: 1.3rem;
}

.experience-badge i {
    color: var(--primary);
    font-size: 3rem;
}

.about-content h2,
.section-heading h2,
.contact-box h2 {
    max-width: 65rem;
    font-size: clamp(3.2rem, 5vw, 5.5rem);
    line-height: 1.1;
    letter-spacing: -.2rem;
    margin-bottom: 2rem;
}

.profile-philosophy {
    display: grid;
    gap: 2rem;
    margin: 3rem 0;
}

.profile-block {
    padding: 2.2rem;
    background: rgba(37, 99, 235, .08);
    border: 1px solid var(--line);
    border-left: 3px solid var(--primary);
    border-radius: 1rem;
}

.profile-block-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
}

.profile-block-heading i {
    color: var(--primary);
    font-size: 2.5rem;
}

.profile-block-heading h3 {
    margin: 0;
    font-size: 2rem;
}

.profile-block p {
    color: var(--muted);
    font-size: 1.4rem;
    line-height: 1.8;
}

.profile-block p + p {
    margin-top: 1.2rem;
}

.skills {
    margin: 3rem 0;
    max-width: 55rem;
}

.skill {
    margin-bottom: 1.8rem;
}

.skill > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: .8rem;
    color: var(--muted);
    font-size: 1.3rem;
}

.skill b {
    color: var(--text);
}

.progress {
    height: .6rem;
    overflow: hidden;
    background: rgba(255,255,255,.1);
    border-radius: 1rem;
}

.progress span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, var(--blue), var(--primary));
    border-radius: inherit;
}

.tools {
    margin-top: 3rem;
}

.tools h3 {
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
}

.tools-list {
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
}

.tools-list span {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    padding: .8rem 1.2rem;
    color: var(--muted);
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: .8rem;
    font-size: 1.3rem;
}

.tools-list i {
    color: var(--primary);
    font-size: 1.8rem;
}

.text-link,
.card-link {
    display: inline-flex;
    align-items: center;
    gap: .7rem;
    color: var(--primary);
    font-size: 1.4rem;
    font-weight: 700;
}

.education-list {
    display: grid;
    gap: 1.5rem;
    width: min(85rem, 100%);
}

.education-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 2rem;
    padding: 2.5rem 3rem;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 1.5rem;
    transition: .3s;
}

.education-item:hover {
    border-color: rgba(102, 227, 207, .45);
    transform: translateX(.5rem);
}

.education-icon {
    display: grid;
    place-items: center;
    width: 5rem;
    height: 5rem;
    color: var(--primary);
    background: rgba(37, 99, 235, .16);
    border-radius: 1rem;
    font-size: 2.7rem;
}

.education-level,
.education-status {
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .1rem;
    text-transform: uppercase;
}

.education-content h3 {
    margin: .5rem 0 .7rem;
    font-size: 2.1rem;
}

.education-content p {
    max-width: 65rem;
    font-size: 1.4rem;
    line-height: 1.7;
}

.education-subtitle {
    margin-top: 1.2rem;
    color: var(--primary);
    font-size: 1.4rem;
    font-weight: 600;
}

.coursework-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: .8rem;
    padding: 0;
    list-style: none;
}

.coursework-list li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    min-height: 8rem;
    padding: 1.2rem;
    background: rgba(37, 99, 235, .08);
    border: 1px solid var(--line);
    border-radius: .9rem;
    transition: .3s;
}

.coursework-list li:hover {
    background: rgba(102, 227, 207, .1);
    border-color: rgba(102, 227, 207, .45);
    transform: translateY(-.3rem);
}

.coursework-list li > i {
    color: var(--primary);
    font-size: 2rem;
}

.coursework-list li span {
    display: flex;
    flex-direction: column;
    gap: .4rem;
    color: var(--text);
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.4;
}

.coursework-list small {
    color: var(--primary);
    font-size: 1rem;
    letter-spacing: .1rem;
}

.education-status {
    align-self: start;
    padding-top: .4rem;
    color: var(--muted);
    white-space: nowrap;
}

.text-link i,
.card-link i {
    transition: .3s;
}

.text-link:hover i,
.card-link:hover i {
    transform: translateX(.4rem);
}

.section-heading {
    margin-bottom: 4rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.service-card {
    position: relative;
    min-height: 32rem;
    padding: 3rem;
    overflow: hidden;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 1.5rem;
    transition: .3s;
}

.service-card:hover {
    background: var(--card-hover);
    border-color: rgba(102, 227, 207, .45);
    transform: translateY(-.7rem);
}

.service-icon {
    display: grid;
    place-items: center;
    width: 5rem;
    height: 5rem;
    margin-bottom: 3rem;
    color: var(--primary);
    background: rgba(37, 99, 235, .16);
    border-radius: 1rem;
    font-size: 2.8rem;
}

.service-number {
    position: absolute;
    top: 3rem;
    right: 3rem;
    color: rgba(255,255,255,.2);
    font-family: "Space Grotesk", sans-serif;
    font-size: 2rem;
}

.service-card h3 {
    font-size: 2.3rem;
    margin-bottom: 1.3rem;
}

.service-card p {
    min-height: 7rem;
    color: var(--muted);
    font-size: 1.5rem;
    line-height: 1.7;
    margin-bottom: 2rem;
}

.portfolio-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 3rem;
}

.heading-description {
    max-width: 35rem;
    color: var(--muted);
    font-size: 1.5rem;
    line-height: 1.7;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 26rem 26rem;
    gap: 2rem;
}

.project-card {
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    border: 1px solid var(--line);
}

.project-large {
    grid-row: span 2;
}

.project-card img {
    height: 100%;
    transition: .5s;
}

.project-card:hover img {
    transform: scale(1.08);
}

.project-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2.5rem;
    background: linear-gradient(transparent 25%, rgba(4, 12, 22, .95));
}

.project-overlay span {
    color: var(--primary);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: .15rem;
}

.project-overlay h3 {
    margin-top: .7rem;
    font-size: 2.3rem;
}

.project-overlay a {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    color: #07141d;
    background: var(--primary);
    border-radius: 50%;
    font-size: 2rem;
    transform: rotate(45deg);
}

.project-modal {
    position: fixed;
    inset: 0;
    z-index: 1500;
    display: grid;
    place-items: center;
    padding: 2rem;
    background: rgba(2, 8, 14, .78);
    opacity: 0;
    visibility: hidden;
    transition: opacity .25s, visibility .25s;
}

.project-modal.show {
    opacity: 1;
    visibility: visible;
}

.project-modal-content {
    position: relative;
    width: min(58rem, 100%);
    max-height: 90vh;
    overflow-y: auto;
    padding: 4rem;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 1.5rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, .35);
    transform: translateY(1.5rem);
    transition: transform .25s;
}

.project-modal.show .project-modal-content {
    transform: translateY(0);
}

.project-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    color: var(--text);
    background: transparent;
    border: 1px solid var(--line);
    border-radius: 50%;
    cursor: pointer;
    font-size: 2.4rem;
}

.project-modal-close:hover {
    color: #07141d;
    background: var(--primary);
}

.project-modal h2 {
    max-width: 48rem;
    margin: 1rem 0 1.5rem;
}

.project-modal-description {
    color: var(--muted);
    font-size: 1.6rem;
    line-height: 1.8;
}

.project-modal-tools {
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    margin-top: 2.5rem;
}

.project-modal-tools span {
    padding: .7rem 1.2rem;
    color: var(--primary);
    background: rgba(102, 227, 207, .1);
    border: 1px solid rgba(102, 227, 207, .25);
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
}

.contact-information {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.contact-information .section-heading {
    margin-bottom: 2.5rem;
}

.contact-information .section-heading h2 {
    font-size: clamp(2.8rem, 4vw, 4.5rem);
}

.contact-information-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.contact-information-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-height: 9rem;
    padding: 2rem;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 1.2rem;
    transition: .3s;
}

.contact-information-item:hover {
    background: var(--card-hover);
    border-color: rgba(56, 189, 248, .5);
    transform: translateY(-.4rem);
}

.contact-information-item > i {
    display: grid;
    place-items: center;
    flex: 0 0 4.5rem;
    width: 4.5rem;
    height: 4.5rem;
    color: var(--primary);
    background: rgba(37, 99, 235, .16);
    border-radius: 1rem;
    font-size: 2.3rem;
}

.contact-information-item span {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: .5rem;
}

.contact-information-item small {
    color: var(--muted);
    font-size: 1.2rem;
}

.contact-information-item strong {
    overflow-wrap: anywhere;
    font-size: 1.5rem;
}

.contact {
    padding-top: 12rem;
    padding-bottom: 12rem;
}

.contact-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 6rem;
    background: linear-gradient(120deg, rgba(102,227,207,.12), rgba(85,185,245,.06));
    border: 1px solid rgba(102,227,207,.22);
    border-radius: 2rem;
}

.contact-box h2 {
    margin-bottom: 1rem;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.5rem 5%;
    border-top: 1px solid var(--line);
}

.footer-brand,
.footer-navigation,
.footer-socials {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-navigation h3,
.footer-socials h3 {
    color: var(--primary);
    font-size: 1.4rem;
}

.footer-navigation nav {
    display: flex;
    flex-wrap: wrap;
    gap: .8rem 1.5rem;
}

.footer-navigation a,
.footer-socials a {
    color: var(--muted);
    font-size: 1.3rem;
    transition: .3s;
}

.footer-navigation a:hover,
.footer-socials a:hover {
    color: var(--primary);
}

.footer-socials > div {
    display: flex;
    gap: 1rem;
}

.footer-socials > div a {
    display: grid;
    place-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border: 1px solid var(--line);
    border-radius: 50%;
    font-size: 1.8rem;
}

.footer p {
    color: var(--muted);
    font-size: 1.3rem;
}

.back-top {
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    color: #07141d;
    background: var(--primary);
    border-radius: .8rem;
    font-size: 2rem;
}

/* Scroll progress */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 0;
    height: .4rem;
    background: linear-gradient(90deg, var(--blue), var(--primary));
    box-shadow: 0 0 1rem var(--primary);
}

/* Tombol tema */
.theme-toggle {
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    margin-left: auto;
    margin-right: 2rem;
    color: var(--primary);
    background: rgba(37, 99, 235, .12);
    border: 1px solid var(--line);
    border-radius: 50%;
    cursor: pointer;
    font-size: 2rem;
    transition: .3s;
}

.theme-toggle:hover {
    color: #ffffff;
    background: var(--blue);
    transform: rotate(20deg) scale(1.1);
}

/* Efek cursor */
.cursor-glow {
    position: fixed;
    z-index: -1;
    width: 22rem;
    height: 22rem;
    pointer-events: none;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56, 189, 248, .12), transparent 70%);
    transform: translate(-50%, -50%);
    transition: left .15s ease, top .15s ease;
}

/* Efek sparkle */
.sparkle {
    position: fixed;
    z-index: 3000;
    width: .8rem;
    height: .8rem;
    pointer-events: none;
    background: var(--primary);
    border-radius: 50%;
    animation: sparkle-animation .7s ease-out forwards;
}

@keyframes sparkle-animation {
    0% {
        opacity: 1;
        transform: scale(1) translate(0, 0);
    }

    100% {
        opacity: 0;
        transform: scale(0) translate(var(--x), var(--y));
    }
}

@media (max-width: 900px) {
    .hero,
    .about {
        grid-template-columns: 1fr;
        gap: 5rem;
    }

    .hero-content {
        text-align: center;
    }

    .available,
    .hero-actions,
    .hero-socials {
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }

    .hero-visual {
        min-height: 42rem;
    }

    .services-grid {
        grid-template-columns: 1fr 1fr;
    }

    .about-image {
        max-width: 45rem;
        width: 100%;
        margin: auto;
    }
}

@media (max-width: 1100px) and (min-width: 701px) {
    .navbar {
        gap: 1.6rem;
    }

    .navbar a {
        font-size: 1.3rem;
    }

    .site-search {
        width: 18rem;
        margin-right: 1.2rem;
    }

    .theme-toggle {
        margin-right: 1.2rem;
    }
}

@media (max-width: 700px) {
    html { font-size: 55%; }

    .header {
        padding: 1.8rem 5%;
    }

    .menu-toggle {
        display: block;
    }

    .site-search {
        position: absolute;
        top: calc(100% + 1rem);
        left: 5%;
        width: 90%;
        margin: 0;
    }

    .search-results {
        width: 100%;
    }

    .navbar {
        position: absolute;
        top: calc(100% + 6.5rem);
        left: 0;
        width: 100%;
        display: none;
        flex-direction: column;
        gap: 2rem;
        padding: 2.5rem 5%;
        background: var(--background-light);
        border-bottom: 1px solid var(--line);
    }

    .navbar.active {
        display: flex;
    }

    .hero h1 {
        letter-spacing: -.25rem;
    }

    .stats,
    .services-grid {
        grid-template-columns: 1fr 1fr;
    }

    .portfolio-heading,
    .contact-box,
    .footer {
        align-items: flex-start;
        flex-direction: column;
    }

    .education-item {
        grid-template-columns: auto 1fr;
        padding: 2rem;
    }

    .education-status {
        grid-column: 2;
        grid-row: 2;
        padding-top: 0;
    }

    .coursework-list {
        grid-template-columns: 1fr;
    }

    .contact-information-grid {
        grid-template-columns: 1fr;
    }

    .portfolio-grid {
        display: block;
    }

    .project-card {
        height: 28rem;
        margin-bottom: 2rem;
    }

    .contact-box {
        padding: 3rem 2rem;
    }

    .contact-box .btn {
        width: 100%;
    }

    .hero-actions .btn {
        width: 100%;
    }
}

@media (max-width: 450px) {
    .stats,
    .services-grid {
        grid-template-columns: 1fr;
    }

    .hero-visual {
        min-height: 35rem;
    }

    .floating-card {
        transform: scale(.85);
    }

    .card-one { right: -1rem; }
    .card-two { left: -1rem; }

    .about-image img {
        height: 36rem;
    }
}

.contact-form {
    width: min(80rem, 100%);
    margin: 0 auto;
    padding: 3rem;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 1.5rem;
    box-shadow: var(--shadow);
}

.input-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.input-group label {
    margin-bottom: .8rem;
    color: var(--text);
    font-size: 1.4rem;
    font-weight: 600;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 1.4rem 1.6rem;
    color: var(--text);
    background: rgba(255, 255, 255, .05);
    border: 1px solid var(--line);
    border-radius: .8rem;
    font-size: 1.4rem;
    resize: vertical;
    transition: .3s;
}

.input-group input:focus,
.input-group textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 1.5rem rgba(56, 189, 248, .15);
}

.input-group input::placeholder,
.input-group textarea::placeholder {
    color: var(--muted);
}

.contact-form .btn {
    border: none;
    cursor: pointer;
}

@media (max-width: 600px) {
    .contact-form {
        padding: 2rem;
    }

    .input-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .contact-form .btn {
        width: 100%;
    }
}

.identity-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
    margin: 2.8rem 0;
}

.identity-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.4rem;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 1rem;
    transition: .3s ease;
}

.identity-item:hover {
    transform: translateY(-.3rem);
    border-color: var(--primary);
    background: var(--card-hover);
}

.identity-item i {
    color: var(--primary);
    font-size: 2.4rem;
}

.identity-item span,
.identity-item strong {
    display: block;
}

.identity-item span {
    margin-bottom: .3rem;
    color: var(--muted);
    font-size: 1.2rem;
}

.identity-item strong {
    color: var(--text);
    font-size: 1.35rem;
}

@media (max-width: 600px) {
    .identity-list {
        grid-template-columns: 1fr;
    }
}
