# Random Face Grid Generator

This project is a web-based application that displays a 3x3 grid of randomly generated faces, each with varied skin tones and facial features. The faces refresh independently at random intervals (1–5 seconds), and users can click any face to save it as a transparent PNG. A header above the grid reads, "Click how you are feeling...". The project is built using HTML, CSS, and JavaScript with the p5.js library.

## Features
- **3x3 Grid of Faces**: Nine 200x200 pixel canvases display unique, randomly generated faces.
- **Randomized Features**: Each face has randomized attributes, including:
  - Head shape and skin tone (light, medium, or dark with subtle variations).
  - Eyes (size, position, and style).
  - Mouth (curved, circular, or line).
  - Nose (line-based or curved).
  - Eyebrows and hair (optional, with random appearance).
- **Random Refresh Intervals**: Each canvas refreshes independently every 1–5 seconds, creating a dynamic display.
- **Save Functionality**: Click any canvas to download its face as a transparent PNG (e.g., `face-0.png`).
- **Responsive Header**: A prominent header encourages interaction with the text, "Click how you are feeling...".

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari) that supports HTML5 Canvas and JavaScript.
- An optional local server (e.g., Python’s `http.server`) for testing, though the page can be opened directly in a browser.

## Setup Instructions
1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Ensure Files**:
   - The repository should contain `index.html`, which includes the HTML, CSS, JavaScript, and p5.js dependency (loaded via CDN).
3. **Run the Application**:
   - Option 1: Open `index.html` directly in a web browser (e.g., double-click or drag into Chrome). Note: Some browsers may restrict local file access.
   - Option 2: Serve the file using a local server for best compatibility:
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000` in your browser.

## Usage
- **View the Grid**: Open the webpage to see a 3x3 grid of faces under the header "Click how you are feeling...".
- **Observe Random Refreshes**: Each face refreshes independently every 1–5 seconds with new random features and skin tones.
- **Save a Face**: Click any canvas to download its current face as a transparent PNG (named `face-0.png`, `face-1.png`, etc.).
- **Interact Freely**: Click multiple canvases to save different faces as needed.

## Project Structure
- `index.html`: The main file containing:
  - HTML for the grid layout and header.
  - CSS for styling the grid, canvases, and header.
  - JavaScript (with p5.js) for generating and managing the face canvases.
- No additional dependencies are required, as p5.js is loaded via CDN.

## Customization
To modify the project, edit `index.html`:
- **Header Text/Style**: Change the `<div class="header">` content or CSS `.header` class (e.g., font size, color).
- **Skin Tones**: Adjust the `skinTones` array in the `drawHead` function to modify RGB ranges or variation.
- **Refresh Intervals**: Change `p.random(1000, 5000)` in the `p.setup` and `p.draw` functions to alter the 1–5 second range.
- **Canvas Size**: Update `p.createCanvas(200, 200)` and CSS `.grid-container` grid dimensions for larger/smaller canvases.
- **Feature Randomness**: Modify probability conditions (e.g., `p.random(10) > 4`) in drawing functions to tweak feature frequency.

## Technologies Used
- **HTML5**: For page structure.
- **CSS**: For grid layout, centering, and header styling.
- **JavaScript**: For logic and canvas rendering.
- **p5.js**: For Processing-like canvas drawing and randomization (loaded via CDN).

## Limitations
- **File Naming**: Saved PNGs use fixed names (`face-0.png`, etc.) without Processing’s frame-numbering pattern.
- **Browser Compatibility**: Works in modern browsers but may have issues in older ones lacking Canvas support.
- **Local File Access**: Some browsers restrict local `file://` access; use a local server for consistent behavior.

## Contributing
Feel free to fork the repository, make changes, and submit pull requests. Suggestions for new features (e.g., additional facial features, synchronized refreshes) or bug fixes are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE). (Note: Add a `LICENSE` file to the repository if you choose to include one.)

## Acknowledgments
- Inspired by Processing sketches for random face generation.
- Built with [p5.js](https://p5js.org/) for accessible, creative coding in the browser.