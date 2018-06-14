# A-frame multisrc component

An [A-frame](https://aframe.io) component that allows you to add separate image/video textures to different sides of standard a-frame shapes

![Multisrc component animated demo](https://raw.githubusercontent.com/elbobo/aframe-multisrc-component/master/multisrc_animateddemo.gif)

The multisrc component integrates with all existing components allowing you to define a different texture for each side of an image while still controlling all other material properties with the standard `material` attributes (color, opacity etc.). It should work seamlessly with all other aframe components too (physics, animation etc. Please let me know of any issues).

# Basics

As with the standard `src` component you can use `multisrc` with images/videos that have been preloaded in the `assets` tag (recommended for all the reasons described [here](https://aframe.io/docs/0.8.0/core/asset-management-system.html#sidebar))

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
        color="blue"
        opacity="0.5"
        shadow>
      </a-box>
    </a-scene>
  </body>
  ```
  Or you can add the images/videos inline
  
  ```
  <a-box 
    position="0 1.5 -2" 
    multisrc="srcs:path/to/rightimage.png,path/to/leftimage.png,path/to/topimage.png,path/to/bottomimage.png,path/to/frontimage.png,path/to/backimage.png"
    color="blue"
    opacity="0.5"
    shadow>
  </a-box>
  ```
  When defining assets inline you can avoid rewriting lengthy paths (if all your assets are in the same folder) by using the `srcspath` attribute and then simply listing the image/video names like so;
  
  ```
  <a-box 
    position="0 1.5 -2" 
    multisrc="srcspath:path/to/;srcs:rightimage.png,leftimage.png,topimage.png,bottomimage.png,frontimage.png,backimage.png"
    color="blue"
    opacity="0.5"
    shadow>
  </a-box>
  ```
  Examples here are shown using images but as with the standard `src` tag we can also use videos as a texture. The logic for playback on video textures (and how it differs between those defined inline or within assets) on `multisrc` is the same as that for video textures on standard `src` - see [here](https://aframe.io/docs/0.8.0/components/material.html#video-textures) for details. Basically, preloading is always the best way to do it.
    
  
# API

Property | Description | Default
--- | --- | ---
srcs | comma separated list of assets. Can either be a selector to an `<img>` or `<video>` defined in assets, or an inline URL. | []
srcspath | for use with inline assets, saves you having to write the full image path each time (see above for example) | ''


  
# Notes

The `srcs` attribute assumes the following order - **positive-x**, **negative-x**, **positive-y**, **negative-y**, **positive-z**, **negative-z** so in the case of a cube, it will place your first asset on the positive-x side (right), the second on the negative-x side (left) and so on. See diagram below.

Put image

# Advanced

Under the hood `multisrc` is adding a different material to each 'side' of a shape. This is made from an array of materials that three.js now allows to be added to the mesh [Please see here](https://stackoverflow.com/a/50645451/1729877) for SO answer and discussion that prompted this approach.

Aside from the `src` attribute, these materials inherit properties from the default material component added to the entity. I think the most common use case of this is to apply different textures so I have made this straightforward to use. You can however target the individual materials and effect other properties. I have included a function that allows you to make granular changes should you wish to.

Materials are in an array in the standard order for applying materials and so can be reached by their index i.e. 0 = positive-x, 1 = negative-x, 2 = positive-y etc.

So, assuming you have `multisrc` attached to an element with id 'foo' you could use the `granularChange` function to target the right hand side material on a cube and change its colour like so;

```javascript
var foo = document.getElementById('foo').components.multisrc
foo.granularChange(0).color = {r:0,g:1,b:0}
```

Or get the back and change its metalness

```javascript
foo.granularChange(5).metalness = 0.8
```

Or get the right and make it a wireframe

```javascript
 foo.granularChange(1).wireframe = true
```

etc. Which would result in the following on an otherwise blue cube with 0 metalness.

![Multisrc granular changes demo image](https://github.com/elbobo/aframe-multisrc-component/blob/master/targeting.gif?raw=true)


# Known issues

In terms of figuring out how many sides a shape has (and applying textures accordingly) this currently works as well as a standard `src` would i.e. it gets it right on cubes, cylinders, cones, triangles, circles etc. but not on more complex shapes like dodecahedron etc. I'm not going to list them all here but assume if you get unexpected results with a texture using standard `src` it will do the same with `multisrc` maybe this could be fixed at some point

