import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const {
  message,
  history = [],
} = await req.json();
    const userMessage = message.toLowerCase();
    if (
  ["hi", "hello", "hey", "good morning", "good afternoon"].includes(
    userMessage.trim()
  )
) {
  return NextResponse.json({
    response: `
Hi 👋

I'm VSSR — Santhosh's AI Portfolio Assistant.

I can help you explore:

🚀 Projects
📄 Publications
💼 Experience
🎓 Education
🧠 Skills
📜 Certifications

What would you like to know?
`,
  });
}
    // Read profile.txt
    const profileText = fs.readFileSync(
      path.join(process.cwd(), "data", "profile.txt"),
      "utf8"
    );
    // Skills
if (
  userMessage.includes("skill") ||
  userMessage.includes("technology") ||
  userMessage.includes("skills")
) {
  return NextResponse.json({
    response: `
### Technical Skills

**Programming Languages**
• Python
• Java
• C
• C#

**Web Development**
• HTML
• CSS
• JavaScript
• React.js
• Next.js
• Node.js

**AI & Machine Learning**
• Machine Learning
• Deep Learning
• TensorFlow
• Keras
• OpenCV

**Databases**
• MongoDB
• SQL

**Tools**
• Git
• FastAPI
• MATLAB
`
  });
}

// CGPA
if (
  userMessage.includes("cgpa") ||
  userMessage.includes("grade")
) {
  return NextResponse.json({
    response:
      "Santhosh completed M.Tech in Computer Engineering from Parul University with a CGPA of 7.41 and B.Tech in Computer Science & Engineering with a CGPA of 6.93."
  });
}

// Education
if (
  userMessage.includes("education") ||
  userMessage.includes("qualification") ||
  userMessage.includes("degree") ||
userMessage.includes("academic")
) {
  return NextResponse.json({
    response:
      "Santhosh completed M.Tech in Computer Engineering from Parul University (CGPA: 7.41) and B.Tech in Computer Science & Engineering from R.V.R. & J.C. College of Engineering (CGPA: 6.93)."
  });
}

// Publications
if (
  userMessage.includes("publication") ||
  userMessage.includes("paper") ||
  userMessage.includes("research")
) {
  return NextResponse.json({
    response:
      "Santhosh has published: 'A Review of Monitoring Heart Rate and Cardiac Rhythm by Video Photoplethysmography on Mobile Devices' in RAMSITA 2026 Conference Proceedings, Atlantis Press. DOI: 10.2991/978-94-6239-678-4_17"
  });
}

