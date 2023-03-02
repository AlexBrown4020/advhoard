# Adventurer's Hoard 3D Portfolio

This app is built to display 3D models online to potential customers, clients or employers.  Powered by React and ThreeJS, the goal was to create an interesting landing page that displayed my work in a 3D space rather than a static, 2D format.  

## Tech Stack:

### Languages:
- ReactJS
- JavaScript

### Libraries:
- ThreeJS
- emailjs-com
- Material UI

## Installation:
- git clone <rep_name>(Copy the repository to your development area)
- npm i (install all dependencies to your cloned repo)

## Available Scripts
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `gltfhjsx public/3Dfiles/___/__.gltf -r public`
- Creates a jsx file that contains all the necessary threeJS components to render the 3D model
- You must have an exported .gltf 3D model in the folder, including a .bin file to correctly compile the jsx.

## Possible Difficulties:
### Slow rendering
- You may experience slow rendering and extremely slow responsiveness when viewing the 3D models,
this may be due to hardware limitations (Phones, tablets, etc).
- If you import your own models, this could be due to high polycount of the file.  Make sure to decimate the models vertices for a lower polycount for viewing purposes.  
### View Distance/Camera position is misaligned
- This may be from exporting your model when it was not positioned at world origin, make sure to set it to world origin ***before*** exporting.
### No/ or Unusual Shadowing
- You may see strange shadowing on the model surface despite using a point light.  This is usually from not applying a mesh texture to the model.  
- Having some metallic (15%) texture will ensure the shadow effect looks less jarring.
