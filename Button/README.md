# Buttons Component

A simple **React** component for creating customizable buttons using **CSS variables**.

## 📦 Files

- `Buttons.js` → Component code.
- `Buttons.css` → Component styles.

## ⚙️ Usage

You can use the component in your project like this:

```jsx
import Buttons from "./Buttons";

function App() {
  return (
    <div>
      <Buttons
        text="Sign Up"
        onClick={() => alert("Button clicked!")}
        style={{ "--color-primer": "#10b981" }}
      />
    </div>
  );
}
```

## 📝 Props

Name Type Description
text string The text displayed inside the button
onClick function Function called when the button is clicked
style object Pass CSS variables to customize button colors

## 🎨 Color Customization Example

You can change the main button color using --color-primer:

```jsx

<Buttons text="Sign Up" style={{ "--color-primer": "#10b981" }} />
<Buttons text="Cancel" style={{ "--color-primer": "#ef4444" }} />
```