// Contact
if (
  userMessage.includes("contact") ||
  userMessage.includes("email") ||
  userMessage.includes("linkedin")
) {
  return NextResponse.json({
    response:
      "Email: vssrsantosh@gmail.com\n\nLinkedIn: https://www.linkedin.com/in/veeravalli-shanmukha-santhosh-rao-a2b054208/\n\nGitHub: https://github.com/santosh96203"
  });
}
if (
  userMessage.includes("tell me about yourself") ||
  userMessage.includes("introduce yourself") ||
  userMessage.includes("who is santhosh") ||
  userMessage.includes("about santhosh")
) {
  return NextResponse.json({
    response: `
# About Santhosh

🎓 **Education**
• M.Tech Computer Engineering — Parul University
• CGPA: 7.41
• Graduated in 2026

💼 **Experience**
• Full Stack Web Development Intern — Slash Mark
• Data Science Intern — Yoshops
• Software Trainee — Indian Servers

🧠 **Areas of Expertise**
• Artificial Intelligence
• Machine Learning
• Computer Vision
• Full Stack Development
• Data Science

📄 **Publication**
• A Review of Monitoring Heart Rate and Cardiac Rhythm by Video Photoplethysmography on Mobile Devices
• RAMSITA 2026
• Atlantis Press

🚀 **Key Projects**
• Real-Time Non-Contact Pulse Rate & SpO₂ Monitoring
• Smartphone Sensor-Based Air Temperature Estimation
• End-to-End AI Chatbot
• Face Mask Detection using Deep Learning

Would you like to know more about a specific project, skill, publication, or experience?
`
  });
}
if (
  userMessage.includes("project") ||
  userMessage.includes("projects") ||
  userMessage.includes("work")
) {
  return NextResponse.json({
    response: `
# Featured Projects

## 1. Real-Time Non-Contact Pulse Rate & SpO₂ Monitoring
📌 M.Tech Major Project

Technologies:
• Python
• TensorFlow
• OpenCV
• FastAPI
• React Native

---

## 2. Smartphone Sensor-Based Air Temperature Estimation
📌 B.Tech Major Project

Technologies:
• Python
• Machine Learning
• Mobile Sensors

---

## 3. End-to-End AI Chatbot
📌 AI Application

Technologies:
• Python
• NLP
• Streamlit

---

## 4. Face Mask Detection Using Deep Learning
📌 Computer Vision Project

Technologies:
• TensorFlow
• OpenCV
• CNN

For detailed information, ask:

• Tell me about the Pulse Rate Monitoring project
• Tell me about the Air Temperature project
• Tell me about the AI Chatbot project
• Tell me about the Face Mask Detection project
`
  });
}
if (
  userMessage.includes("certification") ||
  userMessage.includes("certificate") ||
  userMessage.includes("certifications")
) {
  return NextResponse.json({
    response: `
# Certifications

## NPTEL
• The Joy of Computing Using Python (Elite Silver)
• Programming in Java (Elite)
• Principles of Management (Elite)
• Introduction to Industry 4.0 and Industrial Internet of Things (Elite)

## Other Certifications
• AWS Academy Cloud Foundations
• HTML Certificate by IIT Bombay
• Introduction to Programming Using Python by Microsoft
• Image Processing Onramp by MATLAB
• Hands-on Workshop on GenAI: Building RAG and Agentic AI Applications
`
  });
}
if (
  userMessage.includes("experience") ||
  userMessage.includes("internship")
) {
  return NextResponse.json({
    response: `
# Experience

## Slash Mark
Full Stack Web Development Intern
Jan 2024 – Apr 2024

• Frontend Development
• Backend Development
• Database Integration

---

## Yoshops
Data Science Intern
May 2023 – Jul 2023

• Data Analysis
• Data Management
• Business Analytics

---

## Indian Servers
Software Trainee
Apr 2022 – Jun 2022

• Python Development
• Machine Learning
• AI Projects
`
  });
}

