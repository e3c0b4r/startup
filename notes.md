## David Escobar - Notes for CS260 F2023: Startup
### HTML Section 5:
#### HTML Section 5: Notes from the "HTML Introduction":
- HTML forms the foundational structure for all web content.
- It began as a format for web documents but has evolved to support both single-page (SPA) and multi-page applications (MPA).
- HTML is used for content structure, while CSS handles styling, and JavaScript manages interactivity.
- Common elements include `<html>`, `<head>`, `<body>`, `<div>`, `<span>`, and more.
- The default landing page for web applications is typically named index.html.
- HTML can be viewed in browsers directly or through platforms like CodePen.

----------
#### HTML Section 5: Notes from the "HTML structure":  
- HTML's primary purposes: Providing structure and content.
- **Common HTML Structural Elements:**
    - body: Top-level content.
    - header: Contains introductory content or navigation.
    - main: Dominant content.
    - footer: Contains info about the author, copyright data, etc.
    - section: Standalone section.
    - aside: Sidebar content.
    - p: Paragraph.
    - table: Represents tabular data.
    - ol/ul: Ordered/Unordered list.
    - div: Block-level container.
    - span: Inline container.
- Proper structure ensures logical understanding and aids automated tools like search crawlers and screen readers.
- Block vs Inline Elements:
    - Block: Forms a distinct block, e.g., div.
    - Inline: Remains in the flow of block content, e.g., span.
- CodePen assigment link to the modified HTML: https://codepen.io/gadianton/pen/poqZWew

----------
#### HTML Section 5: Notes from the "HTML Input":

- **Main Elements and Usage from the reading**:
    - `form`: For input submission.
        - Example: `<form action="form.html" method="post">`
    - `input`: Various types of user input based on `type` attribute.
        - Example: `<input type="text" />`
    - `select`: Dropdown selections.
        - Example: `<select><option>Choice</option></select>`
    - `textarea`: Multiline text input.
        - Example: `<textarea></textarea>`
    - `label`: Labeling individual inputs.
        - Example: `<label for="inputID">Label:</label>`

- **Key Input Types**:
    Textual: `text`, `password`, `email`, `url`, etc.
    - Numeric: `number`, `range`.
    - Selection: `checkbox`, `radio`.
    - Date and Time: `date`, `datetime-local`, `month`, etc.
    - Others: `color`, `file`, `submit`.

- **Common Input Attributes**:
    - `name`: Input's name for submission.
    - `disabled`: Disables user interaction.
    - `value`: Input's initial value.
    - `required`: Indicates value is mandatory.

- **Validation**:
    - Built-in validation for some input types (e.g., `number`, `email`).
    - `pattern` attribute for custom validation using regular expressions.
    - Additional validation should be in JavaScript.
    - Importance of immediate user feedback for enhan

- **CodePen assigment link** to the modified HTML: https://codepen.io/gadianton/pen/BavPOoq

----------------
#### HTML Section 5: Notes from "HTML media":

- HTML Media Elements:
    - Include: img, audio, video, svg, and canvas.
    - img, audio, video: Reference external files.
    - svg, canvas: Contain code for visuals, possibly animated.

- External Media:
    - Media tags referencing external sources use a URL.
    - URL can be relative or full path.
    - Relative paths are preferred to easily move code.

- Images:
    - Use img element.
    - src attribute for the image URL.
    - Include alt attribute for accessibility.

- Audio:
    - Use audio element.
    - src for audio file URL.
    - Optional attributes: controls (user playback control), autoplay (automatic play), loop (repeat audio).
    - Auto-play discouraged without opt-in feature.

- Video:
    - Use video element.
    - src for video file URL.
    - Optional attributes: controls, autoplay.
    - Possibly include crossorigin="anonymous" for different domain requests.

- Internal Media:
    - svg and canvas for creating images in HTML.
    - SVG (Scalable Vector Graphics):
    - Renders graphics in HTML.
    - Can combine with JavaScript and CSS for visuals.

- Canvas:
    - Facilitates 2D drawing/animation.
    - Requires JavaScript for drawing.

----------
#### HTML Section 5: Notes from the "Simon HTML" section:

- "Simon HTML" document focuses on teaching basic HTML elements for:
    - Structure
    - Formatting
    - Input/Output
    - Designs are basic due to no CSS.
- The application has four sections:
    - Login
    - Gameplay
    - High scores
    - About page

