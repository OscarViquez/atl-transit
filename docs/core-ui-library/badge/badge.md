# Badge

![Buttons Header](./images/badge-hero-banner.svg)

<br/>
<br/>

# Overview

With a vast selection of over 7.7 million listings, our aim is to simplify the process for guests to discover the perfect accommodation that suits their preferences.

<br/>
<br/>

# Appearance

### White Badge `Default`

![White Badge](./images/badge-example-white.svg)

```html
<shared-badge> Default </shared-badge>

<!-- OR -->

<shared-badge [color]="'white'"> White </shared-badge>
```

<br/>

### Black Badge

![Black Badge](./images/badge-example-black.svg)

```html
<shared-badge [color]="'black'"> Black </shared-badge>
```

<br/>

### Red Badge

![Red Badge](./images/badge-example-red.svg)

```html
<shared-badge [color]="'red'"> Red </shared-badge>
```

<br/>

### Orange Badge

![Orange Badge](./images/badge-example-orange.svg)

```html
<shared-badge [color]="'orange'"> Orange </shared-badge>
```

<br/>

### Gold Badge

![Gold Badge](./images/badge-example-gold.svg)

```html
<shared-badge [color]="'gold'"> Gold </shared-badge>
```

<br/>

### Green Badge

![Green Badge](./images/badge-example-green.svg)

```html
<shared-badge [color]="'gold'"> Green </shared-badge>
```

<br/>

### Blue Badge

![Blue Badge](./images/badge-example-blue.svg)

```html
<shared-badge [color]="'blue'"> Blue </shared-badge>
```

# Roundness / Radius / Shape

### Pill Badge

![Pill Badge](./images/badge-example-pill.svg)

```html
<shared-badge [radius]="'radius'"> Pill </shared-badge>
```

### Icon Badge

![Pill Badge](./images/badge-example-pill.svg)

```html
<shared-badge [radius]="'icon-pill'"> G </shared-badge>
```

<br/>
<br/>

# How to Import Component

![Pill Badge](./images/badge-imports-banner.svg)

```typescript
// * Import component from '@atl-transit/shared' library
import { BadgeComponent } from '@atl-transit/shared';

@Component({
   selector: 'my-component',
   standalone: true,
   // * Add component to your imports here
   imports: [BadgeComponent],
   template: ` <shared-badge> Default </shared-badge> `
})
export class MyComponent {}
```