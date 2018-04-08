# ng2-material-import

A simple module to import ALL material design for angular 2

**NOTE**
This version is up to date with angular 2 material, so the inputs are no longer `md` but `mat`
If you have a project that uses `md` (eg: `<md-imput></md-input>`) it will now be `mat` (eg: `<mat-input></mat-input>`)

This is the same for the attributes.
Before `<input mdInput>` after `<input matInput>`

## Changes

- (8/4/2018): Added Stepper module { MatStepperModule }
- (7/4/2018): Updated package.json to have the most recent and compatible versions with angular2

## Instalation

`$> npm i --save-dev ng2-material-import`

### Adding to app.module.ts

```typescript
...
import { MaterialImportModule } from "ng2-material-import";

@NgModule({
  imports: [
    MaterialImportModule
  ],
})
...
```

### Adding SCSS dependency for material

There are two ways of doing this:
Add `node_modules/ng2-material-import/theme/default.scss` to the styles path in .angular-cli.json.

```json
...

  "styles": [
    "styles.css",
    "../node_modules/ng2-material-import/theme/default.scss"
  ],

...
```

Or:

Create a folder called themes. Inside that folder add a .SCSS file.
inside that file add these lines:

```scss
@import '~@angular/material/theming';
@include mat-core();
$default-app-primary: mat-palette($mat-indigo);
$default-app-accent:  mat-palette($mat-pink, A200, A100, A400);
$default-app-warn:    mat-palette($mat-red);
$default-app-theme: mat-light-theme($default-app-primary, $default-app-accent, $default-app-warn);
@include angular-material-theme($default-app-theme);

```

After that add that file to the angular-cli styles section

```json
...

  "styles": [
    "styles.css",
    "theme/default.scss"
  ],

...
```

restart `ng serve`

## Usage

use material as normal.

```html
<mat-input-container>
  <input matInput placeholder="This is a placeholder" value="bla">
</mat-input-container>
```

Please check the [Angular 2 Material Component website](https://material.angular.io/components) for more information.
