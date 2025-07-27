1 # Photographer's Portfolio Website Template
    2
    3 This repository contains a responsive and interactive website template designed for photographers to showcase their work. It features a clean design, image galleries, contact forms, and smooth animations.

    4**Looking for the non-technical setup guide?**
    > If you're not a developer and just want to customize the website with your own content, please follow the **[Complete Website Setup Guide (for Beginners)](REVISED-SETUP-GUIDE.md)**.
    
    5 ## Table of Contents
    6
    7 1.  [Setup Instructions](#setup-instructions)
    8 2.  [Customization Guide](#customization-guide)
    9 3.  [Troubleshooting](#troubleshooting)
   10 4.  [File Reference](#file-reference)
   11
   12 ---
   13
   14 ## 1. Setup Instructions
   15
   16 This website template is a static site, meaning it primarily consists of HTML,
      CSS, and JavaScript files that can be served directly by any web server. There
      are no complex backend dependencies or build processes required beyond a basic
      web server for local development or direct deployment to a static hosting
      service.
   17
   18 ### Environment Requirements
   19
   20 *   **Web Browser:** A modern web browser (Chrome, Firefox, Edge, Safari) for
      viewing the website.
   21 *   **Text Editor:** A code editor (e.g., VS Code, Sublime Text) for modifying
      the code.
   22 *   **Local Server (Optional but Recommended):** For local development, a
      simple local web server is recommended to correctly serve the files and handle
      relative paths. Python's built-in HTTP server or Node.js's `http-server` are
      good options.
   23
   24     *   **Node.js (if using `http-server`):** Ensure Node.js is installed (LTS
      version recommended). You can download it from [nodejs.org](https://nodejs.org/
      ).
   25
   26 ### Installation Commands
   27
   28 No complex installation steps are required. Simply download or clone this
      repository to your local machine.
  git clone https://github.com/your-username/photographers-portfolio.git
  cd photographers-portfolio

    1
    2 ### Build Process
    3
    4 This template does not require a separate build process. All HTML, CSS, and
      JavaScript files are ready for direct use.
    5
    6 ### Deployment Steps
    7
    8 This template can be deployed to any static site hosting service. Here are
      general steps for common platforms:
    9
   10 #### Netlify
   11
   12 1.  **Sign up/Log in:** Go to [Netlify](https://www.netlify.com/) and sign up
      or log in.
   13 2.  **Connect to Git:** Click "Add new site" -> "Import an existing project"
      and connect your Git provider (GitHub, GitLab, Bitbucket).
   14 3.  **Pick a repository:** Select your `photographers-portfolio` repository.
   15 4.  **Configure build settings:**
   16     *   **Branch to deploy:** `main` (or your preferred branch)
   17     *   **Build command:** (Leave empty)
   18     *   **Publish directory:** (Leave empty, Netlify will detect `index.html`
      at the root)
   19 5.  **Deploy site:** Click "Deploy site". Netlify will automatically deploy
      your website.
   20
   21 #### Vercel
   22
   23 1.  **Sign up/Log in:** Go to [Vercel](https://vercel.com/) and sign up or log
      in.
   24 2.  **Import Project:** Click "New Project" and import your Git repository.
   25 3.  **Configure Project:**
   26     *   **Root Directory:** `./`
   27     *   **Build Command:** (Leave empty)
   28     *   **Output Directory:** (Leave empty)
   29 4.  **Deploy:** Click "Deploy". Vercel will build and deploy your site.
   30
   31 #### GitHub Pages
   32
   33 1.  **Create a Repository:** Ensure your project is hosted on GitHub in a
      public repository (e.g., `your-username/photographers-portfolio`).
   34 2.  **Go to Settings:** In your repository, navigate to "Settings" -> "Pages".
   35 3.  **Select Branch:** Under "Build and deployment", choose "Deploy from a
      branch" and select your `main` (or `master`) branch and `/ (root)` folder.
   36 4.  **Save:** Click "Save". Your site will be deployed to
      `https://your-username.github.io/photographers-portfolio/`.
   37
   38 ---
   39
   40 ## 2. Customization Guide
   41
   42 This section outlines how to customize various aspects of the website template.
   43
   44 ### Key Files Organized by Functionality
   45
   46 *   **HTML Structure:**
   47     *   `index.html`: Main landing page.
   48     *   `gallery.html`: Image gallery page.
   49     *   `thanks.html`: Thank you page after form submission.
   50 *   **CSS Styling:**
   51     *   `css/combined.min.css`: Contains general styles, animations (AOS), and
      Swiper slider styles.
   52     *   `css/gallery.css`: Specific styles for the image gallery page.
   53 *   **JavaScript Functionality:**
   54     *   `script.js`: Handles mobile navigation, mousemove effects on the about
      section, and fade-in animations.
   55     *   `gallery.js`: Manages dynamic loading and filtering of gallery images,
      and lightbox functionality.
   56     *   `lazyloading.js`: Implements lazy loading for images.
   57     *   `script-email.js`: Handles the contact form submission.
   58 *   **Assets:**
   59     *   `fonts/`: Custom font files.
   60     *   `images/`: General images used across the site.
   61     *   `images-1/`: Additional images used in specific sections.
   62     *   `profile-pics/`: Profile pictures for testimonials.
   63     *   `videos/`: Background video assets.
   64
   65 ### HTML Structure Map
   66
   67 Each HTML file uses a semantic structure. Key sections are often wrapped in
      `<section>` tags with descriptive IDs.
   68
   69 **`index.html`**
  <body>
      <!-- Mobile Navigation (Hamburger menu) -->
      <label class="hamburger">...</label>
      <nav class="mobile-nav">...</nav>

      <!-- Hero Section -->
      <section class="hero-container" id="hero">
          <div class="hero-logo">
              <h1>{{PLACEHOLDER_HERO_TITLE}}</h1> <!-- Edit this section -->
              <h2>{{PLACEHOLDER_HERO_SUBTITLE}}</h2> <!-- Edit this section -->
          </div>
          <div class="main-video-container">...</div>
          <div class="hero-extra">
              <p class="hero-extra-text">...</p> <!-- Edit this section -->
          </div>
      </section>

      <!-- About Section -->
      <section id="about">
          <div class="container-1">
              <div class="scrolling-text">...</div> <!-- Edit this section -->
              <div class="center-image">
                  <img data-src="{{PLACEHOLDER_ABOUT_IMAGE_SRC}}" alt="Center Image" />
  <!-- Edit this section -->
              </div>
              <div class="card-container">
                  <div class="header">
                      <div class="greeting">...</div> <!-- Edit this section -->
                      <h1 class="name">...</h1> <!-- Edit this section -->
                      <div class="title">...</div> <!-- Edit this section -->
                  </div>
                  <div class="bio">
                      <p>...</p> <!-- Edit this section -->
                  </div>
                  <div class="signature">...</div> <!-- Edit this section -->
                  <div class="social-links-1">...</div> <!-- Edit this section -->
              </div>
          </div>
      </section>

      <!-- Trust Section -->
      <div class="container-6">
          <section class="trust-section">
              <div class="section-header">
                  <h2>{{PLACEHOLDER_VISUAL_JOURNEY_TITLE}}</h2> <!-- Edit this section -->
                  <p>...</p> <!-- Edit this section -->
              </div>
              <div class="content-wrapper">
                  <div class="story-content">
                      <h3>{{PLACEHOLDER_STORY_TITLE}}</h3> <!-- Edit this section -->
                      <p>...</p> <!-- Edit this section -->
                      <div class="highlight-1">
                          <p>...</p> <!-- Edit this section -->
                      </div>
                      <p>...</p> <!-- Edit this section -->
                  </div>
                  <div class="stats-container">
                      <div class="stat-card">
                          <div class="stat-number">...</div> <!-- Edit this section -->
                          <div class="stat-label">...</div> <!-- Edit this section -->
                      </div>
                      <!-- Repeat for other stat cards -->
                  </div>
              </div>
              <div class="trust-reasons">
                  <h3>{{PLACEHOLDER_TRUST_REASONS_TITLE}}</h3> <!-- Edit this section -->
                  <div class="reasons-grid">
                      <div class="reason">
                          <h4>...</h4> <!-- Edit this section -->
                          <p>...</p> <!-- Edit this section -->
                      </div>
                      <!-- Repeat for other reasons -->
                  </div>
              </div>
          </section>
      </div>

      <!-- Explore Gallery Section -->
      <section id="explore-gallery">
          <div class="work-preview-text">
              <div class="section-text">
                  <h1>{{PLACEHOLDER_GALLERY_TITLE}}</h1> <!-- Edit this section -->
                  <p>...</p> <!-- Edit this section -->
              </div>
              <div class="button-container">
                  <a class="fancy"
  onclick="location.href={{PLACEHOLDER_GALLERY_BUTTON_URL}}">...</a> <!-- Edit this
  section -->
              </div>
          </div>
          <div class="img-container">
              <!-- Gallery images are dynamically loaded via JavaScript -->
          </div>
      </section>

      <!-- Creator Process Section -->
      <section id="creator-process">
          <div class="photography-container">
              <div class="section-header">
                  <h1><span>{{PLACEHOLDER_CREATOR_PROCESS_TITLE}}</span></h1> <!-- Edit
  this section -->
                  <p>...</p> <!-- Edit this section -->
              </div>
              <div class="video-showcase">
                  <div class="video-card">
                      <video>
                          <source src="{{PLACEHOLDER_VIDEO_CONCEPT_MP4}}"
  type="video/mp4"> <!-- Edit this section -->
                          <source src="{{PLACEHOLDER_VIDEO_CONCEPT_WEBM}}"
  type="video/webm"> <!-- Edit this section -->
                      </video>
                      <div class="video-overlay">
                          <h1>...</h1> <!-- Edit this section -->
                          <p>...</p> <!-- Edit this section -->
                      </div>
                  </div>
                  <!-- Repeat for other video cards -->
              </div>
          </div>
      </section>

      <!-- Services Section -->
      <section class="services">
          <div class="container">
              <header>
                  <h1>{{PLACEHOLDER_SERVICES_TITLE}}</h1> <!-- Edit this section -->
                  <p>...</p> <!-- Edit this section -->
              </header>
              <div class="pricing-container">
                  <div class="pricing-card">
                      <div class="card-header">
                          <h3>{{PLACEHOLDER_PORTRAIT_PACKAGE_TITLE}}</h3> <!-- Edit this
  section -->
                          <p>...</p> <!-- Edit this section -->
                      </div>
                      <div class="price">
                          <span class="amount">...</span> <!-- Edit this section -->
                          <span class="period">...</span> <!-- Edit this section -->
                      </div>
                      <div class="features">
                          <ul>
                              <li>...</li> <!-- Edit this section -->
                          </ul>
                      </div>
                      <div class="action">
                          <a href="{{PLACEHOLDER_PORTRAIT_BUTTON_LINK}}"
  class="btn-1">...</a> <!-- Edit this section -->
                      </div>
                  </div>
                  <!-- Repeat for other pricing cards -->
              </div>
              <div class="testimonials-container">
                  <div class="testimonials">
                      <div class="head">
                          <h3>{{PLACEHOLDER_TESTIMONIALS_TITLE}}</h3> <!-- Edit this
  section -->
                          <p>...</p> <!-- Edit this section -->
                      </div>
                      <div class="body-1 swiper">
                          <ul class="swiper-wrapper">
                              <li class="swiper-slide">
                                  <div class="wrapper">
                                      <div class="thumbnails">
                                          <img
  data-src="{{PLACEHOLDER_TESTIMONIAL_IMG_1}}" alt="{{PLACEHOLDER_TESTIMONIAL_ALT_1}}" />
  <!-- Edit this section -->
                                      </div>
                                      <div class="aside">
                                          <p class="statement">...</p> <!-- Edit this
  section -->
                                          <div class="name">
                                              <h4>...</h4> <!-- Edit this section -->
                                              <p>...</p> <!-- Edit this section -->
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <!-- Repeat for other testimonials -->
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Contact Section -->
      <section id="contact">
          <div class="contact-section">
              <div class="container-2">
                  <div class="contact-form">
                      <form id="contact-Form" action="{{PLACEHOLDER_FORM_ACTION}}"
  method="POST"> <!-- Edit this section -->
                          <h2 class="section-title">...</h2> <!-- Edit this section -->
                          <div class="form-group">
                              <label for="name">...</label> <!-- Edit this section -->
                              <input placeholder="..." /> <!-- Edit this section -->
                          </div>
                          <!-- Repeat for other form groups -->
                          <input type="hidden" name="_captcha"
  value="{{PLACEHOLDER_FORM_CAPTCHA_VALUE}}"> <!-- Edit this section -->
                          <input type="hidden" name="_template"
  value="{{PLACEHOLDER_FORM_TEMPLATE_VALUE}}"> <!-- Edit this section -->
                          <input type="hidden" name="_next"
  value="{{PLACEHOLDER_FORM_NEXT_VALUE}}"> <!-- Edit this section -->
                          <input type="hidden" name="_autoresponse"
  value="{{PLACEHOLDER_FORM_AUTORESPONSE_VALUE}}"> <!-- Edit this section -->
                          <button type="submit">...</button> <!-- Edit this section -->
                      </form>
                  </div>
                  <div class="contact-info">
                      <h2 class="section-title">...</h2> <!-- Edit this section -->
                      <div class="contact-item">
                          <h4>...</h4> <!-- Edit this section -->
                          <p>...</p> <!-- Edit this section -->
                      </div>
                      <!-- Repeat for other contact items -->
                      <div class="social-links">
                          <h3>...</h3> <!-- Edit this section -->
                          <ul>...</ul> <!-- Edit this section -->
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Back to Top & Footer -->
      <section id="back-to-top">...</section>
      <footer class="footer">...</footer>
  </body>
  </html>
   1
   2 **`gallery.html`**
  <body>
      <!-- Mobile Navigation (Hamburger menu) -->
      <nav class="mobile-nav">...</nav>

      <!-- Main Logo -->
      <div class="logo-1">
          <p>{{PLACEHOLDER_MAIN_LOGO_TEXT}}</p> <!-- Edit this section -->
      </div>

      <!-- Category Navigation -->
      <nav>
          <ul class="nav-links">
              <li><a
  data-category="{{PLACEHOLDER_CATEGORY_1_DATA}}">{{PLACEHOLDER_CATEGORY_1_TEXT}}</a></li>
  <!-- Edit this section -->
              <li><a
  data-category="{{PLACEHOLDER_CATEGORY_2_DATA}}">{{PLACEHOLDER_CATEGORY_2_TEXT}}</a></li>
  <!-- Edit this section -->
              <li><a
  data-category="{{PLACEHOLDER_CATEGORY_3_DATA}}">{{PLACEHOLDER_CATEGORY_3_TEXT}}</a></li>
  <!-- Edit this section -->
              <li><a
  data-category="{{PLACEHOLDER_CATEGORY_4_DATA}}">{{PLACEHOLDER_CATEGORY_4_TEXT}}</a></li>
  <!-- Edit this section -->
          </ul>
      </nav>

      <!-- Gallery Section (Content dynamically loaded by gallery.js) -->
      <section id="gallery">
          <div class="column" id="col1"></div>
          <div class="column" id="col2"></div>
          <div class="column" id="col3"></div>
          <div class="column" id="col4"></div>
      </section>

      <!-- Lightbox for image display -->
      <div id="lightbox">
          <img src="{{PLACEHOLDER_LIGHTBOX_IMG_SRC}}"
  alt="{{PLACEHOLDER_LIGHTBOX_IMG_ALT}}" id="lightbox-img"> <!-- Edit this section -->
          <button id="close-lightbox">&times;</button>
          <div class="buttons">
              <a href="{{PLACEHOLDER_DOWNLOAD_BUTTON_HREF}}" id="download-btn"
  download>Download</a> <!-- Edit this section -->
          </div>
      </div>

      <!-- Contact Section (Similar to index.html) -->
      <section id="contact">...</section>

      <!-- Back to Top & Footer (Similar to index.html) -->
      <section id="back-to-top">...</section>
      <footer class="footer">...</footer>
  </body>
  </html>
   1
   2 **`thanks.html`**
  <body>
      <div class="thank-you-container">
          <div class="header">
              <h1>{{PLACEHOLDER_THANK_YOU_TITLE}}</h1>         <!-- Edit this section -->
              <p>{{PLACEHOLDER_THANK_YOU_MESSAGE}}</p> <!-- Edit this section -->
          </div>

          <div class="content">
              <h2>{{PLACEHOLDER_CONTENT_TITLE}}</h2>   <!-- Edit this section -->
              <p class="message">
                  {{PLACEHOLDER_CONTENT_MESSAGE}}     <!-- Edit this section -->
              </p>

              <div class="actions">
                  <a href="{{PLACEHOLDER_HOME_PAGE_URL}}" class="btn btn-home">
                      <i class="fas fa-home"></i> {{PLACEHOLDER_HOME_BUTTON_TEXT}}
<!-- Edit this section -->
                  </a>
              </div>
          </div>

          <div class="contact-info">
              <h3>{{PLACEHOLDER_OTHER_WAYS_TITLE}}</h3>   <!-- Edit this section -->
              <div class="info-grid">
                  <div class="info-item">
                      <h4>{{PLACEHOLDER_PHONE_SUPPORT_TITLE}}</h4>
<!-- Edit this section -->
                      <p>{{PLACEHOLDER_PHONE_NUMBER_1}}</p> <!-- Edit this section -->
                  </div>
                  <div class="info-item">
                      <h4>{{PLACEHOLDER_EMAIL_US_TITLE}}</h4> <!-- Edit this section -->
                      <p>{{PLACEHOLDER_EMAIL_ADDRESS}}</p> <!-- Edit this section -->
                  </div>
                  <div class="info-item">
                      <h4>{{PLACEHOLDER_VISIT_OFFICE_TITLE}}</h4>
<!-- Edit this section -->
                      <p>{{PLACEHOLDER_OFFICE_ADDRESS}}</p> <!-- Edit this section -->
                  </div>
              </div>
          </div>

          <div class="footer">
              <p>{{PLACEHOLDER_FOOTER_COPYRIGHT}}</p>   <!-- Edit this section -->
          </div>
      </div>
  </body>
  </html>

   1
   2 ### CSS Variables Table
   3
   4 The provided CSS files do not explicitly use CSS variables (custom properties)
     with the `--` prefix. However, you can easily introduce them for better
     maintainability. For example, to change the primary color:
  :root {
      --primary-color: #262628; / Dark background color /
      --secondary-color: #ffd166; / Accent color for buttons/highlights /
      --text-color-light: #fff;
      --text-color-dark: #333;
  }

  / Example usage /
  .header {
      background-color: var(--primary-color);
      color: var(--text-color-light);
  }

  .btn-home {
      background-color: var(--primary-color);
      color: var(--text-color-light);
  }

    1
    2 ### JavaScript Customization Points
    3
    4 *   **`script.js`**:
    5     *   **Mobile Navigation:** The `toggleMenu` function controls the mobile
      navigation's open/close behavior. You can modify the `transform` properties (
      `translateY(0)` and `translateY(-100%)`) to change how the menu slides in/out.
    6     *   **Mousemove Effect (About Section):** The `mousemove` event listener on
      the `document` and the subsequent `if (e.clientX >= rect.left && ...)` block
      control the subtle movement of circles within the `.card-container`. Adjust the
      `x * 20 - 10` and `y * 20 - 10` values to change the intensity of the movement.
    7     *   **Project Counter:** The `animateCounter` function in the
      `setupFadeAnimations` function is responsible for the animated number counter.
    8         *   `animateCounter(element, start, end, duration)`:
    9             *   `element`: The DOM element to update.
   10             *   `start`: Starting value (hardcoded to `0`).
   11             *   `end`: The final value of the counter. This is currently a
      placeholder `{{PLACEHOLDER_PROJECT_COUNTER_END_VALUE}}` in `script.js`. You
      would replace this with your desired number (e.g., `850`).
   12             *   `duration`: Animation duration in milliseconds (hardcoded to
      `2000`).
   13 *   **`gallery.js`**:
   14     *   **Image Loading:** The `loadGallery` function is crucial for populating
      the gallery.
   15         *   `img.src = `{{PLACEHOLDER_IMAGE_BASE_PATH}}/${category}/${i}.webp`
      ;`: This line constructs the image path. You need to define
      `PLACEHOLDER_IMAGE_BASE_PATH` (e.g., `'images'`) to match your image directory
      structure.
   16         *   `img.alt = `{{PLACEHOLDER_IMAGE_ALT_PREFIX}} ${category} ${i}`;`:
      This sets the alt text. You can customize `PLACEHOLDER_IMAGE_ALT_PREFIX` (e.g.,
      `'Gallery Image'`).
   17     *   **Default Category:**
      `loadGallery('{{PLACEHOLDER_DEFAULT_GALLERY_CATEGORY}}');` sets the initial
      category displayed. Change `PLACEHOLDER_DEFAULT_GALLERY_CATEGORY` to your
      desired default (e.g., `'wedding'`, `'event'`, `'indoor'`, `'outdoor'`).
   18     *   **Parallax Effect:** The `speeds` array controls the parallax scrolling
      effect on the gallery columns. Adjust the values (`[0.001, 0.2, 0.3, 0.4]`) to
      change the intensity of the parallax for each column.
   19 *   **`script-email.js`**:
   20     *   **Form Submission URL:** The `fetch("{{PLACEHOLDER_FORM_SUBMIT_URL}}",
      { ... })` line sends the form data. You need to replace
      `PLACEHOLDER_FORM_SUBMIT_URL` with your actual form submission endpoint (e.g.,
      a FormSubmit.co URL, a custom API endpoint).
   21
   22 ### Image Replacement Guide
   23
   24 All image paths are relative to the root of your project.
   25
   26 *   **General Images:**
   27     *   Located in `images/` and `images-1/`.
   28     *   Update `src` and `data-src` attributes in HTML files (e.g.,
      `index.html`) and `img.src` in `gallery.js`.
   29     *   **Example:** If you have an image `my-new-image.jpg` in `images/`,
      update the `data-src` attribute to `data-src="images/my-new-image.jpg"`.
   30 *   **Profile Pictures:**
   31     *   Located in `profile-pics/`.
   32     *   Update `data-src` attributes in `index.html` for testimonials.
   33 *   **Gallery Images:**
   34     *   Located in `images/wedding/`, `images/event/`, `images/indoor/`,
      `images/outdoor/`.
   35     *   The `gallery.js` dynamically loads these. Ensure your images are named
      numerically (e.g., `1.webp`, `2.webp`) within their respective category
      folders.
   36     *   **Dimension Requirements:** While not strictly enforced by the code,
      maintain consistent aspect ratios within each gallery category for a visually
      appealing layout. The current images are mostly portrait-oriented.
   37 *   **Video Assets:**
   38     *   Located in `videos/`.
   39     *   Update `src` attributes for `<source>` tags in `index.html`. Ensure you
      provide both `.mp4` and `.webm` formats for broader browser compatibility.
   40
   41 ---
   42
   43 ## 3. Troubleshooting
   44
   45 ### Common Errors
   46
   47 *   **"File not found" (404) errors:**
   48     *   **Solution:** Double-check all file paths in your HTML (`<link>`,
      `<script>`, `<img>`, `<source>`), CSS (`url()`), and JavaScript (`img.src`).
      Ensure the paths are correct relative to the HTML file or the root of your
      project. Pay close attention to case sensitivity, especially on Linux-based
      servers.
   49 *   **Animations not working (AOS, GSAP):**
   50     *   **Solution:** Ensure the library script files (`aos.js`, `gsap.min.js`,
      `scrolltrigger.min.js`, `lenis.min.js`, `split-type.min.js`,
      `swiper-bundle.min.js`) are correctly linked in your HTML `<head>` or before
      the closing `</body>` tag. Verify the paths are correct. Check the browser's
      developer console for any JavaScript errors.
   51 *   **Contact form not sending emails:**
   52     *   **Solution:** The contact form uses FormSubmit.co. Ensure you have
      replaced `{{PLACEHOLDER_FORM_ACTION}}` and `{{PLACEHOLDER_FORM_SUBMIT_URL}}`
      with your actual FormSubmit.co endpoint (which includes your email address).
      Follow the instructions on [FormSubmit.co](https://formsubmit.co/) to set up
      your form.
   53 *   **Images not loading (lazy loading issues):**
   54     *   **Solution:** Verify that `lazyloading.js` is correctly linked. Ensure
      your image tags have both `src` (for placeholder) and `data-src` (for actual
      image) attributes as shown in the HTML structure. Check the browser console for
      errors related to image loading.
   55
   56 ### Browser Compatibility Notes
   57
   58 This template uses modern web technologies (HTML5, CSS3, JavaScript ES6+). It
      should be compatible with most evergreen browsers (Chrome, Firefox, Edge,
      Safari) released in the last few years. Older browsers might experience some
      visual inconsistencies or lack certain animations.
   59
   60 ### Dependency Version Conflicts Resolution
   61
   62 This template uses external libraries linked via CDN or local files. If you
      encounter issues related to these libraries, consider:
   63
   64 1.  **Checking CDN links:** Ensure the CDN URLs in your HTML are still valid
      and accessible.
   65 2.  **Updating local copies:** If using local copies of libraries (e.g., `js/
      libs/aos.js`), ensure they are up-to-date by downloading the latest versions
      from their official sources.
   66 3.  **Consulting library documentation:** Refer to the official documentation
      for AOS, Swiper, GSAP, etc., for specific troubleshooting steps related to
      their functionality.
   67
   68 ---
   69
   70 ## 4. File Reference
   71
   72 This section provides a detailed overview of the project's directory structure
      and the purpose of each file.
  photographers-portfolio/
  ├── css/
  │   ├── combined.min.css      # Minified CSS for general styles, AOS, and Swiper.
  │   └── gallery.css           # Specific CSS for the image gallery page.
  ├── fonts/                    # Custom font files used in the template.
  │   ├── AncizarSerif.woff2
  │   ├── DancingScript-Regular.woff2
  │   ├── HankenGrotesk.woff2
  │   ├── InriaSerif-Bold.woff2
  │   ├── InriaSerif-Regular.woff2
  │   └── PlayfairDisplay-VariableFont_wght.woff2
  ├── gradient-images/          # Images used for background gradients or specific visual
  effects.
  │   └── IMG_0317.JPG
  ├── images/                   # General images used across the website.
  │   ├── event/                # Event category images for the gallery.
  │   │   ├── 1.webp
  │   │   ├── ... (up to 40.webp)
  │   ├── indoor/               # Indoor category images for the gallery.
  │   │   ├── 1.webp
  │   │   ├── ... (up to 40.webp)
  │   ├── outdoor/              # Outdoor category images for the gallery.
  │   │   ├── 1.webp
  │   │   ├── ... (up to 40.webp)
  │   └── wedding/              # Wedding category images for the gallery.
  │       ├── 1.webp
  │       └── ... (up to 40.webp)
  ├── images-1/                 # Additional images, possibly for specific sections like
  "About".
  │   ├── 0251bd1316022f68ee2c3ee0ddab1271.jpg
  │   ├── 1b43cd634a1d3ca68e1848f52953f03d.jpg
  │   ├── 4097a5bb2497e976d9ad508b3c897b08.jpg
  │   ├── 51dd3de2ab5cb684a9686c6f9af91fe1.jpg
  │   ├── 5f8075157024cbcc0076883fc7ce6df6.jpg
  │   ├── 76b727fc8bbcc84768669a170a5c6630.jpg
  │   ├── 8533aa1c1c07fdded567f59b96525738.jpg
  │   ├── a20a23eb7536cadbfaf566c577350c09.jpg
  │   ├── c58fe2c3f59044da63ace3a1e75e7646.jpg
  │   ├── d64f63fbb1d665a60f7648351c0538ab.jpg
  │   └── IMG_0295.avif
  ├── js/
  │   └── libs/                 # Third-party JavaScript libraries.
  │       ├── aos.js            # Animate On Scroll library.
  │       ├── gsap.min.js       # GSAP (GreenSock Animation Platform) core library.
  │       ├── lenis.min.js      # Smooth scrolling library.
  │       ├── scrolltrigger.min.js # GSAP ScrollTrigger plugin.
  │       ├── split-type.min.js # Text splitting library for animations.
  │       └── swiper-bundle.min.js # Swiper slider library.
  ├── profile-pics/             # Profile pictures for testimonial section.
  │   ├── IMG_0441_1.JPG
  │   ├── IMG_0442_1.JPG
  │   ├── IMG_0445_1.JPG
  │   ├── IMG_0446.JPG
  │   ├── IMG_0447_1.JPG
  │   ├── IMG_0448_1.JPG
  │   ├── IMG_0450.JPG
  │   ├── IMG_0451_1.JPG
  │   ├── IMG_0452_1.JPG
  │   ├── IMG_0453_1.JPG
  │   ├── IMG_0454.jpg
  │   ├── IMG_0455.JPG
  │   ├── IMG_0457.JPG
  │   ├── IMG_0459.JPG
  │   ├── WhatsApp Image 2025-06-11 at 07.05.17_6d99bd0b (1).jpg
  │   └── WhatsApp Image 2025-06-11 at 07.05.17_b5ca28b6.jpg
  ├── videos/                   # Video assets for background or showcase.
  │   ├── output-editing-720p.mp4
  │   ├── output-editing-720p.webm
  │   ├── output-makeup-720p.mp4
  │   ├── output-makeup-720p.webm
  │   ├── output-photoshoot-720p.mp4
  │   ├── output-photoshoot-720p.webm
  │   ├── output-slower-2.mp4
  │   └── output-slowerr-1.webm
  ├── .gitattributes            # Git configuration for line endings.
  ├── gallery.html              # HTML file for the image gallery page.
  ├── gallery.js                # JavaScript for dynamic gallery loading and lightbox.
  ├── index.html                # Main HTML file for the landing page.
  ├── lazyloading.js            # JavaScript for lazy loading images.
  ├── LICENSE                   # Project license information.
  ├── README.md                 # This documentation file.
  ├── script-email.js           # JavaScript for handling contact form submissions.
  ├── script.js                 # General JavaScript for animations and interactions.
  └── thanks.html               # HTML file for the thank you page after form submission.

    1
    2 ### Core Dependencies List
    3
    4 This template utilizes the following third-party libraries:
    5
    6 *   **Font Awesome:** Used for icons.
    7     *   **Usage:** Linked via CDN in HTML: `<link rel="stylesheet" href=
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">`
    8     *   **Documentation:** [Font Awesome](https://fontawesome.com/)
    9 *   **AOS (Animate On Scroll):** Used for scroll animations.
   10     *   **Usage:** Linked via CDN in HTML: `<link rel="stylesheet" href=
      "https://unpkg.com/aos@next/dist/aos.css"/>` and `<script src=
      "https://unpkg.com/aos@next/dist/aos.js"></script>`
   11     *   **Documentation:** [AOS GitHub](https://github.com/michalsnik/aos)
   12 *   **Swiper:** Modern touch slider.
   13     *   **Usage:** Local file: `js/libs/swiper-bundle.min.js`
   14     *   **Documentation:** [Swiper](https://swiperjs.com/)
   15 *   **GSAP (GreenSock Animation Platform):** Powerful JavaScript animation
      library.
   16     *   **Usage:** Local files: `js/libs/gsap.min.js`,
      `js/libs/scrolltrigger.min.js`
   17     *   **Documentation:** [GSAP](https://greensock.com/gsap/)
   18 *   **Lenis:** Smooth scrolling library.
   19     *   **Usage:** Local file: `js/libs/lenis.min.js`
   20     *   **Documentation:** [Lenis GitHub](
      https://github.com/studio-freight/lenis)
   21 *   **SplitType:** Text splitting utility for animations.
   22     *   **Usage:** Local file: `js/libs/split-type.min.js`
   23     *   **Documentation:** [SplitType GitHub](
      https://github.com/lukehaas/SplitType)
   24 *   **FormSubmit.co:** Used for handling contact form submissions without
      server-side code.
   25     *   **Usage:** Configured in `script-email.js` and `index.html` /
      `thanks.html` form `action` attributes.
   26     *   **Documentation:** [FormSubmit.co](https://formsubmit.co/)
   27
   28 ### Critical Assets Inventory
   29
   30 *   **Fonts:** All custom fonts are located in the `fonts/` directory. Ensure
      these files are present and correctly referenced in `css/combined.min.css`.
   31 *   **Images:**
   32     *   `images/`: Contains categorized images for the gallery (`wedding/`,
      `event/`, `indoor/`, `outdoor/`). Each category expects images named `1.webp`
      through `40.webp`.
   33     *   `images-1/`: Contains general images used in `index.html`.
   34     *   `profile-pics/`: Contains profile images for testimonials in
      `index.html`.
   35     *   `gradient-images/`: Contains `IMG_0317.JPG` used as a background image
      in `index.html`.
   36 *   **Videos:** Video assets are located in the `videos/` directory. Ensure
      both `.mp4` and `.webm` formats are available for each video for cross-browser
      compatibility.