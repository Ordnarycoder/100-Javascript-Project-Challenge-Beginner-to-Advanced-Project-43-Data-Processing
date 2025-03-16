# JSON Data Processing in JavaScript

This project demonstrates how to fetch, process, and display JSON data using JavaScript. It retrieves user data from a JSON file, filters users above 25 years old, and displays the results in an HTML page.

## 🚀 Features

- Fetch data from a JSON file using `fetch()`
- Process data by filtering users above 25 years old
- Display filtered users dynamically in the browser
- Simple, interactive, and beginner-friendly

## 📂 Project Structure

```
/project
  ├── index.html  # Main HTML file
  ├── script.js   # JavaScript logic
  ├── data.json   # Sample JSON data
```

## 🛠 Requirements

- A modern web browser
- A local server (optional if `fetch()` restrictions apply)

## 📄 Sample `data.json`

```json
{
  "users": [
    { "name": "Alice", "age": 30 },
    { "name": "Bob", "age": 22 },
    { "name": "Charlie", "age": 27 },
    { "name": "Daisy", "age": 24 }
  ]
}
```

## 🖥️ How to Run

1. **Open `index.html` directly in a browser**
2. **If `fetch()` fails due to CORS:**
   - Run a local server:
     ```bash
     python -m http.server
     ```
   - Or use VS Code **Live Server** extension
3. The filtered users will be displayed on the webpage.

## 🎯 Future Enhancements

- Add sorting functionality
- Implement search or filtering by user input
- Use external APIs instead of a local JSON file

## 📜 License

This project is open-source and free to use or modify.

