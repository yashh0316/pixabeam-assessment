                PIXABEAM DATABASE MANAGEMENT ASSESSMENT SUBMISSION

This project is a full-stack event management platform using Supabase and Next.js.

# LIVE DEMO:           https://pixabeam-assessment-8fzj.vercel.app/
# GITHUB REPOSITORY:   https://github.com/yashh0316/pixabeam-assessment

                                  KEY FEATURES

A well-structured Supabase (PostgreSQL) database with users, events, and rsvps tables.

A web application that displays all upcoming events.

Interactive RSVP functionality ("Yes", "No", "Maybe").

# ABOVE AND BEYOND

I implemented several extra features to demonstrate a deeper understanding of modern development practices.

# REAL-TIME USER FEEDBACK
The app provides instant confirmation when an RSVP is submitted using React's useActionState hook, which improves the user experience.

# EFFICIENT DATABASE OPERATIONS
The system uses Supabase's .upsert() method to efficiently update existing RSVPs or insert new ones, preventing duplicate data and application errors.

# MODERN & SECURE ARCHITECTURE
Built with Next.js Server Actions for a secure and modern way to handle data, removing the need for traditional API endpoints.

# SECURE CREDENTIAL MANAGEMENT
Sensitive API keys are kept secure using .env.local for development and Vercel's Environment Variables for production.

                                TECHNOLOGY STACK

Framework: Next.js (React)

Language: TypeScript

Database: Supabase (PostgreSQL)

Styling: Tailwind CSS

Deployment: Vercel

HOW TO SET UP LOCALLY

                                 CLONE THE REPOSITORY:

git clone [YOUR_GITHUB_REPO_URL_HERE]
cd pixabeam-assessment
-----------------------------------------------------
INSTALL DEPENDENCIES:
-----------------------------------------------------
npm install
------------------------------------------------------
SET UP ENVIRONMENT VARIABLES:
Create a .env.local file and add your Supabase credentials:
----------------------------------------------------------
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
-----------------------------------------------------
RUN THE DEVELOPMENT SERVER:
--------------------------------------------------------
npm run dev
-----------------------------------------------------
Open http://localhost:3000 to view the app.