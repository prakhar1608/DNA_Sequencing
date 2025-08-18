# 🧬 DNA Sequencing

## 📌 Overview
This project demonstrates **DNA sequencing and visualization** using a combination of **C for backend sequence processing** and a **web-based interface for visualization**.

- **C program (`main.c`)** → Handles DNA sequence processing and generates results.  
- **Web interface (`visual.html`, `script.js`, `style.css`)** → Provides an interactive visualization of the sequencing results.  

---

## 🚀 Features
- DNA sequence processing using C  
- Command-line interface for running sequence analysis  
- Web-based visualization for interactive results  
- Clean separation of computation (C) and visualization (JS/HTML/CSS)  

---

## 🛠️ Installation & Setup

### Prerequisites
- GCC or any C compiler  
- A modern browser (Chrome, Firefox, etc.)  
- *(Optional)* A local HTTP server for dynamic file loading  

### Compile the C Program
```bash
gcc -o dna_seq main.c
```
### Run the Program
```bash

./dna_seq input.txt
```
👉 The program will process DNA sequences and print results (stdout or file depending on implementation).
## Launch the Web Interface
### Option 1: Open visual.html directly in your browser.

### Option 2 (recommended): Start a local server in the project directory:

```bash
python3 -m http.server 8000
```
Then open:

```bash

http://localhost:8000/visual.html
```
## Project Structure
```graphql
DNA_Sequencing/
│── main.c          # Core C program for DNA sequence processing
│── visual.html     # Webpage for visualization
│── script.js       # Handles interactive visualization logic
│── style.css       # Stylesheet for the visualization
│── README.md       # Project documentation
```
