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










