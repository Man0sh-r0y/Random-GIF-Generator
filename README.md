
# Random GIF Generator

Welcome to the Random GIF Generator project! This application allows users to generate random GIFs as well as search for specific GIFs based on their preferences. It has been developed using React JS and utilizes the Giphy API to fetch GIFs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API used](#api)
- [Contributing](#contributing)

## Features

- **Generate Random GIFs**: Get a random GIF with just a click of a button.
- **Search for GIFs**: Use the search functionality to find GIFs related to specific keywords.

## Installation

Before running the project, you need to install the required dependencies. Follow these steps:

**Step 1**: Clone this repository to your local machine:
```bash
  git clone https://github.com/Man0sh-r0y/Random-GIF-Generator.git
```
**Step 2**: Navigate to the project directory:
```bash
cd Random-GIF-Generator
```
**Step 3**: Install the project dependencies using npm:
```bash
npm install
```
## Usage

1. After installing the required dependencies, you can start the project using the following command:

    ```bash
    npm start
    ```
1. This will launch the application in your default web browser. You can interact with the app by generating random GIFs or searching for specific ones using keywords.

1. To generate a random GIF, simply click the "Generate" button.

1. To search for GIFs, enter a keyword in the search bar and click the "Generate" button. The app will display GIFs related to your search term.

1. Enjoy exploring and sharing your favorite GIFs!

## API
I used this below API to get Random GIF
```bash
  https://api.giphy.com/v1/gifs/random?api_key={API_KEY}
```
I used this below API to get specified GIF based on search Result
```bash
  https://api.giphy.com/v1/gifs/random?api_key={API_KEY}&tag={tag}
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

1. Create a new branch for your feature or bug fix:

    ```bash
        git checkout -b feature/your-feature-name
    ```
1. Make your changes and commit them with descriptive commit messages.

1. Push your changes to your branch on GitHub:

    ```bash
        git push origin feature/your-feature-name
    ```
1. Create a pull request against the main branch of this repository.



