# Technical Documentation

## Project Overview

This project is a responsive and interactive personal portfolio website for Assignment 2. It was developed from the Assignment 1 portfolio and improved with dynamic content, user interaction, data handling, visual transitions, and better project presentation.

## File Structure

### index.html

The `index.html` file contains the main structure of the website.

It includes:

- Navigation bar.
- Hero section.
- About Me section.
- Skills section.
- Projects section.
- Contact section.
- Project modal window.
- Footer.
- Links to the CSS and JavaScript files.

### css/styles.css

The `styles.css` file controls the visual appearance of the website.

It includes:

- Color variables.
- Typography.
- Layout and spacing.
- Responsive design.
- Project card styling.
- Image hover effects.
- Dark mode styles.
- Modal window styling.
- Mobile media queries.
- Buttons and transitions.

### js/script.js

The `script.js` file controls the interactive behavior of the website.

It includes:

- Dark and light mode switching.
- Saving the selected theme using localStorage.
- Dynamic project information.
- Project poster modal.
- Project video links.
- Modal closing behavior.
- Contact-form validation.
- Success and error messages.

## Dynamic Project Modal

Each project arrow button has a `data-project` value. JavaScript uses this value to find the correct project information from the projects object.

For example:

```html
<button
  class="project-link"
  data-project="still-there"
>
  ↗
</button>