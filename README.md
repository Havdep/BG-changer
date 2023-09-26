# Password Generator App

This is a simple React app that generates random passwords based on user-selected criteria.

## Features

- Generate a random password with a length between 8 to 50 characters.
- Option to include numbers and special characters.
- Display and copy the generated password.
- Reset button to regenerate the password.

## Usage

The app allows configuring the following password criteria:

- **Length**: Use the slider to select a length between 8 to 50.
- **Numbers**: Check the checkbox to include numeric characters.
- **Special characters**: Check to include symbols.

Clicking the "Generate" button will create a random password as per the selected criteria.

The generated password is displayed in the textbox and can be copied to the clipboard using the "Copy" button.

Clicking the "Reset" button will clear the textbox and allow regenerating a new password.

## Implementation

The app is built using:

- React for components and state management.
- `useState` hook for state variables.
- `useCallback` to memoize password generator function.
- `useRef` to access the textbox DOM node.
- `useEffect` to trigger generation on criteria change.
- `Math.random` and `charAt` to generate random characters.
- Navigator Clipboard API to copy text.

## Password Generation Logic

Random password generation using JavaScript.

### Room for Improvement

Some ways the app could be improved:

- Add an option to exclude similar characters.
- Enable password strength validation.
- Improve copying UX with visual feedback.
- Store generated passwords in browser storage.
- Improve styling for the UI.
