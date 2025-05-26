# CollegeTips Website - Photo Gallery Section

## Project Overview

This project delivers an interactive, stylish, and fun Photo Gallery section for the CollegeTips official website. Designed to showcase the vibrant moments of CollegeTips' team, campaigns, and events, this gallery is built using standard web technologies (HTML, CSS, JavaScript) focusing on user experience, responsiveness, and visual appeal.

## Features

* **Categorized Albums:** Photos are organized into intuitive categories:
    * Team Vibes
    * Different Schemes
    * Work Hard, Play Hard
    * Behind-The-Scenes
    * Office Tour
* **Dynamic Filtering:** Users can easily sort photos by category using interactive filter buttons.
* **Engaging Hover Effects:** Each photo item features:
    * **Zoom-in Effect:** A subtle zoom on the image when hovered.
    * **Caption Overlay:** A descriptive caption slides up from the bottom on hover.
* **Fullscreen Lightbox View:** Clicking on any thumbnail opens a larger, immersive view of the image with its caption.
* **Responsive Design:** The gallery is fully responsive, ensuring an optimal viewing experience across various devices (desktops, tablets, mobile phones).
* **Dark/Light Mode Toggle:** A user-friendly switch allows users to toggle between dark and light themes, enhancing accessibility and user preference.

## Technologies Used

* **HTML5:** For structuring the web page content.
* **CSS3:** For styling, layout, animations, transitions, and responsive design (using Media Queries).
* **JavaScript (Vanilla JS):** For handling all interactive functionalities including filtering, fullscreen view, and theme switching.
* **Font Awesome:** Used for convenient iconography (sun, moon, category icons).

## How to Run the Project Locally

To set up and view this photo gallery on your local machine, follow these simple steps:

1.  **Clone or Download:** Get the project files. If using Git:
    ```bash
    git clone https://github.com/aadithyaa9/gallery.git
    cd <your-repository-name>
    ```
    Alternatively, download the ZIP file and extract it.

2.  **Project Structure:** Ensure your folder structure looks like this:
    ```
    collegetips-gallery/
    ├── index.html
    ├── style.css
    ├── script.js
    └── images/
          bunch of images
    ```
    **Important:** Make sure all your image files are placed inside the `images/` folder and their filenames match those referenced in `index.html`. (e.g., `images/team1.jpg`, `images/creative1.jpg`).

3.  **Open in Browser:** Simply double-click the `index.html` file. It will open in your default web browser, and you can interact with the gallery.

## Design & Development Choices

* **Clean Separation of Concerns:** HTML for structure, CSS for presentation, and JavaScript for behavior are kept in separate files for better maintainability.
* **Semantic HTML:** Used appropriate HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`) for better accessibility and SEO.
* **CSS Variables (Custom Properties):** Employed CSS variables (`--light-bg`, `--dark-text`, etc.) for efficient theme management, making it easy to switch between dark and light modes with minimal code duplication.
* **Flexible Box (`flexbox`) and Grid (`grid`) Layouts:** Utilized modern CSS layout techniques for robust and responsive positioning of elements, especially for the filter buttons and the image gallery grid.
* **Event Delegation (JavaScript):** For filter buttons, event listeners are attached to a parent element where possible to improve performance and manage dynamically added elements.
* **Local Storage for Theme:** The selected dark/light mode preference is saved in `localStorage`, so the user's choice persists across browser sessions.
* **Accessibility Considerations:** Focused on clear visual feedback for interactive elements (hover states, active filter buttons) and keyboard accessibility for the fullscreen overlay (Escape key).

## Challenges Faced & Solutions

1.  **Image Aspect Ratios in Grid:**
    * **Challenge:** Ensuring all images in the grid had a consistent visual size and layout despite varying original aspect ratios, preventing layout shifts.
    * **Solution:** Applied `height: 250px;` and `object-fit: cover;` to the `<img>` tags within `.gallery-item`. This crops images to fit the container while maintaining their aspect ratio, providing a uniform grid.

2.  **Responsive Layout for Filters & Gallery:**
    * **Challenge:** Making the filter buttons and the main photo grid adapt gracefully to different screen sizes, especially on mobile devices.
    * **Solution:** Employed CSS Flexbox for the filter buttons (`flex-wrap: wrap;`) and CSS Grid with `repeat(auto-fit, minmax(Xpx, 1fr))` for the gallery items. Media queries (`@media (max-width: 768px)`, etc.) were used to adjust specific properties like font sizes, padding, and button widths for smaller screens.

3.  **Smooth Dark/Light Mode Transition:**
    * **Challenge:** Ensuring a smooth visual transition when toggling between dark and light modes, avoiding abrupt changes.
    * **Solution:** Applied `transition: background-color var(--transition-speed), color var(--transition-speed);` to relevant elements like `body`, `header`, and `footer`. CSS variables (`--transition-speed`) helped centralize the transition duration.

4.  **Fullscreen Overlay Management:**
    * **Challenge:** Correctly showing/hiding the fullscreen overlay, handling clicks inside/outside the image, and closing with the Escape key.
    * **Solution:** Used `opacity` and `visibility` CSS properties with transitions for smooth fading. JavaScript event listeners were added for the close button, clicks on the overlay background (event delegation), and a `keydown` listener for the 'Escape' key.

## Regards

Thank you for the opportunity to work on this exciting project! I have enjoyed designing and developing a fully responsive, interactive photo gallery that captures the essence of CollegeTips.# gallery
