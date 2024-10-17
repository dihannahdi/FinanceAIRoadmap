"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Video, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  {
    name: "Strengthening Foundations",
    duration: "Oct 2024 - Mar 2025",
    color: "bg-blue-100 border-blue-300",
    months: [
      {
        name: "October 2024",
        topic: "Deepening Python Skills with Financial Applications",
        objectives: [
          "Master Python fundamentals with a focus on finance.",
          "Understand how Python is used in financial data analysis."
        ],
        topics: [
          "Python basics: data types, control structures, functions.",
          "Introduction to financial data structures: time series, data frames.",
          "Using Python libraries for finance: pandas, NumPy."
        ],
        resources: [
          { type: "book", name: "Python for Finance by Yves Hilpisch" },
          { type: "course", name: "Python for Financial Analysis and Algorithmic Trading on Udemy" },
          { type: "course", name: "Python and Statistics for Financial Analysis on Coursera" }
        ],
        assignments: [
          "Analyze historical stock price data using pandas.",
          "Calculate basic financial indicators (e.g., moving averages)."
        ]
      },
      {
        name: "November 2024",
        topic: "Advanced Python and Introduction to C++ in Finance",
        objectives: [
          "Dive into advanced Python topics relevant to finance.",
          "Begin learning C++ basics with financial applications."
        ],
        topics: [
          "Advanced Python: OOP, exception handling, decorators.",
          "C++ basics: syntax, data types, control structures.",
          "Introduction to Quantitative Finance concepts."
        ],
        resources: [
          { type: "book", name: "Mastering Python for Finance by James Ma Weiming" },
          { type: "book", name: "C++ Programming for Financial Engineering by Daniel J. Duffy" },
          { type: "course", name: "C++ Programming for Financial Engineering by Baruch College on Coursera" }
        ],
        assignments: [
          "Python: Implement classes for financial instruments (e.g., bonds, stocks).",
          "C++: Write simple programs for option pricing models."
        ]
      },
      {
        name: "December 2024",
        topic: "Deepening C++ Skills in Quantitative Finance",
        objectives: [
          "Understand OOP in C++ with financial applications.",
          "Learn about templates, STL, and their use in finance."
        ],
        topics: [
          "Classes, inheritance, and polymorphism in C++.",
          "Templates and the Standard Template Library.",
          "Numerical methods for finance (e.g., Monte Carlo simulations)."
        ],
        resources: [
          { type: "book", name: "Introduction to C++ for Financial Engineers by Daniel J. Duffy" },
          { type: "course", name: "Computational Finance and Financial Econometrics on Coursera" }
        ],
        assignments: [
          "Implement a Monte Carlo simulation for option pricing in C++.",
          "Use STL containers to manage financial data."
        ]
      },
      {
        name: "January 2025",
        topic: "Data Structures and Algorithms - Part 1",
        objectives: [
          "Grasp fundamental data structures and algorithms.",
          "Apply them to financial data processing."
        ],
        topics: [
          "Arrays, linked lists, stacks, queues.",
          "Big O notation and algorithmic complexity.",
          "Sorting algorithms and their efficiency."
        ],
        resources: [
          { type: "book", name: "Data Structures and Algorithms in Python by Michael T. Goodrich et al." },
          { type: "course", name: "Algorithmic Trading Strategies on Coursera" }
        ],
        assignments: [
          "Implement data structures to manage portfolio holdings.",
          "Apply sorting algorithms to order financial transactions."
        ]
      },
      {
        name: "February 2025",
        topic: "Data Structures and Algorithms - Part 2",
        objectives: [
          "Dive into advanced algorithms.",
          "Understand their applications in finance."
        ],
        topics: [
          "Graph algorithms (BFS, DFS) for network analysis.",
          "Dynamic programming for optimization problems.",
          "Hash tables for quick data retrieval."
        ],
        resources: [
          { type: "book", name: "Algorithms by Robert Sedgewick and Kevin Wayne" },
          { type: "course", name: "Advanced Algorithmic Trading on Udemy" }
        ],
        assignments: [
          "Use dynamic programming to optimize asset allocation.",
          "Analyze financial networks using graph algorithms."
        ]
      },
      {
        name: "March 2025",
        topic: "Mathematics for Financial AI",
        objectives: [
          "Strengthen mathematical foundations in finance.",
          "Apply mathematical concepts to financial modeling."
        ],
        topics: [
          "Linear Algebra: Matrices and linear transformations in portfolio theory.",
          "Calculus: Continuous compounding and interest rates.",
          "Probability and Statistics: Probability distributions in risk assessment, Statistical inference for financial data."
        ],
        resources: [
          { type: "book", name: "Mathematics for Finance: An Introduction to Financial Engineering by Marek Capinski and Tomasz Zastawniak" },
          { type: "course", name: "Mathematics for Machine Learning on Coursera" }
        ],
        assignments: [
          "Model asset returns using statistical distributions.",
          "Apply linear algebra in portfolio optimization problems."
        ]
      }
    ]
  },
  {
    name: "Web Development Foundations",
    duration: "Apr 2025 - Sep 2025",
    color: "bg-green-100 border-green-300",
    months: [
      {
        name: "April 2025",
        topic: "Front-End Development Basics",
        objectives: [
          "Understand web technologies for financial applications.",
          "Learn to create interfaces for financial data visualization."
        ],
        topics: [
          "HTML5 and CSS3 basics.",
          "Introduction to financial dashboards.",
          "Responsive design for data-heavy applications."
        ],
        resources: [
          { type: "book", name: "HTML & CSS: Design and Build Websites by Jon Duckett" },
          { type: "course", name: "Responsive Web Design by freeCodeCamp" }
        ],
        assignments: [
          "Create a static webpage showcasing financial news.",
          "Design a basic dashboard layout for financial metrics."
        ]
      },
      {
        name: "May 2025",
        topic: "JavaScript and Data Visualization",
        objectives: [
          "Learn JavaScript for interactive financial applications.",
          "Visualize financial data using JavaScript libraries."
        ],
        topics: [
          "JavaScript fundamentals.",
          "D3.js for data visualization.",
          "Handling real-time data updates."
        ],
        resources: [
          { type: "book", name: "Eloquent JavaScript by Marijn Haverbeke" },
          { type: "course", name: "Data Visualization with D3.js on Udemy" }
        ],
        assignments: [
          "Build interactive charts displaying stock prices.",
          "Implement real-time updates using WebSockets."
        ]
      },
      {
        name: "June 2025",
        topic: "Front-End Frameworks for Finance",
        objectives: [
          "Use React.js to build dynamic financial applications.",
          "Manage state and data flow in complex interfaces."
        ],
        topics: [
          "React components, state, and props.",
          "Redux for state management.",
          "Integration with financial APIs."
        ],
        resources: [
          { type: "book", name: "Learning React by Alex Banks and Eve Porcello" },
          { type: "course", name: "The Complete React Developer Course by Andrew Mead on Udemy" }
        ],
        assignments: [
          "Create a React app that fetches and displays financial data.",
          "Implement a portfolio tracker with user authentication."
        ]
      },
      {
        name: "July 2025",
        topic: "Back-End Development with Python",
        objectives: [
          "Develop back-end services for financial applications.",
          "Work with financial databases."
        ],
        topics: [
          "Django framework basics.",
          "RESTful API development.",
          "Working with financial databases (e.g., time-series databases)."
        ],
        resources: [
          { type: "book", name: "Django for APIs by William S. Vincent" },
          { type: "course", name: "Django 3 - Full Stack Websites with Python on Udemy" }
        ],
        assignments: [
          "Develop an API that provides financial data to front-end apps.",
          "Connect to financial data sources (e.g., Bloomberg API, Yahoo Finance)."
        ]
      },
      {
        name: "August 2025",
        topic: "Databases and Financial Data Management",
        objectives: [
          "Understand database systems used in finance.",
          "Learn to manage large volumes of financial data."
        ],
        topics: [
          "SQL databases: PostgreSQL with time-series extensions.",
          "NoSQL databases: MongoDB for unstructured data.",
          "Data warehousing concepts."
        ],
        resources: [
          { type: "book", name: "Time Series Databases by Ted Dunning and Ellen Friedman" },
          { type: "course", name: "Database Management Essentials on Coursera" }
        ],
        assignments: [
          "Design a database schema for storing historical financial data.",
          "Implement data ingestion pipelines."
        ]
      },
      {
        name: "September 2025",
        topic: "Full-Stack Project: Financial Dashboard Application",
        objectives: [
          "Integrate front-end and back-end skills in a comprehensive project.",
          "Build a functional financial dashboard application."
        ],
        topics: [
          "User authentication and profile management.",
          "Real-time stock price updates.",
          "Customizable dashboards with charts and tables.",
          "Integration with financial news APIs."
        ],
        resources: [
          { type: "book", name: "Full Stack JavaScript Development with MERN by Shama Hoque" }
        ],
        assignments: [
          "Set up version control with GitHub.",
          "Document the project with a detailed README.",
          "Deploy the application to a cloud platform."
        ]
      }
    ]
  },
  {
    name: "Machine Learning Foundations",
    duration: "Oct 2025 - Mar 2026",
    color: "bg-yellow-100 border-yellow-300",
    months: [
      {
        name: "October 2025",
        topic: "Introduction to Machine Learning in Finance",
        objectives: [
          "Understand the basics of machine learning with financial datasets.",
          "Learn about supervised learning methods for prediction."
        ],
        topics: [
          "Linear regression for stock price prediction.",
          "Logistic regression for credit scoring.",
          "Evaluation metrics specific to financial models."
        ],
        resources: [
          { type: "book", name: "Machine Learning for Asset Managers by Marcos López de Prado" },
          { type: "course", name: "Machine Learning in Finance by NYU on Coursera" }
        ],
        assignments: [
          "Predict stock prices using linear regression.",
          "Develop a credit risk model using logistic regression."
        ]
      },
      {
        name: "November 2025",
        topic: "Time Series Analysis",
        objectives: [
          "Analyze and model financial time series data.",
          "Understand ARIMA and other forecasting models."
        ],
        topics: [
          "Stationarity, autocorrelation, and partial autocorrelation.",
          "ARIMA, GARCH models.",
          "Forecasting future values."
        ],
        resources: [
          { type: "book", name: "Introduction to Time Series and Forecasting by Peter J. Brockwell and Richard A. Davis" },
          { type: "course", name: "Practical Time Series Analysis on Coursera" }
        ],
        assignments: [
          "Analyze stock market volatility using GARCH models.",
          "Forecast currency exchange rates with ARIMA models."
        ]
      },
      {
        name: "December 2025",
        topic: "Advanced Machine Learning Algorithms",
        objectives: [
          "Explore ensemble methods and their use in finance.",
          "Understand clustering algorithms for market segmentation."
        ],
        topics: [
          "Decision trees, random forests, gradient boosting.",
          "K-means clustering, hierarchical clustering.",
          "Dimensionality reduction techniques (PCA)."
        ],
        resources: [
          { type: "book", name: "Advances in Financial Machine Learning by Marcos López de Prado" },
          { type: "course", name: "Machine Learning with Python by IBM on Coursera" }
        ],
        assignments: [
          "Build a fraud detection system using random forests.",
          "Segment customers or assets using clustering methods."
        ]
      },
      {
        name: "January 2026",
        topic: "Natural Language Processing in Finance",
        objectives: [
          "Extract insights from financial texts.",
          "Analyze market sentiment from news and social media."
        ],
        topics: [
          "Text preprocessing for financial documents.",
          "Sentiment analysis specific to finance.",
          "Topic modeling."
        ],
        resources: [
          { type: "book", name: "Natural Language Processing in Action by Hobson Lane et al." },
          { type: "course", name: "NLP with Python for Machine Learning Essential Training on LinkedIn Learning" }
        ],
        assignments: [
          "Perform sentiment analysis on financial news articles.",
          "Develop a model to predict stock movements based on news sentiment."
        ]
      },
      {
        name: "February 2026",
        topic: "Introduction to Deep Learning in Finance",
        objectives: [
          "Understand neural networks and their applications in finance.",
          "Learn about deep learning architectures suitable for financial data."
        ],
        topics: [
          "Neural network basics: perceptrons, activation functions.",
          "Overfitting, regularization, and model tuning.",
          "Application of neural networks to financial time series."
        ],
        resources: [
          { type: "book", name: "Deep Learning for Finance by Antonio Gulli and Amir Kamali" },
          { type: "course", name: "Deep Learning Specialization by Andrew Ng on Coursera" }
        ],
        assignments: [
          "Implement a neural network to predict stock price movements.",
          "Compare performance with traditional models."
        ]
      },
      {
        name: "March 2026",
        topic: "Reinforcement Learning in Trading",
        objectives: [
          "Apply reinforcement learning to develop trading strategies.",
          "Understand Markov Decision Processes in finance."
        ],
        topics: [
          "Basics of reinforcement learning.",
          "Q-learning and policy gradients.",
          "Implementation of trading agents."
        ],
        resources: [
          { type: "book", name: "Hands-On Reinforcement Learning for Games and Simulations by Qianwen Mao" },
          { type: "course", name: "Reinforcement Learning by University of Alberta on Coursera" }
        ],
        assignments: [
          "Develop a trading bot using reinforcement learning.",
          "Backtest the strategy on historical data."
        ]
      }
    ]
  },
  {
    name: "Deep Learning and Advanced AI",
    duration: "Apr 2026 - Sep 2026",
    color: "bg-red-100 border-red-300",
    months: [
      {
        name: "April 2026",
        topic: "Advanced Deep Learning Techniques",
        objectives: [
          "Explore LSTMs and RNNs for financial time series.",
          "Understand how to model sequential financial data."
        ],
        topics: [
          "Recurrent Neural Networks (RNNs).",
          "Long Short-Term Memory (LSTM) networks.",
          "Sequence modeling for financial forecasting."
        ],
        resources: [
          { type: "book", name: "Deep Learning by Ian Goodfellow et al." },
          { type: "course", name: "Sequence Models by Andrew Ng on Coursera" }
        ],
        assignments: [
          "Implement an LSTM model to forecast stock prices.",
          "Analyze the model's performance over different time horizons."
        ]
      },
      {
        name: "May 2026",
        topic: "Generative Models and Anomaly Detection",
        objectives: [
          "Understand autoencoders and their use in anomaly detection.",
          "Apply generative models to financial data."
        ],
        topics: [
          "Autoencoders for feature extraction.",
          "Variational Autoencoders (VAEs).",
          "Detecting anomalies in transaction data."
        ],
        resources: [
          { type: "book", name: "Anomaly Detection Principles and Algorithms by Pavel Laskov" },
          { type: "course", name: "Anomaly Detection in Time Series Data on Udemy" }
        ],
        assignments: [
          "Use autoencoders to detect fraudulent transactions.",
          "Generate synthetic financial data with VAEs."
        ]
      },
      {
        name: "June 2026",
        topic: "Natural Language Processing with Deep Learning",
        objectives: [
          "Apply deep learning techniques to NLP tasks in finance.",
          "Use transformer models for financial text analysis."
        ],
        topics: [
          "Word embeddings (Word2Vec, GloVe).",
          "Transformer architectures (BERT, GPT).",
          "Sentiment analysis with deep learning."
        ],
        resources: [
          { type: "book", name: "Natural Language Processing with Transformers by Lewis Tunstall et al." },
          { type: "course", name: "Natural Language Processing with Attention Models by deeplearning.ai on Coursera" }
        ],
        assignments: [
          "Build a sentiment classifier using BERT.",
          "Analyze earnings call transcripts to predict stock movements."
        ]
      },
      {
        name: "July 2026",
        topic: "Model Deployment and Serving in Finance",
        objectives: [
          "Learn how to deploy financial AI models securely.",
          "Understand compliance and security considerations."
        ],
        topics: [
          "Model serving with Flask or FastAPI.",
          "Secure APIs with authentication and encryption.",
          "Compliance with financial regulations (e.g., GDPR, PCI DSS)."
        ],
        resources: [
          { type: "book", name: "Building Machine Learning Powered Applications by Emmanuel Ameisen" },
          { type: "course", name: "Deploying Machine Learning Models on Udemy" }
        ],
        assignments: [
          "Deploy a financial prediction model as a secure API.",
          "Implement user authentication and data encryption."
        ]
      },
      {
        name: "August 2026",
        topic: "Cloud Computing and Big Data in Finance",
        objectives: [
          "Handle big data in financial applications.",
          "Utilize cloud services tailored for finance."
        ],
        topics: [
          "Big data processing with Hadoop and Spark.",
          "AWS services: AWS S3, EMR, Kinesis for real-time data.",
          "Data lakes and warehouses."
        ],
        resources: [
          { type: "book", name: "Big Data in Practice by Bernard Marr" },
          { type: "course", name: "Big Data Specialization on Coursera" }
        ],
        assignments: [
          "Process large financial datasets using Spark.",
          "Set up a data pipeline on AWS for streaming financial data."
        ]
      },
      {
        name: "September 2026",
        topic: "DevOps and CI/CD in Financial Applications",
        objectives: [
          "Implement DevOps practices for financial software.",
          "Ensure compliance and security in deployment pipelines."
        ],
        topics: [
          "CI/CD tools with security integrations.",
          "Infrastructure as code with Terraform.",
          "Monitoring and logging in financial systems."
        ],
        resources: [
          { type: "book", name: "Continuous Delivery by Jez Humble and David Farley" },
          { type: "course", name: "DevOps for Data Science on LinkedIn Learning" }
        ],
        assignments: [
          "Set up a CI/CD pipeline with security checks.",
          "Automate deployments with compliance auditing."
        ]
      }
    ]
  },
  {
    name: "Integrating AI with Full-Stack Development",
    duration: "Oct 2026 - Mar 2027",
    color: "bg-purple-100 border-purple-300",
    months: [
      {
        name: "October 2026",
        topic: "Project Planning and Design",
        objectives: [
          "Plan a comprehensive capstone project focused on finance.",
          "Define project requirements, considering financial regulations."
        ],
        topics: [
          "User authentication with KYC compliance.",
          "Portfolio analysis and optimization.",
          "Risk assessment and management tools.",
          "Real-time market data integration."
        ],
        resources: [
          { type: "book", name: "The Art of Project Management by Scott Berkun" }
        ],
        assignments: [
          "Create a detailed project proposal.",
          "Design system architecture with security considerations."
        ]
      },
      {
        name: "November 2026",
        topic: "Front-End Development for Capstone Project",
        objectives: [
          "Build a user-friendly interface for financial data presentation.",
          "Implement interactive tools for portfolio management."
        ],
        topics: [
          "React components for financial data visualization.",
          "State management with Redux for complex financial data.",
          "Responsive design for various devices."
        ],
        resources: [
          { type: "course", name: "Building Data Visualization Tools on Frontend Masters" }
        ],
        assignments: [
          "Develop UI components for portfolio tracking.",
          "Integrate real-time data visualizations.",
          "Ensure compliance with accessibility standards."
        ]
      },
      {
        name: "December 2026",
        topic: "Back-End Development for Capstone Project",
        objectives: [
          "Set up secure back-end services.",
          "Implement regulatory compliance features."
        ],
        topics: [
          "Django REST Framework for financial APIs.",
          "Database design for financial data.",
          "Implementation of security measures and audit trails."
        ],
        resources: [
          { type: "book", name: "Django for Professionals by William S. Vincent" }
        ],
        assignments: [
          "Develop APIs for investment recommendations.",
          "Implement encryption for data in transit and at rest.",
          "Set up logging for audit trails."
        ]
      },
      {
        name: "January 2027",
        topic: "Machine Learning Integration",
        objectives: [
          "Develop AI models for investment advice.",
          "Ensure models comply with financial regulations."
        ],
        topics: [
          "Integration of ML models with Django backend.",
          "Real-time prediction serving.",
          "Model versioning and A/B testing."
        ],
        resources: [
          { type: "course", name: "Deploying Machine Learning Models in Production on Coursera" }
        ],
        assignments: [
          "Build a risk assessment model.",
          "Integrate AI models into back-end services.",
          "Document model decisions for transparency."
        ]
      },
      {
        name: "February 2027",
        topic: "Testing and Quality Assurance",
        objectives: [
          "Conduct thorough testing for reliability and compliance.",
          "Perform security testing."
        ],
        topics: [
          "Unit testing for financial calculations.",
          "Integration testing for full-stack applications.",
          "Security testing and penetration testing."
        ],
        resources: [
          { type: "book", name: "The Art of Software Testing by Glenford J. Myers et al." }
        ],
        assignments: [
          "Write unit and integration tests.",
          "Perform penetration testing.",
          "Ensure the application meets regulatory standards."
        ]
      },
      {
        name: "March 2027",
        topic: "Deployment and Scalability",
        objectives: [
          "Deploy the application to a secure cloud environment.",
          "Implement scalability for high availability."
        ],
        topics: [
          "Containerization with Docker.",
          "Orchestration with Kubernetes.",
          "Cloud deployment on AWS or Azure.",
          "Load balancing and auto-scaling."
        ],
        resources: [
          { type: "course", name: "Scalable Microservices with Kubernetes on Udacity" }
        ],
        assignments: [
          "Deploy using Docker containers on AWS ECS.",
          "Configure auto-scaling and load balancing.",
          "Implement disaster recovery strategies."
        ]
      }
    ]
  },
  {
    name: "Advanced Topics and Portfolio Enhancement",
    duration: "Apr 2027 - Sep 2027",
    color: "bg-indigo-100 border-indigo-300",
    months: [
      {
        name: "April 2027",
        topic: "User Feedback and Iteration",
        objectives: [
          "Collect user feedback while adhering to privacy laws.",
          "Iterate on the project to enhance user experience."
        ],
        topics: [
          "User testing methodologies.",
          "A/B testing for financial applications.",
          "Data privacy in user feedback collection."
        ],
        resources: [
          { type: "book", name: "The Lean Startup by Eric Ries" }
        ],
        assignments: [
          "Integrate compliant analytics tools.",
          "Conduct user testing sessions.",
          "Prioritize improvements based on feedback."
        ]
      },
      {
        name: "May 2027",
        topic: "Financial Regulations and Compliance",
        objectives: [
          "Deepen understanding of financial regulations.",
          "Ensure full compliance of the application."
        ],
        topics: [
          "SEC regulations, FINRA guidelines.",
          "Data protection laws (GDPR, CCPA).",
          "Ethical considerations in financial advising."
        ],
        resources: [
          { type: "book", name: "Financial Regulation: Law and Policy by Michael S. Barr et al." },
          { type: "course", name: "Regulation of Financial Markets on Coursera" }
        ],
        assignments: [
          "Review and update compliance features.",
          "Prepare documentation for regulatory audits."
        ]
      },
      {
        name: "June 2027",
        topic: "Optimization and Performance Tuning",
        objectives: [
          "Improve application performance.",
          "Optimize AI models for efficiency."
        ],
        topics: [
          "Database query optimization.",
          "Caching strategies for financial data.",
          "Model compression techniques."
        ],
        resources: [
          { type: "book", name: "High Performance Python by Micha Gorelick and Ian Ozsvald" }
        ],
        assignments: [
          "Profile the application and optimize code.",
          "Implement model optimization techniques.",
          "Use CDN and caching to improve load times."
        ]
      },
      {
        name: "July 2027",
        topic: "Security Enhancements",
        objectives: [
          "Strengthen application security against financial threats.",
          "Implement advanced security measures."
        ],
        topics: [
          "Advanced encryption techniques.",
          "Secure multi-factor authentication.",
          "Threat modeling for financial applications."
        ],
        resources: [
          { type: "course", name: "Cyber Security in Finance on edX" }
        ],
        assignments: [
          "Update security protocols (e.g., OAuth 2.0).",
          "Implement multi-factor authentication.",
          "Conduct regular security audits."
        ]
      },
      {
        name: "August 2027",
        topic: "Final Touches on Capstone Project",
        objectives: [
          "Prepare the project for professional presentation.",
          "Ensure all documentation is comprehensive and compliant."
        ],
        topics: [
          "Creating user and technical documentation.",
          "Preparing demo materials.",
          "Final compliance checks."
        ],
        resources: [
          { type: "book", name: "The Product Book: How to Become a Great Product Manager by Product School" }
        ],
        assignments: [
          "Finalize documentation, including compliance reports.",
          "Create a professional demo video.",
          "Prepare presentation materials."
        ]
      },
      {
        name: "September 2027",
        topic: "Portfolio Enhancement",
        objectives: [
          "Showcase your projects with a focus on finance.",
          "Update professional profiles and personal branding."
        ],
        topics: [
          "Creating a compelling portfolio website.",
          "Writing case studies on financial projects.",
          "Networking in the fintech community."
        ],
        resources: [
          { type: "course", name: "Building a Full-Stack Portfolio on Codecademy" }
        ],
        assignments: [
          "Update portfolio website with finance projects.",
          "Write articles or case studies on your projects.",
          "Engage with the finance and AI community online."
        ]
      }
    ]
  },
  {
    name: "Job Preparation and Networking",
    duration: "Oct 2027 - Dec 2027",
    color: "bg-pink-100 border-pink-300",
    months: [
      {
        name: "October 2027",
        topic: "Resume and LinkedIn Optimization",
        objectives: [
          "Create a resume highlighting your finance-focused AI skills.",
          "Network within the financial industry."
        ],
        topics: [
          "Tailoring resumes for fintech positions.",
          "Optimizing LinkedIn profiles for finance and AI roles.",
          "Networking strategies in the finance industry."
        ],
        resources: [
          { type: "book", name: "Cracking the Tech Career: Insider Advice on Landing a Job at Google, Microsoft, Apple, or any Top Tech Company by Gayle Laakmann McDowell" }
        ],
        assignments: [
          "Tailor your resume for financial institutions and fintech companies.",
          "Update LinkedIn with finance-related keywords.",
          "Connect with finance professionals and recruiters."
        ]
      },
      {
        name: "November 2027",
        topic: "Interview Preparation",
        objectives: [
          "Prepare for technical interviews in finance.",
          "Understand industry-specific interview processes."
        ],
        topics: [
          "Financial concepts (e.g., derivatives, risk management).",
          "Case studies on financial problems.",
          "Behavioral questions with a focus on ethics and compliance."
        ],
        resources: [
          { type: "book", name: "Heard on The Street: Quantitative Questions from Wall Street Job Interviews by Timothy Falcon Crack" },
          { type: "course", name: "Financial Markets on Coursera by Yale University" }
        ],
        assignments: [
          "Solve quantitative finance problems.",
          "Participate in mock interviews with a finance focus."
        ]
      },
      {
        name: "December 2027",
        topic: "Job Applications and Networking",
        objectives: [
          "Apply to positions in financial institutions and fintech startups.",
          "Leverage your network for job opportunities."
        ],
        topics: [
          "Researching potential employers in finance and fintech.",
          "Tailoring applications for specific roles.",
          "Following up on applications and interviews."
        ],
        resources: [
          { type: "book", name: "The 2-Hour Job Search: Using Technology to Get the Right Job Faster by Steve Dalton" }
        ],
        assignments: [
          "Apply to at least 30 finance-focused AI developer positions.",
          "Attend finance and fintech conferences or webinars.",
          "Reach out to industry contacts for referrals."
        ]
      }
    ]
  }
];

