# 👑 Queeny — Salon Booking & Style Inspiration MVP

**Queeny** is a beautifully designed salon booking app with an emotional touch.  
It connects users to stylists, catalogs, blogs, and salons in one elegant experience —  
the **third app** in my journey to build **100 Emotionally Designed MVPs**.

🎬 [Watch Demo on YouTube](https://youtu.be/YOUR_QUEENY_DEMO_LINK)  
📱 [Watch Insta Reel](https://www.instagram.com/reel/YOUR_QUEENY_REEL_LINK)

---

## ✨ Features

- 💇 Browse 24+ screens of hairstyles, nail styles & stylist blogs
- 🏷️ Catalog of styles → stylists → salons → reviews
- 📍 Location support (maps, email & WhatsApp sharing)
- 🎥 Style feeds in photo & video formats (with Expo Video)
- 🔍 Dynamic filtering (by category, trending, etc.)
- 🧾 Magazine section for hair/nail content
- 💬 Optimistic likes, favorites & hydration for personalized feeds
- 🙋 View stylist profiles with all linked content

---

## 🖼️ Banner Preview

![Queeny Banner](./media/Queeny%20Banner.png)

---

## 🧠 Tech Stack

- **React Native (Expo)**
- **Firebase** (Auth, Firestore, Storage)
- **TanStack Query** – Infinite scroll, filtering & mutations
- **Reanimated**, **RN Paper**, **Date Picker**, **Tab View**
- **Expo Video**, **Expo Linking**, **Gradient UI**, **Carousel**

---

## 🛠️ Setup Instructions

1. Clone the repo:
```
git clone https://github.com/bharat2005/queeny-app.git
cd queeny-app
```
2. Install dependencies
```
npm install
```
3. Rename the file example.env to .env
4. Update .env with your own configuration, e.g.:
```
# Rename this file to ".env" before use
# Replace XXXX's with your own Firebase config keys 
API_KEY=XXXX
AUTH_DOMAIN=XXXX
PROJECT_ID=XXXX
STORAGE_BUCKET=XXXX
MESSAGING_SENDER_ID=XXXX
APP_ID=XXXX
MEASURMENT_ID=XXXX
```
 5. Run the app 
```
npx expo start
```

---

### ⚠️ Note on Firestore Data

This app uses Firestore to fetch catalog and product feed data.
If you're running the app locally with your own Firebase project, you'll need to manually seed your Firestore with product/category documents — otherwise, the feed may appear empty.

---

## 📄 License  
This project is licensed under the [MIT License](./LICENSE).

