# React UI-components

React components library showcasing reusable UI elements, layouts, and design patterns. The project demonstrates proficiency in modern front-end development, focusing on clean code, accessibility, and scalable design.

## Features

- **Reusable React Components**: Includes a variety of UI components such as buttons, forms, cards, modals, and more.
- **Custom Styling**: Components styled with CSS to ensure consistency and flexibility.
- **Accessible & Responsive**: Designed to work seamlessly across devices and for all users.
- **Portfolio Showcase**: Serves as a demonstration of front-end skills, design sense, and code quality.

## Technology Stack

- **JavaScript** (React)
- **CSS**
- **HTML**

## Installation

Clone the repository:

```bash
git clone https://github.com/zenidreney/zenid-components.git
cd zenid-components
```

Install dependencies:

```bash
npm install
```

## Usage

Import and use components in your React application:

```jsx
import { Button, Card } from 'zenid-components';

const App = () => (
  <div>
    <Badge
        color="brown"
        variant="square" />
    <Button variant="success" size="sm">Green</Button>
    <Card
        iconBgColor="brown"
        title="Props Based"
    >Some sample text.
    </Card>
    <Banner text="" variant="success" />
    <TestimonialWithImage />
    <TestimonialNoImage />
  </div>

);
```

> **Note:** Component APIs may evolve as this is a portfolio project.

## License

This project is for portfolio/demo purposes with a MIT License.
Feel free to use, modify, and showcase it in your own work!

---

Crafted with passion by Deniz (https://github.com/zenidreney)
