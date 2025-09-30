# 🏷️ Badge Component

A simple, customizable **React badge component** built with CSS utility classes.

## ✨ Features
- Lightweight and reusable
- Supports **color** and **variant** props
- Custom content with `children`
- Uses [`classnames`](https://www.npmjs.com/package/classnames) for clean class handling

## 📦 Installation

```jsx
import Badge from "./Badge"

function App() {
  return (
    <div>
      <Badge>Default</Badge>
      <Badge color="red">Error</Badge>
      <Badge variant="round">Rounded</Badge>
      <Badge color="blue" variant="round">Custom</Badge>
    </div>
  )
}
```
```bash
npm install classnames
```
🚀 Usage
```jsx
import Badge from "./Badge"


function App() {
  return (
    <div>
      <Badge>Default</Badge>
      <Badge color="red">Error</Badge>
      <Badge variant="round">Rounded</Badge>
      <Badge color="blue" variant="round">Custom</Badge>
    </div>
  )
}
```
Props

| Prop       | Type                   | Default    | Description                                                           |
| ---------- | ---------------------- | ---------- | --------------------------------------------------------------------- |
| `children` | `string` / `ReactNode` | `"badge"`  | Content displayed inside the badge                                    |
| `color`    | `string`               | `"green"`  | Controls badge color (`badge-green`, `badge-red`, `badge-blue`, etc.) |
| `variant`  | `string`               | `"square"` | Controls badge shape (`badge-square`, `badge-round`, etc.)            |

Styling

This component relies on a Badge.css file.
Define your colors and variants like:
```css
.badge-green { background-color: #22c55e; color: white; }
.badge-red { background-color: #ef4444; color: white; }
.badge-square { border-radius: 0.25rem; }
.badge-round { border-radius: 9999px; }

