# Agent System Integration Analysis

## Agent Status
**Active.** The web portal now includes a global UI-based intelligent assistant known as **JadeAI**.

## Implementation Details
The AI system is implemented as a client-side functional React component (`AIAssistant.tsx`) acting as a conversational guide. It has been injected globally via the main `Layout.astro` file, ensuring it is accessible across all routes (Beranda, Sejarah, Struktur, dsb).

### Core Capabilities:
1. **Contextual Navigation Routing**: When users ask questions (e.g., "apa itu chip.com?", "mau gabung"), the assistant provides textual answers natively and generates actionable navigational buttons that bypass traditional soft-routing limitations.
2. **Interactive UI Helper**: Accessible via a floating action button on the bottom right of the screen. Utilizes `framer-motion` for spring-based fluid revealing interactions.
3. **Keyword-Triggered Logic**: Currently relies on predefined keyword heuristics (simulated logic layer) to parse intent and deliver instant relevant responses regarding organizational history, membership induction, and core vision.

## Future Recommendations
For a true LLM-backed experience in the future:
1. Connect `AIAssistant` to an edge function (e.g., Vercel AI SDK or Gemini API) to stream generative responses instead of utilizing heuristic fallbacks.
2. Index the site’s Markdown files into a lightweight vector database to enable Retrieval-Augmented Generation (RAG), allowing the assistant to dynamically answer deep structural questions.
