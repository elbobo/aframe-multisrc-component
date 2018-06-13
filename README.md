# A-frame multisrc component
An A-frame component that allows you to add multiple material sources to standard a-frame shapes

![Multisrc component animated demo](https://raw.githubusercontent.com/elbobo/aframe-multisrc-component/master/multisrc_animateddemo.gif)

# Basics

  <head>
    <title>Aframe multisrc component demo</title>
    <meta name="description" content="Aframe multisrc component demo">
    <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="js/multisrc.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <img 
          id="right"
          src="path/to/rightimage.png"
          crossorigin="anonymous">
        <img 
          id="left"
          src="path/to/leftimage.png"
          crossorigin="anonymous">
        <img 
          id="top"
          src="path/to/topimage.png"
          crossorigin="anonymous">
        <img 
          id="bottom"
          src="path/to/bottomimage.png"
          crossorigin="anonymous">
        <img 
          id="front"
          src="path/to/frontimage.png"
          crossorigin="anonymous">
        <img 
          id="back"
          src="path/to/backimage.png"
          crossorigin="anonymous">
      </a-assets>
      <a-box 
        position="0 1.5 -2" 
        multisrc="srcs:#right,#left,#top,#bottom,#front,#back"
        shadow>
      </a-box>
    </a-scene>
  </body>

Property | Description | Default
--- | --- | ---
srcs | comma separated list of img srcs can be inline links or ids for assets | []
srcspath | for use with inline images, saves you having to write the full image path each time | ''
