# Tej Industries - Agricultural & Business Solutions Platform

A modern, responsive web application for Tej Industries, providing comprehensive agricultural and business solutions across India. Built with React and Vite, featuring bilingual support (English/Marathi) and integrated appointment scheduling.

## 🚀 Live Demo
[Visit Tej Industries Website](https://tejindustries.netlify.app)

## 📋 Project Overview

Tej Industries is a diversified service company focused on transforming agriculture and small business ecosystems. This web platform showcases their services and enables customer engagement through modern web technologies.

### Key Services Offered:
- **Agriculture Drone Solutions** - Advanced drone technology for precision farming
- **Bank Loan Consultancy** - Expert financial guidance and loan assistance
- **Government Subsidy Assistance** - Complete support for subsidy applications
- **E-Commerce FMCG Trading** - Comprehensive trading solutions
- **End-to-End Project Services** - Complete project management under one roof

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 7.0.0
- **UI Components:** Material-UI (MUI) 7.2.0
- **Icons:** Font Awesome 6.7.2
- **Styling:** CSS3 with custom animations
- **Language Support:** i18n with custom translation system
- **Backend Integration:** RESTful API integration
- **Deployment:** Netlify (Frontend)

## ✨ Key Features

### 🌐 Bilingual Support
- Complete English/Marathi translation system
- Dynamic language switching
- Localized content for better user experience

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### 🎨 Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Interactive service cards
- Image slider with lazy loading

### 📅 Appointment Scheduling
- Real-time appointment booking
- Time slot validation
- Form validation and error handling
- Backend integration for data persistence

### 🔧 Performance Optimizations
- Lazy loading components
- Image optimization (WebP format)
- Code splitting
- Intersection Observer for animations

## 📁 Project Structure

```
tej-industries-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/          # Optimized WebP images
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Layout components
│   │   ├── AppointmentModal.jsx
│   │   └── ImageSlider.jsx
│   ├── pages/
│   │   ├── services/        # Service-specific pages
│   │   └── LandingPage.jsx
│   ├── styles/
│   ├── utils/
│   │   └── translations.js  # Bilingual content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tej-industries-app.git
   cd tej-industries-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Core Components

### Landing Page
- Hero section with compelling messaging
- About section with company mission
- Services showcase with interactive cards
- Customer reviews section
- Contact form with validation
- Image slider with company portfolio

### Service Pages
- Dedicated pages for each service
- Detailed service descriptions
- Step-by-step process explanations
- Call-to-action buttons
- Appointment scheduling integration

### Appointment Modal
- Real-time form validation
- Time slot availability checking
- Backend API integration
- Success/error message handling
- Bilingual form labels

## 🔗 API Integration

The application integrates with a backend API for:
- Contact form submissions
- Appointment scheduling
- Data persistence

**API Endpoints:**
- `POST /api/contact/submit` - Contact form submission
- `POST /api/appointment/schedule` - Appointment booking

## 🎨 Design Features

- **Color Scheme:** Professional green and blue palette
- **Typography:** Clean, readable fonts
- **Animations:** Smooth scroll-triggered animations
- **Icons:** Font Awesome integration
- **Images:** Optimized WebP format for fast loading

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized image sizes
- Mobile-specific interactions
- Fast loading on mobile networks

## 🌍 Internationalization

Complete bilingual support with:
- Dynamic language switching
- Localized content
- Cultural adaptation
- Right-to-left text support where needed

## 🔒 Security Features

- Form validation and sanitization
- CORS configuration
- Secure API communication
- Input validation on both client and server

## 📈 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🚀 Deployment

The application is deployed on Netlify with:
- Automatic builds from Git
- Custom domain configuration
- SSL certificate
- CDN distribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for Tej Industries.

## 📞 Contact

For any queries regarding this project:
- **Email:** info@tejindustries.com
- **Phone:** +91 98765 43210
- **Location:** Pune, Maharashtra, India

---

**Developed with ❤️ for Tej Industries**