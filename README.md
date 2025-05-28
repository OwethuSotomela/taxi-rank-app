# 🚖 Taxi Rank App (Alpine JS)

[### View: **Taxi-Rank-App**](https://owethusotomela.github.io/taxi-rank-app/)

---

## 📌 Project Overview

Some local taxi associations want to streamline the queues at local taxi ranks.  
They want to create an app that **shows/organizes queues**.

They are starting with **one rank**. The app should:

- Show the number of people queuing for each route.
- Allow taxis to leave **only when enough people are in the queue**.
- Decrease the number of people in the queue when a taxi leaves.
- Prevent taxis from leaving if there aren't enough passengers.
- Allow the user to increment/decrement the number of people in a queue.

---

## ✨ Extra Functionality

- ✅ Keep count of the **number of taxis leaving** each queue.
- ✅ Keep track of the **total taxi fare** per trip and overall total for the day.
- ✅ Ensure the app is **responsive** and:
  - ❌ Does not allow duplicate destinations  
  - ❌ Does not allow negative values
- ✅ Store all data in `localStorage` to **retain data after a screen refresh**.
- ✅ Add new destinations dynamically.

---

## 🔧 Future Expansion

> **What would it take to add more Taxi Ranks?**

- 🏙 Introduce a dropdown or tabs for **multiple ranks**.
- 🗂 Refactor data structure to store data as:  
  ```js
  {
    rankName: [
      { destination: 'Route 1', ... },
      { destination: 'Route 2', ... }
    ]
  }

🛠 Tech Stack
	•	HTML5
	•	CSS3 (/css/style.css)
	•	JavaScript (/js/app.js)
	•	Alpine.js for reactivity
	•	localStorage for persistent data

🚀 How to Run
	1.	Clone or download the project folder.
	2.	Open index.html in any modern browser.
	3.	All functionality is client-side — no backend required.

⸻

🧑🏽‍💻 Developer

Owethu Sotomela
Full Stack Developer | Founder of SotoPrime
Passionate about practical digital solutions for local challenges 💡

