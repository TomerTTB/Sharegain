# RGB Colors Mixer and Checker

Thank you for taking the time to review.

I've been thinking about the question, "How can one verify a blended color to be correct?" To explore potential solutions, I've written code to mix colors, which will assist in testing.
I have tried different approaches, and the current one verifies the mixing formula by calculating one of the initial colors used in the mix (https://mixrgb.netlify.app/).

However, I don't think this is an ideal solution for testing. The current approach calculates results for each set of values, but it doesn't begin with a known expected result. Essentially, we need a test to verify the test.

In my view, a more effective way to assess this is by using a predefined, agreed-upon set of known results to be asserted. Otherwise, it's akin to a blind person describing hot as the color red.
It is an interesting question, and I wonder if there's a simple straightforward solution that I might be overlooking.

## Overview

This project provides a simple web-based tool for mixing and checking RGB colors. It includes two main functionalities:

1. **RGB Colors Mixer:**
   - Mixes 2 or 3 RGB colors within the specified range (0-255).
   - Displays the mixed result.

2. **RGB Colors Checker:**
   - Asserts the calculation by determining one of the original colors using the remaining colors and the mixed color.

3. **NOTE:**
   - While the user interface (UI) only supports input for 2 or 3 colors, the script is coded to handle an arbitrary number of colors.
     
## How to Use

### RGB Colors Mixer

1. Open the `index.html` file in a web browser.
2. Enter 2 or 3 RGB colors in the specified format (e.g., `0,100,255`).
3. Click the "Mix Colors" button to see the mixed result.

### RGB Colors Checker

4. Enter original RGB colors in the specified format.
5. Click the "Verify Mix" button to assert the calculation.

## Project Structure

- `index.html`: Main HTML file containing the user interface.
- `style.css`: CSS file for styling.
- `rgbMixer.js`: JavaScript file for RGB mixing logic.
- `rgbChecker.js`: JavaScript file for RGB checking logic.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contribute and provide feedback! 🚀
