# Bhagesh Chavan - Google-Style Portfolio

A modern, Google-inspired portfolio website built with Next.js and Tailwind CSS, featuring intelligent search functionality and a clean, professional design.

## 🌟 Features

- **Google-Style Interface**: Colorful logo, centered search bar, and clean design
- **Smart Search System**: Intelligent autocomplete with keyword matching
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Fast Performance**: Built with Next.js 14 and optimized for speed

## 🚀 Live Demo

Visit the live website: [Bhagesh Portfolio](https://your-vercel-url.vercel.app)

## 📱 Pages

- **Homepage** (`/`) - Google-style search interface with quick stats
- **Search Results** (`/search`) - Dynamic search results with snippets
- **Skills** (`/skills`) - Technical skills organized by categories
- **Projects** (`/projects`) - Portfolio of full-stack applications
- **Internship** (`/internship`) - Jindal Steel internship experience
- **Achievements** (`/achievements`) - Certifications and coding accomplishments
- **Contact** (`/contact`) - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bhagesh07/google-portfolio.git
cd google-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Profile Data

Edit `src/data/profileData.ts` to customize:
- Personal information
- Skills and technologies
- Project details
- Contact information
- Search keywords

### Modify Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

## 🔍 Search Functionality

The search system supports:
- **Autocomplete**: Real-time suggestions as you type
- **Keyword Matching**: Intelligent matching across all content
- **Category Filtering**: Results organized by type
- **Keyboard Navigation**: Arrow keys, Enter, and Escape support

Try searching for:
- "skills" - View technical skills
- "projects" - See portfolio projects  
- "internship" - Jindal Steel experience
- "achievements" - Certifications and coding stats
- "contact" - Get in touch information

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── achievements/       # Achievements page
│   ├── contact/           # Contact page
│   ├── internship/        # Internship page
│   ├── projects/          # Projects page
│   ├── search/            # Search results page
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── SearchBar.tsx      # Search interface
│   ├── SearchResults.tsx  # Search results display
│   └── ThemeProvider.tsx  # Dark mode context
└── data/
    └── profileData.ts     # Profile information and search data
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript for fast loading
- **SEO**: Structured data and meta tags for search engines

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Bhagesh07/google-portfolio/issues).

## 📞 Contact

**Bhagesh Chavan**
- Email: bhageshchavan4304@gmail.com
- LinkedIn: [bhagesh-chavan-822a5824a](https://linkedin.com/in/bhagesh-chavan-822a5824a)
- GitHub: [Bhagesh07](https://github.com/Bhagesh07)
- LeetCode: [bhagesh07](https://leetcode.com/u/bhagesh07)

---

⭐ Star this repository if you found it helpful!