const ResourceIcon = ({ type }) => {
  switch (type) {
    case 'book':
      return <Book className="w-4 h-4 mr-2" />;
    case 'course':
      return <Video className="w-4 h-4 mr-2" />;
    default:
      return null;
  }
};

const MonthCard = ({ month }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold">{month.name}: {month.topic}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Learning Objectives:</h4>
              <ul className="list-disc pl-5 mb-4">
                {month.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Topics to Cover:</h4>
              <ul className="list-disc pl-5 mb-4">
                {month.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Resources:</h4>
              <ul className="list-none pl-5 mb-4">
                {month.resources.map((resource, index) => (
                  <li key={index} className="flex items-center mb-1">
                    <ResourceIcon type={resource.type} />
                    {resource.name}
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Assignments:</h4>
              <ul className="list-none pl-5">
                {month.assignments.map((assignment, index) => (
                  <li key={index} className="flex items-center mb-1">
                    <CheckSquare className="w-4 h-4 mr-2" />
                    {assignment}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProgressBar = ({ currentPhase, totalPhases }) => {
  const progress = ((currentPhase + 1) / totalPhases) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <motion.div
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const LearningPathTracker = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    // Calculate current phase based on current date
    const now = new Date();
    const startDate = new Date('2024-10-01');
    const monthsPassed = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth();
    const currentPhaseIndex = Math.min(Math.floor(monthsPassed / 6), phases.length - 1);
    setCurrentPhase(Math.max(0, currentPhaseIndex));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Financial AI Developer Learning Path
        </h1>
        <ProgressBar currentPhase={currentPhase} totalPhases={phases.length} />
        {phases.map((phase, index) => (
          <PhaseCard key={index} phase={phase} index={index} />
        ))}
      </div>
    </div>
  );
};

export default LearningPathTracker;