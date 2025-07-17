import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Playground from './pages/Playground';
import Hallucinations from './pages/Hallucinations';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Train from './pages/Train';
import Chaos404 from './pages/Chaos404';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Helmet>
          <title>UntrainedModel.xyz - Where Dumb AI Meets Brilliant Chaos</title>
          <meta name="description" content="The AI that forgot to train. Just vibes. No accuracy. LLM? More like LOLM." />
          <meta name="keywords" content="AI playground, untrained AI, AI chaos, prompt generator, AI satire, experimental AI" />
          <meta property="og:title" content="UntrainedModel.xyz - Chaotic AI Playground" />
          <meta property="og:description" content="Where dumb AI meets brilliant chaos. The AI that forgot to train." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.untrainedmodel.xyz/" />
        </Helmet>
        
        <Header />
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/hallucinations" element={<Hallucinations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/train" element={<Train />} />
            <Route path="*" element={<Chaos404 />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;