if (
  userMessage.includes("who are you") ||
  userMessage.includes("introduce yourself") ||
  userMessage.includes("what are you")
) {
  return NextResponse.json({
    response: `
Hi 👋

I'm VSSR — Santhosh's AI Portfolio Assistant.

I can help you explore:

🚀 Projects
📄 Publications
💼 Experience
🎓 Education
🧠 Skills
📜 Certifications

How can I help you today?
`,
  });
}
if (
  userMessage.includes("pulse") ||
  userMessage.includes("spo2") ||
  userMessage.includes("heart rate")
) {
  return NextResponse.json({
    response: `
# Real-Time Non-Contact Pulse Rate & SpO₂ Monitoring

📌 M.Tech Major Project

### Objective
Develop a contactless healthcare monitoring system capable of estimating heart rate and oxygen saturation using smartphone cameras.

### Technologies
• Python
• TensorFlow
• OpenCV
• FastAPI
• React Native

### Key Features
• Remote Photoplethysmography (rPPG)
• Video Photoplethysmography (VPG)
• Face Detection
• ROI Extraction
• Real-Time Monitoring

### Outcome
Developed an AI-powered healthcare monitoring solution that performs non-contact physiological measurement using mobile devices.
`
  });
}
if (
  userMessage.includes("chatbot") ||
  userMessage.includes("ai chatbot")
) {
  return NextResponse.json({
    response: `
# End-to-End AI Chatbot

📌 AI Application Project

### Objective
Developed an intelligent conversational AI chatbot capable of answering user queries through Natural Language Processing (NLP) techniques and interactive user interfaces.

### Technologies Used
• Python
• Streamlit
• Natural Language Processing (NLP)
• Pandas
• NumPy

### Key Features
• Conversational User Interface
• Automated Query Handling
• Information Retrieval
• Interactive User Experience
• Context-Aware Responses

### Responsibilities
• Designed the chatbot architecture
• Implemented NLP-based query processing
• Developed the user interface using Streamlit
• Integrated data handling and response generation modules

### Outcome
Successfully developed an AI-powered chatbot capable of handling user interactions efficiently and providing relevant responses through a user-friendly interface.
`,
  });
}
if (
  userMessage.includes("face mask") ||
  userMessage.includes("mask detection") ||
  userMessage.includes("cnn")
) {
  return NextResponse.json({
    response: `
# Face Mask Detection Using Deep Learning

📌 Computer Vision Project

### Objective
Developed a real-time face mask detection system using Deep Learning and Computer Vision techniques to identify whether individuals are wearing masks.

### Technologies Used
• Python
• TensorFlow
• Keras
• OpenCV

### Key Features
• Real-Time Face Detection
• Face Mask Classification
• Deep Learning-Based Prediction
• Live Camera Monitoring
• Automated Detection Pipeline

### Responsibilities
• Built and trained Convolutional Neural Network (CNN) models
• Performed image preprocessing and augmentation
• Integrated OpenCV for real-time video processing
• Evaluated model performance and accuracy

### Outcome
Successfully developed a real-time computer vision solution capable of detecting face masks and supporting public health monitoring applications.
`,
  });
}
if (
  userMessage.includes("temperature") ||
  userMessage.includes("air temperature") ||
  userMessage.includes("smartphone sensor")
) {
  return NextResponse.json({
    response: `
# Smartphone Sensor-Based Air Temperature Estimation

📌 Research Project

### Objective
Developed a mobile-based system to estimate ambient air temperature using smartphone battery sensor data and Machine Learning techniques.

### Technologies Used
• Python
• Machine Learning
• Mobile Sensors
• Data Analytics
• Scikit-learn

### Key Features
• Smartphone Sensor Data Collection
• Environmental Temperature Prediction
• Machine Learning-Based Regression Models
• Experimental Validation
• Data Analysis and Visualization

### Responsibilities
• Collected and analyzed smartphone sensor data
• Built machine learning models for temperature estimation
• Performed data preprocessing and feature engineering
• Evaluated model performance and prediction accuracy

### Outcome
Demonstrated the feasibility of estimating environmental temperature using smartphone sensor information, highlighting the potential of mobile devices as low-cost environmental sensing platforms.
`,
  });
}
if (
  userMessage.includes("resume") ||
  userMessage.includes("cv")
) {
  return NextResponse.json({
    response: `
📄 Resume

You can download Santhosh's resume here:

[Download Resume](/Resume%20of%20Santhosh.pdf)
`,
  });
}
if (
  userMessage.includes("job") ||
  userMessage.includes("looking for work") ||
  userMessage.includes("hire")
) {
  return NextResponse.json({
    response: `
# Career Objective

Santhosh is actively seeking opportunities in:

• Artificial Intelligence
• Machine Learning
• Software Development
• Full Stack Development
• Data Science
• Computer Vision

He recently completed his M.Tech in Computer Engineering from Parul University with a CGPA of 7.41.
`,
  });
}

    const prompt = `
You are VSSR, Santhosh's AI Portfolio Assistant.

Answer only using the profile information below.

Rules:
- Be professional and recruiter-friendly.
- Keep answers concise unless details are requested.
- Do not invent information.
- Do not create fictional projects, skills, experience, publications, certifications, or achievements.
- If information is unavailable, reply:
  "I don't have that information in Santhosh's portfolio data."

PROFILE:

${profileText}

CHAT HISTORY:

${JSON.stringify(history)}

CURRENT QUESTION:

${message}
`;
    try {
  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.2,
    });

  return NextResponse.json({
    response:
      completion.choices[0]?.message?.content ||
      "No response available.",
  });
} catch (err) {
  console.error("GROQ ERROR:", err);

  return NextResponse.json({
    response:
      "I'm currently unable to process advanced questions, but I can still provide information about Santhosh's education, skills, projects, experience, publications, and certifications.",
  });
} 
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        response:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}