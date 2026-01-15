# MicroComputer - Computer Education Institute Website

## Overview

MicroComputer is a modern, premium-themed website for a computer education institute. It showcases courses offered by the institute (ADCA, DCA, HTML, Hardware, Python, CSS, Java), provides information about the organization, and includes contact details for enrollment inquiries. The application features a dark glassmorphism design with smooth animations and a responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom dark theme (glassmorphism design)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for entrance animations and scroll effects
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Outfit for headings, Inter for body text)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Structure**: RESTful endpoints defined in `shared/routes.ts`

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit (`drizzle-kit push` for schema sync)
- **Note**: Course data is currently hardcoded in the frontend rather than fetched from the database

### Project Structure
```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── db.ts            # Database connection
│   └── storage.ts       # Data access layer
├── shared/              # Shared code between client/server
│   ├── schema.ts        # Drizzle database schema
│   └── routes.ts        # API route type definitions
└── migrations/          # Database migrations
```

### Key Design Decisions
1. **Static Course Data**: Courses are hardcoded in React components rather than fetched from database, simplifying the initial implementation
2. **Shared Types**: TypeScript schemas and route definitions are shared between frontend and backend via the `shared/` directory
3. **Component Library**: Uses shadcn/ui for consistent, accessible UI components with Tailwind styling
4. **Path Aliases**: TypeScript path aliases (`@/`, `@shared/`) for cleaner imports

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database ORM and query builder
- **connect-pg-simple**: PostgreSQL session store (available but not actively used)

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI transitions
- **react-day-picker**: Calendar component
- **embla-carousel-react**: Carousel functionality
- **cmdk**: Command menu component
- **vaul**: Drawer component

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Replit development tooling
- **@replit/vite-plugin-dev-banner**: Development banner