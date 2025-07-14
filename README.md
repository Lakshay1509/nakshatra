

# Resonanze

> 🩺 The Future of Audio Health

---

## 📌 Problem Statement


**Problem Statement 1 – Weave AI Magic with Groq**

---

## 🎯 Objective

- **Deliver real-time voice analysis and personalized feedback** to transform vocal health—think of it as your vocal coach in your pocket, ready to guide you at any moment.
- **Tackle voice strain like never before** for professionals—teachers, singers, public speakers—ensuring your voice stays strong, clear, and fatigue-free, day in and day out.
- **Empower healthcare providers** with a subscription-based model, enabling them to effortlessly monitor and assess their patients’ vocal health from anywhere, at any time.
- **Unlock the perfect balance with our freemium model**, offering basic features for everyday users and premium, advanced options for those who demand the best vocal insights.
- **Turn vocal health into a game**—our reward-driven engagement system makes checking your voice health fun, motivating, and rewarding, keeping you on track for consistent improvement.
- **Seamlessly integrate with our Telegram bot** for instant voice analysis and updates, putting real-time reports right at your fingertips—whenever you need them, wherever you are.

---

### Our Approach:  
- **Why you chose this problem:**  
The idea for Resonanze stemmed from the growing challenges faced by voice professionals such as teachers, singers, and public speakers. These individuals rely heavily on their voices for their careers but lack access to preventive care tools. Many only seek medical attention when issues become severe, leading to long-term vocal damage. We identified a gap in the market for an accessible, AI-driven solution that provides real-time feedback and actionable insights to help users maintain vocal health proactively.

- **Key challenges you addressed:**  
We tackled key issues such as detecting and preventing vocal fatigue, bridging the gap caused by the lack of centralized systems for healthcare providers, and developing an affordable, scalable solution suitable for both individual users and professionals.

- **Any pivots, brainstorms, or breakthroughs during hacking:**
 We integrated a Telegram bot to deliver instant voice reports, enhancing user accessibility. A reward-based engagement system was developed to encourage consistent usage, while our AI algorithms were improved for more accurate vocal health analysis. 

---

## 🛠️ Tech Stack

