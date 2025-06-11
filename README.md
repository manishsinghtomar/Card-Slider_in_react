

# React Slick
React slick is a carousel component built with React. It is a react port of slick carousel.


```ls
npm install react-slick --save
```

# Include CSS
You can include css required for this library in 2 ways

Install the slick-carousel package and import css in to your slider component

### npm

```ls
npm install slick-carousel --save
```
```css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

or you can add cdn link in your html

```css
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
```
```jsx
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
```

## Step 1 - wrapping up cards code inside`<Slider {...settings}>` component.

## Step 2 - import react-slick libraries.

```jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

```jsx
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,//how many slide you want show initially.
    slidesToScroll: 1//on clicking on arrow button how many slide will scroll at a time
  };
```
