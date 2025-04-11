# Typing Test Desktop App

A cross-platform desktop application built with **Electron.js**, **React**, **Tailwind CSS**, and **ShadCN UI**. This typing test software provides a dynamic, visually appealing interface with real-time progress tracking, statistics (WPM, accuracy, error counts), and a detailed performance graph using Chart.js.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Development Workflow](#development-workflow)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Project Overview

The **Typing Test Desktop App** is designed for users looking to improve their typing speed and accuracy. The application offers:

- A clean, intuitive UI using **ShadCN UI** and **Tailwind CSS**.
- A responsive React-based interface with real-time input validation.
- Tracking of keystrokes, correct vs. incorrect letters, and real-time calculation of Words Per Minute (WPM).
- A real-time performance graph displaying typing speed trends over the duration of the test.

---

## Key Features

- **Dynamic Typing Test Modes:** Configurable timed tests (e.g., 60 seconds) to challenge the user.
- **Real-time Progress Tracking:** Live calculations for WPM, accuracy percentage, and error counts.
- **Visual Feedback:** Color-coded word and character highlighting (green for correct input, red for mistakes).
- **Performance Graph:** A dynamic line chart using Chart.js that displays the progression of WPM over the test duration.
- **User-Friendly Interface:** Built with ShadCN UI components for a modern and sleek look.

---

## Technology Stack

- **Desktop Framework:** [Electron.js](https://www.electronjs.org/)
- **Frontend Framework:** [React](https://reactjs.org/) (using Vite for rapid setup)
- **UI Components & Styling:** [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **Real-time Graphing:** [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Bundling & Packaging:** [Electron Builder](https://www.electron.build/) for creating desktop executables

---

## Project Structure

typing-test-app/ ├── public/ # Static assets (icons, index.html, etc.) ├── electron/ │ ├── main.ts # Electron main process: creates the app window & handles lifecycle events │ ├── preload.ts # Secure communication bridge between Electron and the renderer (React) ├── src/ # Source files for the React application │ ├── components/ # Reusable React components │ │ ├── TypingTest.tsx # Main component orchestrating the typing test UI and logic │ │ ├── WordDisplay.tsx # Renders words with dynamic highlighting for accuracy │ │ ├── StatsPanel.tsx # Displays real-time statistics: correct/incorrect counts, WPM, timer │ │ └── WPMChart.tsx # Chart component using Chart.js to display WPM trends │ ├── data/ # Data utilities (e.g., word lists) │ │ └── generateWords.ts # Utility function to generate random words for the test │ ├── App.tsx # Main entry point for the React application │ └── index.tsx # Renders the React app into the DOM ├── package.json # Project configurations and scripts ├── vite.config.ts # Vite configuration for React development └── tailwind.config.js # Tailwind CSS configuration

---

### File & Directory Descriptions

- **electron/main.ts:**  
  Sets up the Electron environment, defines window properties, and loads the React application served by Vite. Contains Electron-specific logic for managing the application lifecycle.

- **electron/preload.ts:**  
  Provides a secure communication bridge between the Electron main process and the React renderer process.

- **src/components/TypingTest.tsx:**  
  The core component that combines all UI parts — word display, input field, stats panel, timer, and chart display. This component manages the overall state during the test (user input, timer, word index, etc.).

- **src/components/WordDisplay.tsx:**  
  Renders the list of words for the typing test and applies dynamic color feedback based on user input.

- **src/components/StatsPanel.tsx:**  
  Displays the live statistics of the typing test such as the correct character count, error count, accuracy, current WPM, and remaining time.

- **src/components/WPMChart.tsx:**  
  Creates a dynamic line chart (using Chart.js) to visualize the WPM trend over time during the test.

- **src/data/generateWords.ts:**  
  Contains a list of sample words and includes a function to randomly generate a specified number of words for test sessions.

- **src/App.tsx & src/index.tsx:**  
  Standard React entry points for initializing and rendering the application UI.

---

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/typing-test-app.git
   cd typing-test-app

2. **Install Dependencies**
    ```bash
    npm install

3. **Run Development Server**
    ```bash 
    npm run dev

4. **Build and Package for Production:**
    ```bash
    npm run build 
    npm run electron:build
---

## Usage  

1. **Starting the Test:**
When the application launches, a random list of words is displayed. The typing test starts automatically on the first keystroke.

2. **During the Test:**
The input field captures user typing with real-time feedback (color-coded letters).
A timer counts down (e.g., 60 seconds), while live stats display the WPM, accuracy, and number of errors.
The WPM graph updates in real-time every second.

3. **After the Test:**
Once the test duration ends, the final statistics and performance graph remain visible, allowing users to review their typing performance.

---

## Future Enhancements

**Themes & Customization:**
    Add a toggle for dark/light mode and additional customization options for UI themes.

**User Management:**
    Introduce user profiles to allow multiple users and personalized test histories.

**Export Functionality:**
    Enable exporting test statistics and graphs as CSV files or images.

**Advanced Analytics:**
    Enhance the performance graph and analysis metrics for deeper insights into typing improvements.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgements
Electron.js for providing the desktop framework.
React and Vite for a modern and fast development environment.
Tailwind CSS and ShadCN UI for the beautiful, responsive UI.
Chart.js for real-time data visualization.





