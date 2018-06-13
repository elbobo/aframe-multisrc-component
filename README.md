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
          src="https://cdn.glitch.com/a48d183f-fb91-4762-b2bd-ae9dac0819f2%2FRIGHT.png?1528923769231"
          crossorigin="anonymous">
        <img 
          id="left"
          src="https://cdn.glitch.com/a48d183f-fb91-4762-b2bd-ae9dac0819f2%2FLEFT.png?1528923769070"
          crossorigin="anonymous">
        <img 
          id="top"
          src="https://cdn.glitch.com/a48d183f-fb91-4762-b2bd-ae9dac0819f2%2FTOP.png?1528923769434"
          crossorigin="anonymous">
        <img 
          id="bottom"
          src="https://cdn.glitch.com/a48d183f-fb91-4762-b2bd-ae9dac0819f2%2FBOTTOM.png?1528923769289"
          crossorigin="anonymous">
        <img 
          id="front"
          src="https://cdn.glitch.com/a48d183f-fb91-4762-b2bd-ae9dac0819f2%2FFRONT.png?1528923769357"
          crossorigin="anonymous">
        <img 
          id="back"
          src="https://cdn.glitch.com/a48d183f-fb91-4762-b2bd-ae9dac0819f2%2FBACK.png?1528923768943"
          crossorigin="anonymous">
      </a-assets>
      <a-box 
        position="0 1.5 -2" 
        rotation="0 -90 0"
        multisrc="srcs:#right,#left,#top,#bottom,#front,#back"
        shadow>
      </a-box>
    </a-scene>
  </body>

Property | Description | Default
--- | --- | ---
srcs | comma separated list of img srcs can be inline links or ids for assets | []
srcpath | for use with inline images, saves you having to write the full image path each time | ''