### Core Technologies Used:
- Frontend: React, Redux, TailwindCSS
- Backend: Node, Express
- Database: MongoDB
- APIs: Groq, Google
- Hosting: Netlify, Azure, Docker
- ![diagram (1)](https://github.com/user-attachments/assets/3835d98a-f291-48c0-a504-cd21a31559b3)
---


## ✨ Key Features


- #### 🌟 Voice & Audio Health Tracking  
    Not just analysis—this is your personal vocal wellness coach. Our system listens like a pro, detects the subtlest signs of strain, and delivers crystal-clear insights to help professionals protect their most valuable asset—their voice.

- #### 🤖 Personalized Feedback & Guidance  
    Imagine AI that *knows* your voice. With every sample, we deliver laser-focused guidance on speech clarity, fatigue prevention, and vocal strength—like a vocal therapist in your pocket, available 24/7.

- #### 💬 Telegram Bot for Instant Access  
    Say goodbye to clunky apps. Our Telegram bot brings cutting-edge vocal health to your fingertips. Just send a voice note and receive an elegant, AI-powered PDF report within seconds. It’s smart, sleek, and seriously effortless.

- #### 🔥 Streak-Based Engagement System  
    We gamified self-care. Our reward-driven streak system keeps users coming back—not because they have to, but because they *want* to. Because staying healthy should feel as good as hitting a personal best.

---


## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center">
  <img src="https://res.cloudinary.com/backend-15/image/upload/v1744448408/Screenshot_2025-04-06_104355_ietr1v.png" width="300" height="200" alt="Screenshot 6">
  <img src="https://res.cloudinary.com/backend-15/image/upload/v1744782926/Screenshot_2025-04-16_111932_s4ednp.png" width="300" height="200" alt="Screenshot 5">
  <img src="https://res.cloudinary.com/backend-15/image/upload/v1744782926/Screenshot_2025-04-16_111903_awor7c.png" width="300" height="200" alt="Screenshot 4">
  <img src="https://res.cloudinary.com/backend-15/image/upload/v1744782926/Screenshot_2025-04-16_111953_wgp33s.png" width="300" height="200" alt="Screenshot 3">
  <img src="https://res.cloudinary.com/backend-15/image/upload/v1744782944/Screenshot_2025-04-16_112030_puvpgs.png" width="300" height="200" alt="Screenshot 2">
  <img src="https://res.cloudinary.com/backend-15/image/upload/v1744782944/Screenshot_2025-04-16_112149_f59rk1.png" width="300" height="200" alt="Screenshot 1">
</div>


---

## 📽️ Demo & Deliverables

- **Demo Video Link:** https://youtu.be/gZ_r5Cb6MIA
- **Pitch Deck / PPT Link:** https://drive.google.com/file/d/1C1lraPV50UjH39YfvHikic1kxpvaF3xI/view?usp=sharing

---

## ✅ Tasks & Bonus Checklist

- [✅] **All members of the team completed the mandatory task - Followed at least 2 of our social channels and filled the form** (Details in Participant Manual)  
- [ ] **All members of the team completed Bonus Task 1 - Sharing of Badges and filled the form (2 points)**  (Details in Participant Manual)
- [ ] **All members of the team completed Bonus Task 2 - Signing up for Sprint.dev and filled the form (3 points)**  (Details in Participant Manual)

*(Mark with ✅ if completed)*

---

## 🧪 How to Run the Project

### Requirements:
- Node.js / Bun / Python/ Docker.
- API Keys:
    - MongoDB (Database)
    - Cloudinary (file storage)
    - Groq (NLP and Voice processing)

- .env file setup:
    - Server:
      - PORT = 
      - MONGODB_URI = ""
      -  ACCESS_TOKEN_SECRET = ""
      -  REFRESH_TOKEN_SECRET = ""
      -  ACCESS_TOKEN_EXPIRY = ""
      -  REFRESH_TOKEN_EXPIRY = ""
    
    - AI:
        - SECRET_KEY="" 
        - GROQ_API_KEY=""
        - CLOUDINARY_CLOUD_NAME=""
        - CLOUDINARY_API_KEY=""
        - CLOUDINARY_API_SECRET=""

### Local Setup:
```bash
# Clone the repo
git clone https://github.com/Lakshay1509/Hackhazard-25

# Install dependencies for server
cd server
npm install

# Start development server
npm run dev

# Install dependencies for client
cd client
npm install

# Start development server for client
npm run dev

# Pull docker image for ai
docker pull mafia15/resonanze_ai:latest

# Start container in docker desktop
run the pulled image 
set environment variables as mentioned above 
assign port to 8080 

```

---

## 🧬 Future Scope


1. **Advanced AI Algorithms for Deeper Analysis**  
   Enhance AI capabilities to detect more complex vocal health issues, such as early signs of vocal cord disorders or abnormalities in tone and pitch.

2. **Integration with Wearable Devices**  
   Collaborate with wearable tech companies to enable real-time voice monitoring through devices like smartwatches or microphones.

3. **Multilingual Support**  
   Expand the platform to analyze and provide feedback in multiple languages, catering to a global audience.

4. **Gamification for User Engagement**  
   Introduce advanced gamified features like leaderboards, challenges, and rewards to further motivate users to maintain vocal health.

5. **Corporate Partnerships**  
   Collaborate with organizations and institutions (e.g., schools, call centers) to offer Resonanze as a wellness tool for employees.

6. **Data-Driven Insights for Research**  
   Provide anonymized data to researchers studying vocal health trends, enabling advancements in voice-related healthcare.

7. **Ad-Based Revenue Model for Telegram Bot**  
    Monetize the Telegram bot by integrating non-intrusive ads while keeping the service free for basic users.


---

## 📎 Resources / Credits

We’d like to thank the following resources and tools that powered Resonanze:

- 🔊 **VGGish by Google** – Used for generating high-quality voice embeddings to analyze vocal features.
- 🧠 **Groq API** – Enabled ultra-fast inference for both voice and NLP processing, ensuring real-time feedback and analysis.

- 🤖 **Telegram Bot API** – Allowed seamless interaction by delivering reports and updates directly to users' devices.
---
