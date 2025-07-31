# UntrainedModel - AI Playground & Content Generator

A cutting-edge AI platform that provides access to advanced AI models for text generation, code generation, and image creation. Built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- 🤖 **Multi-Provider AI Support**: OpenAI, Google Gemini, and Anthropic Claude
- 💬 **Text Generation**: Advanced language models for content creation
- 💻 **Code Generation**: Intelligent code completion and generation
- 🎨 **Image Generation**: AI-powered image creation (coming soon)
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🌙 **Dark/Light Mode**: Theme switching support
- ⚡ **Fast Performance**: Optimized with Vite and modern React patterns
- 🔍 **Search Functionality**: Quick navigation and prompt discovery
- 💾 **Prompt Templates**: Pre-built templates for common use cases

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- API keys for AI providers (see Environment Variables section)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd untrainedmodel
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables (see next section)

4. Start the development server:
```bash
npm run dev
# or
bun dev
```

### Environment Variables

Create a `.env` file in the project root and add your API keys:

```env
# AI Provider API Keys
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_GOOGLE_API_KEY=your_google_gemini_api_key_here
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

**Getting API Keys:**
- **OpenAI**: Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
- **Google Gemini**: Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Anthropic Claude**: Get your API key from [Anthropic Console](https://console.anthropic.com/)

> **Note**: These are frontend environment variables (prefixed with `VITE_`). Never commit your actual `.env` file to version control.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **Routing**: React Router DOM
- **State Management**: React hooks, TanStack Query
- **Icons**: Lucide React
- **Deployment**: Vercel-ready with SPA support

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Navigation.tsx  # Main navigation
│   ├── FuturisticHero.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Playground.tsx  # AI Playground
│   ├── Blog.tsx        # Blog listing
│   └── ...
├── lib/                # Utility libraries
│   ├── ai.ts          # AI service integration
│   ├── utils.ts       # Helper functions
│   └── ...
├── hooks/              # Custom React hooks
└── assets/             # Static assets
```

## AI Providers & Models

### Supported Providers

1. **Google Gemini** (Default)
   - `gemini-2.0-flash-exp` (Fastest, recommended)
   - `gemini-1.5-flash`
   - `gemini-1.5-pro`

2. **OpenAI**
   - `gpt-4o-mini` (Cost-effective)
   - `gpt-4o`
   - `gpt-4-turbo`

3. **Anthropic Claude**
   - `claude-3-5-haiku-20241022` (Fast)
   - `claude-3-5-sonnet-20241022` (Balanced)
   - `claude-3-opus-20240229` (Most capable)

### Default Models
- **Text Generation**: `gemini-2.0-flash-exp`
- **Code Generation**: `gpt-4o-mini`
- **Conversations**: `claude-3-5-haiku-20241022`

## Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: 1024px+ (lg)
- **Large Desktop**: 1280px+ (xl)

### Mobile Optimizations
- Touch-friendly interface with proper button sizing
- Responsive navigation with mobile menu
- Optimized layouts for small screens
- Progressive text sizing
- Gesture-friendly interactions

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New AI Providers

1. Implement the `AIProvider` interface in `src/lib/ai.ts`
2. Add the provider to the `AIService` constructor
3. Update the UI to include the new provider option

### Customizing Themes

The application uses a comprehensive design system. Customize colors and themes in:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Manual Deployment

1. Build the project: `npm run build`
2. Serve the `dist` folder with any static hosting service
3. Ensure SPA routing is configured (see `public/_redirects` and `public/vercel.json`)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- Create an issue for bugs or feature requests
- Check the documentation for common questions
- Join our community discussions

---

Built with ❤️ for the AI community