# QR Attendance System

This repository contains the source code and resources for a web-based attendance system that utilizes QR codes. The system is designed to simplify attendance tracking by allowing users to scan QR codes, search for names, and mark attendance.

## Features
- **User-Friendly Interface:** A dropdown menu populated with data from an Excel database.
- **Search Functionality:** Allows users to quickly search for names from a large dataset.
- **Registration Number Display:** Displays the corresponding registration number when a name is selected.
- **Attendance Marking:** A "Mark Present" button that records the attendance in a separate Excel sheet.
- **Responsive Design:** Compatible with various devices, ensuring accessibility for all users.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** None (handled via client-side JavaScript)
- **Data Storage:** Excel database (converted to JSON/CSV)

## How to Use
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/osaigb/qr-attendance-system.git
   cd qr-attendance-system
   ```

2. **Set Up the Project:**
   - Ensure your data is in a JSON or CSV format and place it in the repository.

3. **Run the Application:**
   - Open `index.html` in your web browser.

4. **Using the Application:**
   - Select a name from the dropdown or use the search feature to find a name.
   - View the registration number displayed below the dropdown.
   - Click "Mark Present" to record the attendance.

## Contributing
We welcome contributions! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
