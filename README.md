# 🚀 Automated Web Deployment on AWS App Runner

This project demonstrates a professional cloud-native CI/CD pipeline. It features a Node.js application hosted on **AWS App Runner**, with automatic deployments triggered directly from this GitHub repository.

## 🌐 Live Application
**Status:** ✅ Running  
**URL:** [https://smhdnmdzmn.us-east-1.awsapprunner.com](https://smhdnmdzmn.us-east-1.awsapprunner.com)

---

## 📸 Project Showcase

### 1. Live Production Site
The frontend is a Node.js Express server delivering a clean "Deployment Successful" message.
![Live Website](./images/website.png)

### 2. AWS App Runner Infrastructure
The service is managed by AWS, providing built-in load balancing and SSL termination.
![AWS Console](./images/aws-dashboard.png)

### 3. Developer Workflow (CI/CD)
Using Git Bash and VS Code, code changes are pushed to GitHub, which automatically signals AWS to redeploy the latest version.
![Git Workflow](./images/git-workflow.png)

---

## 🛠️ Technical Stack
* **Runtime:** Node.js 18
* **Framework:** Express.js
* **Cloud Provider:** AWS (App Runner)
* **CI/CD:** GitHub Actions / App Runner Service Connection
* **Version Control:** Git

## ⚙️ Local Setup & Deployment
To run this project locally:
1. Clone the repo: `git clone https://github.com/HSRIPADARAO1108/Simple_Fronted_Files.git`
2. Install dependencies: `npm install`
3. Start the server: `node index.js`

To deploy to AWS:
* Push code to the `main` branch. 
* AWS App Runner detects the change and builds the service using `npm install` and `npm start` on port `8080`.

---
*Created by [HSRIPADARAO1108](https://github.com/HSRIPADARAO1108)*
