# Product Requirements Document (PRD) - UKM Chip.Com Web Portal (Redesign Version)

## 1. Product Overview
The UKM Chip.Com Web Portal has been modernized from a standard informational site into a highly interactive, premium, multi-page digital experience using Astro and React.

The new product focuses on:
- High-end visual identity (Light-theme only, Glassmorphism, Floating elements)
- Interactive UX (Framer Motion animations, Bento Grid layouts)
- AI-Assisted Engagement (JadeAI integration)
- Scalable Island architecture

---

## 2. Target Users
- Prospective members (primary focus)
- Active members
- Public / stakeholders

---

## 3. Problem Statement (Resolved)
Current system limitations that have been addressed:
- Static content with low interactivity -> **Solved with Framer Motion & Interactive React Components.**
- Limited engagement features -> **Solved with direct WA integration and UI Action CTAs.**
- UI is modern but still conventional -> **Solved with Floating Dock Navbar and Bento Grid Hero.**
- No intelligent assistance -> **Solved with integrated `JadeAI` Assistant.**
- Navigation layout bugs -> **Solved by bypassing overlapping ViewTransitions for core App shells.**

---

## 4. Core Features Implemented

### 🔥 Core UI Features
- **Permanent Light Mode Aesthetics**: Removed dark-mode for a clean, consistent, bright modern look.
- **Dynamic Floating Dock Navbar**: Magnetic hover interaction and mobile slide-in drawer.
- **Bento Grid Hero**: Engaging structure with interactive image highlights and active organization stats.
- **Multi-page Architecture**: Built using Astro 6.1 routing combined with React 19 interactive Islands.
- **Premium Innovation Timeline**: Redesigned history section with scroll-linked progress tracing and glassmorphism cards.

### 🤖 AI Features (JadeAI)
- **Global AI Assistant**: A floating chat widget available on all pages.
- **Smart Navigation**: AI suggests actionable direct links to help users explore.
- **Automated FAQ Responder**: Instantly answers queries about UKM Chip.Com, visions, and membership info.

---

## 5. Responsive Strategy (Active)

### Desktop
- Bento Grid formats with hover-reveal elements.
- Floating Dock Navbar (capsule style).
- Expanded AIAssistant floating dialog.

### Mobile
- Single column adaptive layouts.
- Sleek full-screen spring-animated Drawer Menu.
- Touch-friendly large action buttons.

---

## 6. Tech Stack
- **Framework**: Astro 6.1 (Islands Architecture & Multi-page Routing)
- **UI Logic**: React 19
- **Styling**: Tailwind CSS v4 (Glassmorphism & Utilities)
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 7. Future Improvements (Next Phases)

### Post-Launch Priorities
1. **Astro Content Collections**: Migrate static texts (sejarah, visimisi) inside `src/content/` for Markdown-based CMS.
2. **SEO Metadata API**: Implement dynamic `<head>` injection for distinct SEO per page.
3. **Interactive Project Showcase**: Add a dedicated section for active tech projects by members.
