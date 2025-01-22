# React Typescript Components for Google Icons
All icons are sourced from [Google's Icons]("https://fonts.google.com/icons"). Please view their [Licensing Policy]("https://developers.google.com/fonts/docs/material_icons#licensing"). I am not affiliated with Google in any way.

Since this repository is largely for personal use, I add icons as I need them. If you would like to see more icons added, feel free to contact me.

## How to Use
Copy the common/ folder and whatever icons you want to use into some folder in your project's directory, and import them.

## Troubleshooting
### Error: 'React' refers to a umd global, but the current file is a module
You can fix this error by adding this into your tsconfig file:
```typescript
{
    "compilerOptions": {
        "jsx": "react-jsx"
    }
}