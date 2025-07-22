# 🌐 Personal Portfolio – Mai Vang

## Get in, loser. We are going on a trip

This is my interactive developer portfolio, designed to showcase my work, background, and contact info with dynamic transitions, a custom WebGL map, and smooth section navigation.
 [Portfolio Site](https://road-portfolio.vercel.app/).

## 🚀 Technologies Used

- **Next.js** – React framework for optimized routing and performance
- **React** – UI library for building modular components
- **TypeScript** – Type safety for scalable and maintainable code
- **Tailwind CSS** – Utility-first CSS framework for fast styling
- **react-transition-group** – Smooth fade transitions between sections
- **MapLibre** – Interactive map navigation experience

## 📚 Features

- Clickable world map that triggers section scroll and content update
- Smooth fade transitions between sections using `CSSTransition`
- Responsive and minimal layout using Tailwind CSS
- Fixed navbar with active section highlighting
- Section components dynamically rendered on navigation

## 🧠 What I Learned

### 🔄 Component Rendering Optimization
- Replaced **static JSX definitions** with **functions returning JSX** in `sectionComponents` to **avoid evaluating all components up front**.
  ```ts
  const sectionComponents: Record<Section, () => React.ReactNode> = {
    [Section.ABOUT]: () => <About />,
    ...
  };
  const content = sectionComponents[currentSection]() ?? <About />;
