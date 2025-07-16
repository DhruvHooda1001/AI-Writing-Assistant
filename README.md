# AI Writing Assistant

This project is an AI-powered writing assistant that helps users enhance their writing by providing grammar corrections and rephrased sentences. It leverages modern AI technologies to improve text clarity, grammar, and style.

## Features

- **Grammar Check**: Analyze text for grammatical errors and provide corrections.
- **Rephrasing**: Suggest alternative ways to phrase sentences for better clarity and impact.
- **User-Friendly Interface**: A clean and intuitive interface for seamless interaction.

## Project Structure

```
AI-Writing/
├── backend/                # Backend server and API logic
│   ├── routes/            # API routes (e.g., grammarCheck, rephrasing)
│   ├── server.js          # Main server file
│   └── .env               # Environment variables
├── frontend/               # Frontend React application
│   ├── public/            # Static assets (e.g., logo)
│   ├── src/               # React source code
│   │   ├── components/    # React components (e.g., Home, Editor)
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   └── index.html         # HTML template
└── README.md               # Project documentation
```

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd AI-Writing
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory with the following content:
     ```env
     PORT=3000
     OPENROUTER_API_KEY=<your-api-key>
     ```

4. Start the development servers:

   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm run dev
   ```

5. Open the application in your browser:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

## Usage

1. Navigate to the homepage.
2. Enter text in the editor.
3. Use the "Check Grammar" button to analyze grammar.
4. Select text and use the "Rephrase" button to get alternative phrasings.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: OpenRouter AI

## Acknowledgments

- [OpenRouter AI](https://openrouter.ai/) for providing the AI API.
- [React](https://reactjs.org/) for the frontend framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
