Flashcard Spaced Repetition App (v3)

This is the third iteration of my Flashcard Spaced Repetition project, built over the past three years. It is a simple yet effective flashcard-based learning application that uses the spaced repetition technique to help users retain information efficiently.

This project is built with Next.js and bootstrapped using create-next-app.

Features

📚 Flashcard System – Create, edit, and organize flashcards.

🔄 Spaced Repetition Algorithm – Prioritize flashcards based on recall difficulty.

📅 Review Scheduling – Automated review scheduling to reinforce learning.

🌙 Dark Mode Support – Toggle between light and dark themes.

☁️ Cloud Sync – Save flashcards across devices (planned for future updates).

Getting Started

First, clone the repository and install dependencies:

git clone https://github.com/kerrster22/repetitive-flashcards.git
cd repetitive-flashcards
npm install
# or
yarn install
# or
pnpm install
# or
bun install

Then, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser to view the application.

File Structure

app/page.tsx – Main entry point for the application.

components/ – Reusable UI components.

utils/spacedRepetition.ts – Core logic for spaced repetition.

pages/api/ – API routes for backend operations.

styles/ – Global and component-level styles.

Tech Stack

Frontend: Next.js, React, TypeScript

Styling: Tailwind CSS

State Management: Zustand (or Redux, if applicable)

Database: Firebase / Supabase (planned for future updates)

Deployment: Vercel

Learn More

To learn more about Next.js and the technologies used in this project, check out:

Next.js Documentation – Learn about Next.js features and API.

React Docs – Learn about the React framework.

Tailwind CSS – Utility-first styling framework.

Deployment

The easiest way to deploy this Next.js app is using Vercel.

For manual deployment, check out the Next.js deployment guide.

Contributing

Contributions are welcome! If you find a bug or want to request a feature, feel free to open an issue or submit a pull request.

License

This project is licensed under the MIT License.

This is version 3 of the project, iterated over the last three years to improve functionality and user experience.