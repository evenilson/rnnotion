# 🧠 Notion Clone (Layout) - React Native

This project is a **visual recreation of Notion's initial screen**, built using **React Native + Expo**. The goal was to replicate the **layout** faithfully, without implementing interactive features like editing, navigation between pages, or data persistence.

---

## ✨ Purpose

- Practice component-based UI development with React Native  
- Recreate Notion’s clean and modern interface  
- Use best practices with React Native + TypeScript  
- Provide a solid foundation for future development (e.g. state management, real data)  

---

## 🛠️ Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/)
- [React Navigation](https://reactnavigation.org/)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

---

## 🖼️ Implemented Features

- ✅ Tab-based layout inspired by Notion’s sidebar and page structure  
- ✅ Visual design with reusable components and headers  
- ❌ No data persistence  
- ❌ No page creation/editing functionality  

---

## 📂 Project Structure

```
src/
├── app/                   # Main screens organized by route
│   ├── (tabs)/            # Tab-based navigation (Home, Edit, Search...)
│   │   ├── edit.tsx
│   │   ├── index.tsx
│   │   ├── notifications.tsx
│   │   ├── search.tsx
│   │   └── _layout.tsx
│   └── _layout.tsx
│
├── components/            # Reusable UI components
│   └── header/
│       ├── index.tsx
│       └── styles.ts
│
├── page/                  # Page display layout
│   ├── index.tsx
│   └── styles.ts
│
├── page-list/             # Static/mocked list of pages
├── recent/                # Recent pages view
├── recent-list/           # Recent items (mocked)
│
├── styles/                # Global styles (e.g., colors)
│   └── colors.ts
│
├── utils/                 # Static data and helpers
│   └── data.ts

assets/                    # Icons, images, etc.
```

---

## ▶️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/notion-clone-layout.git
```

2. Navigate to the project folder:

```bash
cd notion-clone-layout
```

3. Install dependencies:

```bash
npm install
# or
yarn
```

4. Start the project with Expo:

```bash
npx expo start
```

---

## 📌 Notes

> This project is currently a **static UI prototype** only. No dynamic features or state management were implemented.

---

Made with 💙 by [Evenilson Liandro](https://github.com/evenilson), inspired by lessons from Professor Rodrigo Gonçalves.

