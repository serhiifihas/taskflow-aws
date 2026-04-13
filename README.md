# 🚀 TaskFlow AWS

**Simple serverless task manager on AWS**

A fully serverless web application for managing tasks using AWS Lambda, API Gateway, DynamoDB, and S3.

---

## 🌐 Live Demo
👉 http://task-tracker-aws-serhii-fihas-2026.s3-website-us-east-1.amazonaws.com/

---

## 🧠 Project Overview

TaskFlow AWS is a cloud-native application that demonstrates how to build a scalable, secure, and cost-efficient system without managing servers.

Users can:
- ➕ Add tasks  
- 📋 View tasks  
- ❌ Delete tasks  

---

## 🏗️ Architecture
User → S3 (Frontend)
↓
API Gateway
↓
Lambda Functions
↓
DynamoDB
↓
CloudWatch (Logs)

---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** AWS Lambda (Python)  
- **API:** Amazon API Gateway  
- **Database:** Amazon DynamoDB  
- **Hosting:** Amazon S3 (Static Website Hosting)  
- **Monitoring:** Amazon CloudWatch  
- **Security:** AWS IAM  

---

## 🔧 Features

- Serverless architecture (no servers required)
- REST API with GET, POST, DELETE
- DynamoDB integration
- Real-time task updates
- CloudWatch logging
- Secure IAM role configuration

---

## 🔐 Cloud Best Practices

- ✅ IAM Least Privilege Access  
- ✅ Fully serverless scalable architecture  
- ✅ High availability (multi-AZ AWS services)  
- ✅ Cost optimization (Free Tier usage)  
- ✅ Monitoring with CloudWatch  

---

## 🧪 API Endpoints

| Method | Endpoint        | Description          |
|--------|----------------|----------------------|
| POST   | /tasks         | Create a new task    |
| GET    | /tasks         | Get all tasks        |
| DELETE | /tasks/{id}    | Delete a task        |

---

## 📸 Screenshots

> Add your screenshots here:

- S3 Static Website  
- API Gateway  
- Lambda Functions  
- DynamoDB Table  
- CloudWatch Logs  
- Running Application  

---

## 📁 Project Structure
taskflow-aws/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
├── lambda/
│ ├── createTask.py
│ ├── getTasks.py
│ └── deleteTask.py
│
├── screenshots/
│
└── README.md

---

## 💡 Lessons Learned

During this project, I learned how to design and deploy a complete serverless application using AWS services.

The most challenging part was integrating the frontend with the backend, especially:
- Debugging GET and POST requests  
- Fixing CORS issues in API Gateway  
- Configuring S3 static website hosting correctly  

---

## 🚀 Future Improvements

- Add PUT request (update task)
- Improve UI/UX design
- Add authentication (AWS Cognito)
- Better error handling

---

## 👨‍💻 Author

**Serhii Fihas**  
Cloud & Automation Enthusiast  

---

## ⭐️ If you like this project

Give it a ⭐️ on GitHub!
