
# CKS – Commercial Kitchen Solutions

A modern, responsive landing page for CKS Commercial Kitchen Solutions built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, works on all devices
- **Contact Form**: Lead-qualifying form with email integration via Resend
- **SEO Optimized**: Metadata, Open Graph, JSON-LD structured data
- **Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- **Performance**: Optimized for Core Web Vitals

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository** (or copy the files into your project directory)

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (optional for development):
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Configuration (Resend)

The contact form uses [Resend](https://resend.com) to send emails.

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Add it to your `.env.local` file as `RESEND_API_KEY=your_key_here`

### Development Without API Key

If no `RESEND_API_KEY` is provided, the form will still work but emails won't be sent. Instead, form submissions will be logged to the console for testing purposes.

## 🎨 Customization

### Content Updates

All content is centralized in `/lib/constants.ts`. Edit this file to update:
- Company information
- Contact details
- Services offered
- Service areas
- Brand colors

### Styling

The project uses Tailwind CSS with custom components defined in `/app/globals.css`. Key brand colors are:
- Red: `#DC2626` (red-600)
- Black: `#000000`
- White: `#FFFFFF`

### Images

Replace placeholder images in `/public/` with your actual images:
- `/logo-placeholder.svg` - Company logo
- `/hero.jpg` - Hero section image
- `/services/about.jpg` - About section image
- `/map-placeholder.jpg` - Service areas map
- `/services/*.jpg` - Service-specific images

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts     # Contact form API endpoint
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main homepage
├── components/
│   ├── Badge.tsx                # Status badges
│   ├── Container.tsx            # Layout container
│   ├── ContactForm.tsx          # Lead qualification form
│   ├── Footer.tsx               # Site footer
│   ├── Header.tsx               # Site header with navigation
│   ├── SectionHeading.tsx       # Consistent headings
│   └── ServiceCard.tsx          # Service display cards
├── lib/
│   └── constants.ts             # All site content and configuration
├── public/
│   ├── logo-placeholder.svg     # Company logo
│   ├── hero.jpg                 # Hero image
│   ├── map-placeholder.jpg      # Service areas map
│   └── services/                # Service images
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `RESEND_API_KEY` environment variable in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📞 Support

For technical questions about this codebase, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Resend Documentation](https://resend.com/docs)

---

Built with ❤️ for CKS – Commercial Kitchen Solutions
