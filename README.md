# 🚨 Jeevifyy - Emergency Healthcare Platform

A comprehensive emergency healthcare response platform designed to connect people in crisis to rapid, coordinated help within minutes. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features
#

### 🚨 Emergency Response System
- **SOS Activation**: One-tap emergency activation with voice command support
- **Auto-Alert System**: Simultaneous alerts to contacts, hospitals, and emergency services
- **Location Sharing**: Precise GPS location sharing with indoor positioning
- **Transport Booking**: Automatic ambulance/cab booking with priority routing
- **Real-time Tracking**: Live vehicle tracking and ETA updates
- **Coordinated Care**: Hospital preparation and seamless handoff

### 🎨 User Interface
- **Dark Mode Support**: Full dark/light theme toggle
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Bilingual Support**: English and Hindi language support
- **Interactive Elements**: Hover effects, animations, and smooth transitions

### 📱 Pages & Components
- **Homepage**: Hero section with live metrics, workflow demo, and technology highlights
- **About**: Company mission, vision, and team information
- **First Aid**: Interactive emergency instructions with bilingual support
- **Contact**: Multiple contact methods with integrated form
- **SOS**: Emergency response interface (in development)

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **Lucide React**: Beautiful icon library

### Styling & Animation
- **Custom Animations**: Heartbeat, shimmer, float, and emergency pulse effects
- **Gradient Backgrounds**: Dynamic color schemes
- **Responsive Grid**: Mobile-first responsive design
- **Dark Mode**: Comprehensive theme support

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jeevifyy.git
   cd jeevifyy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
jeevifyy/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── first-aid/         # First Aid instructions
│   ├── sos/              # Emergency SOS page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx          # Homepage hero section
│   ├── Mission.tsx       # Mission statement
│   ├── WorkflowDemo.tsx  # Interactive workflow
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Website footer
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── homepage.png      # Hero image
│   └── Jeevifyy logo.jpeg # Company logo
├── styles/               # Additional styles
└── package.json          # Dependencies and scripts
```

## 🎯 Key Components

### Hero Section (`components/Hero.tsx`)
- Live metrics display with real-time updates
- Interactive video demo popup
- Responsive design with floating elements
- Emergency-themed animations

### Workflow Demo (`components/WorkflowDemo.tsx`)
- Interactive 6-step emergency process
- Clickable steps with detailed information
- Video integration for demonstrations
- Professional modal dialogs

### First Aid Page (`app/first-aid/page.tsx`)
- Bilingual support (English/Hindi)
- Interactive emergency instructions
- Audio guide integration
- Responsive card layout

### Contact System (`app/contact/page.tsx`)
- Multiple contact methods
- Integrated contact form
- Newsletter subscription
- Professional styling

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Trust and reliability
- **Emergency**: Red (#EF4444) - Urgency and action
- **Success**: Green (#10B981) - Safety and confirmation
- **Warning**: Yellow (#F59E0B) - Caution and attention

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body**: Readable sans-serif for content
- **Emergency**: High contrast for accessibility

### Animations
- **Heartbeat**: Pulsing effect for emergency elements
- **Shimmer**: Loading and attention effects
- **Float**: Subtle movement for engagement
- **Slide**: Smooth transitions between sections

## 🌐 Pages Overview

### Homepage (`/`)
- Hero section with live metrics
- Mission statement
- Interactive workflow demo
- Technology highlights
- Impact metrics
- Partnership CTA

### About (`/about`)
- Company mission and vision
- Team information
- Values and principles
- Visual bifurcation elements

### First Aid (`/first-aid`)
- Emergency type selection
- Step-by-step instructions
- Bilingual support
- Audio guides
- Interactive dialogs

### Contact (`/contact`)
- Multiple contact methods
- Integrated contact form
- Newsletter subscription
- Professional styling

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Configure build settings similarly
- **AWS Amplify**: Use Next.js preset
- **Docker**: Use official Next.js Docker image

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Implement responsive design
- Maintain accessibility standards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript conventions
- Use meaningful component names
- Implement proper error handling
- Add comprehensive comments
- Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **shadcn/ui**: For the beautiful component library
- **Lucide**: For the comprehensive icon set

## 📞 Support

For support, email us at:
- **General Inquiries**: xyz@jeevifyy.com
- **Technical Support**: abc@jeevifyy.com

## 🚨 Emergency

**For real emergencies, please call your local emergency services immediately.**

This platform is designed to complement, not replace, traditional emergency services.

---

**Built with ❤️ for emergency healthcare response** 