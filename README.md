# DNA Sequencing

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

./dna_seq input.txt
python3 -m http.server 8000
http://localhost:8000/visual.html
