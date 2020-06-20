# a-little-more-beautiful-bootstrap
 In this repositiry you can find more beautiful elements

### Usage:
 1) Download bootstrap 4, jquery.js, popper.js or use cdn links
 2) Download repository and add css and js folders in your project
 3) Link almbb.css in head
 4) Add almbb.js in head after bootstrap 4, jquery.js, popper.js or before body end


## animated-bootstrap-hamburger
 Simple pretty bootstrap 4 hamburger menu

### Usage:
Simple navbar-toggler:
```html
...
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
...
```

You need change to this (choose anim-1 or anim-2):
```html
...
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <div class="anim-bar anim-1">  
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </div>
</button>
...
```

## Carousel overlay

### Usage:
Add div as in the example 
```html
<div class="carousel-item active">
    <div class="carousel_overlay"></div>
    ...
```