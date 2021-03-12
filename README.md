<div align="center">
    <img src="/assets/docs/start.png" alt="Logo" width="100%">
</div>

# react-native-starter-kit

*Simple, modern, faster*

***This project is currently under development. If you want to make this project better, PRs are welcome***
## What's inside

- **React Navigation** (Stack Navigator, Bottom Tabs Navigator, Drawer)
- **Styled Component**
- **Custom fonts**
- **Recoil**

## Getting started 

### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/tranhiepqna/react-native-starter-kit.git

# Navigate to clonned folder and Install dependencies
cd react-native-starter-kit && yarn install

# Install Pods
cd ios && pod install
```

### 2. Custom fonts

To use your fonts in this project, you can do these steps below: 

- Add your fonts to `assets/fonts`
- Run command: `$ react-native link` your fonts will be automatic linked to the project.

### 3. Add your splash screen

- On iOS: Drag your splash screen images and drop it to `$ProjectName/Images.xcassets/SplashScreen`
- On Android: Replace `launch_screen` in `app/src/res/drawable` folder with your splash screen images.

### 4. Rename project

By default, the project name is `AwesomeProject`. If you want to change the project name, you can run: `yarn run rename  <newName>`.


## Atomic Design

### Why is Atomic Design

Atomic Design helps to build consistent, solid and reusable design systems

### Atoms 

**Atoms** are the smallest possible component, such as typography(h1, h2, h3, body1, body2,...), buttons, icons, inputs,... It must be the smallest functional unit. 

### Molecules 

**Molecules** are groups of two or more atoms. These combinations of atoms take on their own unique properties, and become more tangible and operational than atoms.

### Organisms 

**Organisms** are assemblies of molecules functioning together as a unit. The components begin to have the final shape, but they are still ensured to be independent and reusable in any content. 