- **Analysis of the code: `deployFiles.sh`**

    - This script is a deployment script for deploying files to a remote server. .

    - **#!/bin/bash** is a special character sequence that specifies which interpreter should be used to execute the script. In this case, it's asking for the bash shell.

    - **getopts** is a utility in bash scripts that parses command-line options and arguments. This script is looking for three options: -k, -h, and -s.
        `-k` expects a value, which is assigned to the key variable.
        `-h` expects a value, which is assigned to the hostname variable.
        `-s` expects a value, which is assigned to the service variable.
        if `[[ -z "$key" || -z "$hostname" || -z "$service" ]]`
        
    - **ssh -i "$key" ubuntu@$hostname**: This part logs into the remote server `($hostname)` using the provided key `($key)`. The username being used to log in is ubuntu.
    - **rm -rf services/${service}/public**: This command, when executed on the remote server, will remove any previous version of the service from the server to ensure that old files won't interfere with the new deployment.

    - **mkdir -p services/${service}/public**: This command, when executed on the remote server, creates the necessary directory structure for the new deployment.

    - **scp -r -i "$key" * ubuntu@$hostname:services/$service/public**: This uses the scp (secure copy) command to transfer files from the local machine to the remote server. It copies all files (*) from the current directory on your local machine to the services/$service/public directory on the remote server.

- In essence, this script automates the process of:
    - Checks for the necessary parameters the PEM key, hostname of the server, and the service name.
    - Logs into the remote server.
    - Clears out any previous version of the service.
    - Deploys the new version of the service to the server.
    
----------
### CSS Section 6:
#### CSS Section 6: Notes from the "Simon CSS" section:
- Introduced a gradient background for the body.
- Changed the font to 'Trebuchet MS', sans-serif.
- Added text alignment to header and footer.
- Modified the header and footer to have dark backgrounds.
- Introduced a blue border to the bottom of the header and top of the footer.
- Added box shadows to the header, main, and footer for depth.
- The main section now has:
    - Padding for space.
    - Background with a slight white shade.
    - Rounded corners.
    - Margins and shadows.
- The menu items are now spread out using justify-content.
- Updated the .navbar-brand with:
    - Bigger font size.
    - Bold weight.
    - Blue color.
- Each .nav-item in the menu now has:
    - A border with rounded corners.
    - Increased padding.
    - Hover effects that change the background and text color.
- Footer links (a tags) now have a blue color with a hover effect.
- For small screen sizes, the main section now aligns and justifies its content to the center and removes its margins.


### JS Section 7 and 8:
#### JS Section 7 and 8: Notes from the "Simon JS" section:

"Enhanced User Login Functionality and Detailed Documentation

This commit introduces significant enhancements to the user login process, focusing on both front-end and back-end improvements, and an upgrade in code documentation.

Front-End Improvements:
- In login.js:
  - Refined form submission handling for superior user feedback.
  - Improved communication with server-side login endpoint:
    - Added error handling for server response.
    - Enhanced validation feedback to inform users of input errors.
  - Optimized script performance for faster processing times.

- In login.html:
  - Overhauled page layout for better user interaction and aesthetic appeal.
  - Improved form structure:
    - User-friendly interface with clear instructions.
    - Responsive design for compatibility with various devices.
  - Added accessibility features for wider user inclusivity.

Back-End Enhancements:
- Strengthened security measures in the login process:
  - Implemented advanced encryption for user credentials.
  - Enhanced session management for increased security.
- Optimized server-side logic for efficient user authentication.

Documentation Improvements:
- Added comprehensive comments in both login.js and login.html:
  - Detailed explanations of functions and their roles.
  - Clarified the logic flow and interaction between front-end and back-end.
  - Provided examples and usage scenarios for complex code segments.
- Included a documentation file outlining:
  - Overview of login process architecture.
  - Guide for future developers on maintaining and extending the login functionality.

Bug Fixes:
- Addressed known issues in the login process:
  - Fixed a bug related to session timeouts.
  - Resolved cross-browser compatibility issues in login.html.

The collective aim of these updates is to provide a more intuitive, secure, and efficient login experience for users, while ensuring the codebase is well-documented and maintainable for future development."



### Section 9 and 10:
#### Section 9 and 10: Notes from the "Simon-Service" section:
##### Fetch API Learning Notes:

- Evolution from static web pages (Web 1.0) to interactive web applications (Web 2.0) enabled by HTTP requests in JavaScript; initially introduced with XMLHttpRequest API.
- Fetch API is the modern standard for HTTP requests in JavaScript, built into the browser's JavaScript runtime.
- Basic Fetch Usage: Involves passing a URL, returns a promise, processed asynchronously with `.then()`. Response can be converted to JavaScript object using `.json()` for JSON responses.
- Example of Fetch for GET Request: Demonstrated with fetching an inspirational quote and handling JSON response.
- Fetch for POST Request: Involves specifying HTTP method, headers, and converting request body to JSON string.

#### 



