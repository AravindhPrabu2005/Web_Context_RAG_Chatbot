# Web Context RAG Chatbot

A full-stack web application that combines Retrieval-Augmented Generation (RAG) with web scraping to create an intelligent chatbot capable of answering questions based on web content context.

## 🎯 Features

- **Web Scraping**: Extract and process content from web pages
- **RAG Technology**: Retrieve relevant context and generate accurate responses
- **Real-time Chat**: Interactive chatbot interface for asking questions
- **LangChain Integration**: Leverages LangChain for advanced language processing
- **Groq AI**: Powered by Groq's language models for fast, efficient responses
- **MongoDB Database**: Persistent storage for conversation history and web content

## 🏗️ Architecture

The project is built with a **client-server** architecture:

### Backend (Node.js/Express)
- **Framework**: Express.js
- **Language Processing**: LangChain with Groq AI integration
- **Web Scraping**: Cheerio for HTML parsing
- **Database**: MongoDB with Mongoose ODM
- **HTTP Client**: Axios

### Frontend (React)
- **Framework**: React 19
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Testing**: Jest with React Testing Library

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AravindhPrabu2005/Web_Context_RAG_Chatbot.git
   cd Web_Context_RAG_Chatbot
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Configuration

1. **Server Setup**
   - Navigate to the `server` directory
   - Create a `.env` file with the following variables:
     ```env
     GROQ_API_KEY=your_groq_api_key
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

2. **Client Setup**
   - The client is pre-configured to connect to `localhost:5000` by default

### Running the Application

1. **Start the server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the client** (in a new terminal)
   ```bash
   cd client
   npm start
   ```
   The client will run on `http://localhost:3000`

## 📁 Project Structure

```
Web_Context_RAG_Chatbot/
├── server/                 # Backend application
│   ├── index.js           # Entry point
│   ├── package.json       # Server dependencies
│   └── ...
├── client/                # Frontend application
│   ├── public/            # Static files
│   ├── src/               # React components
│   ├── package.json       # Client dependencies
│   └── ...
└── README.md
```

## 🔧 Available Scripts

### Server
- `npm start` - Start the development server with hot reload (nodemon)

### Client
- `npm start` - Start the development server
- `npm build` - Create an optimized production build
- `npm test` - Run the test suite
- `npm eject` - Eject from create-react-app configuration

## 📦 Key Dependencies

### Backend
- **@langchain/core** - Core LangChain utilities
- **@langchain/groq** - Groq integration for LangChain
- **cheerio** - Web scraping and parsing
- **mongoose** - MongoDB object modeling
- **express** - Web framework
- **cors** - Cross-origin resource sharing

### Frontend
- **react** - UI library
- **react-dom** - React DOM rendering
- **axios** - HTTP client
- **tailwindcss** - Utility-first CSS framework

## 💡 How It Works

1. **Web Content Processing**: Users provide URLs or web content
2. **Content Extraction**: Cheerio scrapes and parses the web content
3. **RAG Pipeline**: LangChain processes the content and creates embeddings
4. **Query Processing**: User questions are matched against retrieved context
5. **Response Generation**: Groq AI generates contextual responses based on the retrieved content

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **AI/ML** | LangChain, Groq API |
| **Web Scraping** | Cheerio, Axios |
| **Testing** | Jest, React Testing Library |

## 📊 Code Statistics

- **JavaScript**: 83%
- **HTML**: 10.8%
- **CSS**: 6.2%

## 🔐 Environment Variables

Make sure to create a `.env` file in the server directory with:

```
GROQ_API_KEY=your_api_key_here
MONGODB_URI=your_mongodb_uri_here
PORT=5000
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

[AravindhPrabu2005](https://github.com/AravindhPrabu2005)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For questions or issues, please open an issue on the [GitHub repository](https://github.com/AravindhPrabu2005/Web_Context_RAG_Chatbot/issues).

---

**Happy Coding! 🚀**
