# a-little-more-beautiful-bootstrap
 In this repositiry you can find more beautiful elements


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

You need change to this:
```html
...
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <div class="anim-bar">  
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </div>
</button>
...
```