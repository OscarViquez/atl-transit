# Badge

![Badge Header](./images/badge-hero-banner.svg)

<br/>
<br/>

# Table of Contents

-  [Overview](#overview)
-  [Appearance](#appearance)
   -  [White Badge](#white-badge-default)
   -  [Black Badge](#black-badge)
   -  [Red Badge](#red-badge)
   -  [Orange Badge](#orange-badge)
   -  [Gold Badge](#gold-badge)
   -  [Green Badge](#green-badge)
   -  [Blue Badge](#blue-badge)
-  [Roundness / Radius / Shape](#roundness--radius--shape)
   -  [Pill Badge](#pill-badge)
   -  [Icon Badge](#icon-badge)
-  [How to Import Component](#how-to-import-component)
-  [Types & Interfaces](#types--interfaces)

<br/>
<br/>

# Overview

The badge component is a small UI element used to display information or status. It is commonly used to highlight important or relevant information to the user. Badges can be customized with different colors and shapes.

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
<br/>

# How to Import Component

![Pill Badge](./../../shared-assets/getting-started-imports.svg)

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

<br/>
<br/>
<br/>

# Types & Interfaces

![Pill Badge](./../../shared-assets/getting-stared-types-interfaces.svg)

### Badge Color Type

```typescript
export type BadgeColor = 'gold' | 'red' | 'orange' | 'green' | 'blue' | 'gray' | 'white' | 'black';
```

### Badge Radius / Roundness Type

```typescript
export type BadgeRadius = 'default' | 'pill' | 'icon';
```
