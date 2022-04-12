# React Portal / Parking Lot POC

This project aims to show the capabilities of [React Portal](https://reactjs.org/docs/portals.html) in respect to the upcoming Parking Lot Feature.

It is neither feature complete nor cleverly architected, just meant to demonstrate the capabilities of the Portal feature.

## Run Locally

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Structure

This demo shows how React Portal can be used to render child elements in a DOM node outside of the parent component DOM.

In the case of the Parking Lot feature, this can help us display the 'overlay' or 'modal' required of the Parking Lot at any point in the DOM, even when it is rendered from inside the App component.

## Without Portal

```html
<div id="root">
  <div class="App">
    <div id="header">
      <div class="parking-lot-button"><button>Parking Lot</button></div>
    </div>
    <header class="App-header">
      <div class="vehicle-card">
        <!-- content -->
      </div>
    </header>
    <div>
      <!-- The Parking Lot is rendered as a child of its Parent Component, App  -->
      <div class="parkinglot_pl-header__+wJp4">
        <!-- content -->
      </div>
      <div class="pl-main">
        <!-- content -->
      </div>
    </div>
  </div>
</div>
```

## With Portal
