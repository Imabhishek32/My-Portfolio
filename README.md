# Abhishek | Portfolio Website

A responsive, single-page personal portfolio built with HTML, CSS, and
JavaScript — showcasing skills, projects, and professional experience as a
Python / Django / FastAPI developer. Includes a real-time 3D visual layer
(three.js) with interactive tilt and glow effects on top of a clean,
Bootstrap-based layout.

**Live demo:** _add your deployed link here_

---

## Features

- Responsive layout built on Bootstrap 5, with a sticky navbar and
  scroll-spy active-link highlighting
- Light / dark theme toggle with preference saved in `localStorage`
- Animated typing effect cycling through roles (Python Developer, Django |
  FastAPI Developer, Agentic AI Developer, etc.)
- Sections for Home, About, Skills, Projects, Experience, Resume, and
  Contact
- Downloadable resume (PDF)
- Contact form with client-side submit handling
- Scroll-to-top button
- **3D enhancement layer:**
  - Real-time three.js hero scene (rotating wireframe icosahedron + torus
    knot with a blue/violet/cyan light setup and mouse-driven parallax)
  - Pointer-following 3D tilt and glow on skill and project cards
  - Animated glow halo behind the profile photo
  - Full support for `prefers-reduced-motion` and touch devices (3D
    effects gracefully disable where appropriate)

---

## Tech Stack

| Layer      | Technology                                   |
|------------|-----------------------------------------------|
| Markup     | HTML5                                         |
| Styling    | CSS3, [Bootstrap 5.3.3](https://getbootstrap.com/) |
| Icons      | [Font Awesome 6.5.2](https://fontawesome.com/) |
| Scripting  | Vanilla JavaScript                            |
| 3D Graphics| [three.js](https://threejs.org/) (r160, via CDN) |

No build tools, bundlers, or frameworks required — the site runs directly
in the browser.

---

## Project Structure

```
portfolio/
├── index.html        # Page markup and section content
├── style.css          # Core layout, theme, and component styles
├── script.js           # Theme toggle, typing effect, nav, contact form
├── style-3d.css        # Additive styles for the 3D visual layer
├── script-3d.js         # three.js hero scene + card tilt interactions
├── abhi.png            # Profile photo
└── AbhisekCV2026.pdf   # Downloadable resume
```

---

## Getting Started

1. Clone or download this repository.
2. Make sure `index.html`, `style.css`, `script.js`, `style-3d.css`,
   `script-3d.js`, your profile image, and your resume PDF are all in the
   same folder.
3. Open `index.html` directly in a browser, or serve it locally:

   ```bash
   # Python 3
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

No build step or dependency installation is needed — Bootstrap, Font
Awesome, and three.js are all loaded via CDN.

---

## Customization

- **Content:** edit the relevant section in `index.html` (About, Skills,
  Projects, Experience, Contact).
- **Colors:** core theme colors are CSS variables at the top of
  `style.css` (`--bg`, `--text`, `--card`, `--primary`); 3D accent colors
  (`--accent-violet`, `--accent-cyan`, glow colors) are defined at the top
  of `style-3d.css`.
- **Resume file:** replace `AbhisekCV2026.pdf` and update the `href` on
  the two "Download Resume" buttons in `index.html` if the filename
  changes.
- **3D scene:** shape geometry, colors, and motion speed can be adjusted
  in `script-3d.js` (`initHeroScene`); tilt sensitivity for cards can be
  adjusted in `initCardTilt`.

---

## Browser Support

Built and tested against current versions of Chrome, Firefox, Edge, and
Safari. The 3D layer requires WebGL support (available in all modern
browsers) and automatically falls back to a static scene when
`prefers-reduced-motion` is enabled.

---

## Contact

- **Email:** [abhishekcode73@gmail.com](mailto:abhishekcode73@gmail.com)
- **GitHub:** [github.com/Imabhishek32](https://github.com/Imabhishek32)
- **LinkedIn:** [linkedin.com/in/abhishek-chaurasiya-18245b272](https://www.linkedin.com/in/abhishek-chaurasiya-18245b272/)

---

## License

© 2026 Abhishek. All rights reserved. Feel free to fork this repository
for learning purposes; please avoid copying the personal content
(name, bio, resume, project descriptions) as-is.
