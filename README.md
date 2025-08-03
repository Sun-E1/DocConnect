# 📘 DocConnect

**DocConnect** is a responsive web application that allows users to view available doctors, explore their profiles, and seamlessly book appointments. Designed with React.js, TypeScript, and CSS (Tailwind), this project emphasizes usability, performance, and clean UI/UX practices.

---

## 🌐 Live Preview

> _Add your deployment link here (e.g., Vercel, Netlify, GitHub Pages)_

---

## 🚀 Features

- 🔍 **Searchable Doctor List**

  - Displays doctor image, name, specialization, and availability
  - Search bar for filtering doctors by name or specialty

- 📄 **Doctor Profile Page**

  - Displays full profile details of the selected doctor
  - Shows live availability
  - "Book Appointment" button

- 📆 **Appointment Booking Form**

  - Collects patient's name, email, and date/time
  - Automatically pre-fills with local machine time
  - Error handling for:
    - Empty fields
    - Invalid email format (missing '@')
  - Confirmation message with tick mark on successful submission

- 📱 **Fully Responsive**
  - Tailored for desktop, tablet, and mobile screens
  - Controlled hover effects only for larger screens

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS & custom utility classes
- **Routing**: React Router DOM (without hooks or functional state)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- Git (optional)

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/docconnect.git

# Navigate into the directory
cd docconnect

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🔄 Project Structure (Simplified)

```
src/
├── components/
│   ├── Home
│   ├── DoctorDetails
│   └── BookingDetails
|   ├── ConformationDetails
|   ├── DoctorInfo
|   ├── ConfirmComponent
├── App.js
├── App.css
├── index.js
├── index.css

```

---

## ⚠️ Challenges Faced & Solutions

| Challenge                                          | Solution                                                                                                                                                                         |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Responsive layout not applying on real devices     | Adjusted Tailwind config and used `sm:` `md:` `lg:` prefixes correctly. Verified with actual device breakpoints and ensured content paths in `tailwind.config.js` were accurate. |
| Unwanted hover effects on mobile                   | Limited hover behavior using `lg:hover:` so it only applies on large screens and above.                                                                                          |
| Input validation logic issues                      | Introduced layered validation: required checks + email `@` validation inside `handleSubmit()` with error messages displayed near inputs.                                         |
| Date/time default value was incorrect              | Used JavaScript to get the local machine’s current date and time, formatted properly, and set as the default value of the input.                                                 |
| Conditional component rendering in class component | Managed using `this.state.showComponent` logic and avoided React hooks by encapsulating rendering in `if` conditions.                                                            |
| CSS flicker and layout shift on hover              | Used `transition-transform`, `ease-in-out`, and consistent element sizing to smooth out hover effects and avoid layout shifts.                                                   |
| Small devices not rendering font sizes correctly   | Debugged Tailwind breakpoints and ensured no conflicting styles were overriding `sm:text-*` values.                                                                              |

---

---
