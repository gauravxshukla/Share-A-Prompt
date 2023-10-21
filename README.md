# Promptopia (ChatGPT Prompt Sharing App)

Share and discover useful and creative prompts for ChatGPT with our Next.js application. Our platform allows you to easily share, copy, and collaborate on prompts. With MongoDB for data storage and Google OAuth for seamless login/signup, getting started is a breeze. Hosted on Vercel for reliability and accessibility.

![ChatGPT Prompt Sharing App](chatgpt-app-screenshot.png)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Google OAuth](#google-oauth)

## Demo

Try the [ChatGPT Prompt Sharing App](https://prompts.gauravxshukla.me/) live on the web.

## Features

- Share and discover useful and creative prompts for ChatGPT.
- Copy prompts with a single click for immediate use.
- Collaborate with the community to generate new ideas.
- Secure and easy login/signup with Google OAuth.
- MongoDB for reliable data storage.
- Hosted on Vercel for seamless accessibility.

## Getting Started

To run this application locally on your machine, follow these steps:

1. Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/gauravvv-shukla/Share-A-Prompt.git
   ```

2. Install the dependencies:

   ```bash
   cd Share-A-Prompt
   npm install
   ```

3. Set up your environment variables by creating a `.env.local` file with your MongoDB and Google OAuth credentials:

   ```env
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   MONGODB_DB=
   MONGODB_URI=
   NEXTAUTH_URL=
   NEXTAUTH_URL_INTERNAL=
   NEXTAUTH_SECRET=
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the ChatGPT Prompt Sharing App.

## How to Use

1. Explore the collection of prompts shared by the community.
2. Click on a prompt to view its details.
3. Copy a prompt to your clipboard with a single click for immediate use.
4. Contribute to the platform by sharing your own creative prompts.

## Google OAuth

Seamlessly login or sign up with Google OAuth for a secure and hassle-free experience. Your Google account credentials are used to create and authenticate your account.

---

Unlock the power of ChatGPT with our Prompt Sharing App.
