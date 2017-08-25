# ng2-material-import
A simple module to import material design for angular 2

For some reason I am not able to include the material modules.

This is still a WIP. So there will be many things missing.

## Instalation

`$> npm i --save angular/animations angular/cdk angular/material hammerjs npm i ng2-material-import`

Create a folder called themes. Inside that folder add a .SCSS file.

This Scss file is required for material.
inside that file add these lines:

```
@import '~@angular/material/theming';
@include mat-core();
$default-app-primary: mat-palette($mat-indigo);
$default-app-accent:  mat-palette($mat-pink, A200, A100, A400);
$default-app-warn:    mat-palette($mat-red);
$default-app-theme: mat-light-theme($default-app-primary, $default-app-accent, $default-app-warn);
@include angular-material-theme($default-app-theme);

```

After that add that file to the angular-cli styles section

```
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

```
<md-input-container>
  <input mdInput placeholder="This is a placeholder" value="bla">
</md-input-container>
```


I will update this README as soon as I have more time.

I have a few changes I want to do:

* Selecting only specific materials to use
* get the dependencies of material into this module, so as to only have to download this package and not all of the rest.
