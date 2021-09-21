## Github Workflow

- fork the repository
- clone the repository
- **no work should be carried out on the MAIN branch**
- create a branch with your issue name(e.g we working on navbar issue... run **git checkout -b navbar** )
- when you're done with your task run **git add .**
- then **git commit -m"your commit message"** (eg git commit -m "added toogle button on the navbar")
- set upstream.. run **git push -u origin 'your branch name'** (eg **git push -u origin navbar**)
- then finally create a pull request

NB remember to always pull from origin before working and pushing

## App Workflow
We are using variables for fonts and colors for the entire site
- Fonts should be stored in styles/config/_fonts.css
- Likewise colors in styles/config/_color.css
- All components should be in the **components** folder
_ Then import and render your component in **pages/index.js**
- Each components Styling goes into styles/local/components folder, And should be stored modularly e.g **navbar.module.css**
