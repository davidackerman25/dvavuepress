# Flexbox
[css-tricks complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Properties for parent (flex-container)

### display

```css
.container {
  display: flex; /* or inline-flex */
}
```

### flex-direction

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### flex-flow

```css
.container {
  flex-flow: column wrap;
}
```

### justify-content

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```

### align-items

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```

### align-content

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```

## Properties for children (flex-items)

### order
```css
.item {
  order: 5; /* default is 0 */
}
```

### flex-grow
```css
.item {
  flex-grow: 4; /* default 0 */
}
```

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

Negative numbers are invalid.

### flex-shrink
```css
.item {
  flex-shrink: 3; /* default 1 */
}
```
This defines the ability for a flex item to shrink if necessary.

### flex-basis
```css
.item {
  flex-basis:  | auto; /* default auto */
}
```
This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.

If set to `0`, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its `flex-grow` value.

### flex
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

This is the shorthand for `flex-grow`, `flex-shrink` and `flex-basis` combined. The second and third parameters (`flex-shrink` and `flex-basis`) are optional. The default is 0 1 auto, but if you set it with a single number value, it’s like 1 0.

**It is recommended that you use this shorthand property rather than set the individual properties.** The shorthand sets the other values intelligently.