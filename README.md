# A-frame multisrc component

An [A-frame](https://aframe.io) component that allows you to add multiple material sources to standard a-frame shapes

![Multisrc component animated demo](https://raw.githubusercontent.com/elbobo/aframe-multisrc-component/master/multisrc_animateddemo.gif)

# Basics

As with the standard `src` component you can use `multisrc` with images that have been preloaded in the `assets` tag (recommended for all the reasons described [here](https://aframe.io/docs/0.8.0/core/asset-management-system.html#sidebar)...

```
  <head>
    <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="js/multisrc.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <img id="right" src="path/to/rightimage.png">
        <img id="left" src="path/to/leftimage.png">
        <img id="top" src="path/to/topimage.png">
        <img id="bottom" src="path/to/bottomimage.png">
        <img id="front" src="path/to/frontimage.png">
        <img id="back" src="path/to/backimage.png">
      </a-assets>
      <a-box 
        position="0 1.5 -2" 
        multisrc="srcs:#right,#left,#top,#bottom,#front,#back"
        shadow>
      </a-box>
    </a-scene>
  </body>
  ```
  ..or you can add the images inline
  
  ```
  <a-box 
    position="0 1.5 -2" 
    multisrc="srcs:path/to/rightimage.png,path/to/leftimage.png,path/to/topimage.png,path/to/bottomimage.png,path/to/frontimage.png,path/to/backimage.png"
    shadow>
  </a-box>
  ```
  When defining assets inline you can avoid rewriting lengthy paths (if all your assets are in the same folder) by using the `srcspath` attribute and then simply listing the images name like so;
  
  ```
  <a-box 
    position="0 1.5 -2" 
    multisrc="srcspath:path/to/;srcs:rightimage.png,leftimage.png,topimage.png,bottomimage.png,frontimage.png,backimage.png"
    shadow>
  </a-box>
  ```
  Example here are shown with images but as with the standard `src` tag we can also use videos as a texture.
  
  ---
  
  NB The `srcs` attribute assumes the following order - **positive-x**, **negative-x**, **positive-y**, **negative-y**, **positive-z**, **negative-z** so in the case of a cube, it will place your first asset on the positive-x side (right), the second on the negative-x side (left) and so on. See diagram below.
  
  
# API

Property | Description | Default
--- | --- | ---
srcs | comma separated list of assets can be inline links or ids pointing to assets tag | []
srcspath | for use with inline assets, saves you having to write the full image path each time | ''
