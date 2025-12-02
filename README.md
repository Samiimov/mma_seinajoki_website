Here’s a clean, professional **README.md** tailored for your MMA Seinäjoki GitHub Pages website project.

You can copy this directly into `README.md` in the repository.

---

# 🥋 MMA Seinäjoki — Official Website

This repository contains the source code for the **MMA Seinäjoki ry** website, published through **GitHub Pages**.

The site includes:

* A modern black-and-white hero design
* Automated weekly training schedule (loaded from `schedule.txt`)
* Contact information
* Links to Instagram and Facebook
* Responsive layout
* Background hero image

Live site:
👉 *(Add the GitHub Pages link here once published)*

---

## 🚀 Features

### **Dynamic Training Schedule**

The weekly schedule is stored in a simple text file:

```
schedule.txt
```

JavaScript automatically parses this file and generates a responsive 7-column table (Mon–Sun).
To modify the schedule, **only edit `schedule.txt`** — no HTML changes required.

### **Clean Section Layouts**

* Hero section with background image & text overlay
* About/description section
* Weekly schedule section
* Contact information with email, phone, and address
* Social media footer

### **Responsive Design**

The site adapts to all devices using pure CSS (no frameworks).

---

## 📁 Project Structure

```
/
├── index.html               # Main page
├── harjoitukset.html        # Training schedule subpage (optional)
├── styles.css               # Styling
├── schedule.txt             # Raw weekly schedule data (parsed by JS)
├── logo-mma-seinajoki.png   # Club logo
├── banner2.jpg              # Hero background image
└── README.md                # This file
```

## ✏️ Updating the Weekly Schedule

Simply edit `schedule.txt`:

```
Maanantai
17:00 - 18:30 Defendo
17:30 - 19:00 Lukkopaini
...
```

The website automatically re-generates the table on page load.

No HTML or JavaScript changes are needed.

---

## 📸 Hero Background Image

The hero section background can be replaced by adding a new file (e.g. `banner.jpg`) and updating this line in `styles.css`:

```css
#hero {
    background-image: url("banner2.jpg");
}
```
