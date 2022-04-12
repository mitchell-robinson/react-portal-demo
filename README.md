# React Portal / Parking Lot POC

This project aims to show the capabilities of [React Portal](https://reactjs.org/docs/portals.html) in respect to the upcoming Parking Lot Feature.

It is neither feature complete nor cleverly architected, just meant to demonstrate the capabilities of the Portal feature.

## Run Locally

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# What Portal Does

React Portal can be used to render child elements in a DOM node outside of the parent component DOM.

In the case of the Parking Lot feature, this can help us display the 'overlay' or 'modal' required of the Parking Lot at any point in the DOM, even when it is rendered from inside the App component.

## Without Portal

```html
<div id="root">
  <div class="App">
    <div id="main">
      <!-- Main App Div for content -->
    </div>
    <div>
      <!-- The Parking Lot is rendered in a child of its Parent Component, App  -->
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

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <div class="App">
      <!-- Main App Content Here -->
    </div>
  </div>
  <div id="parkingLotRoot">
    <div class="parkinglot_portal-parking-lot-wrapper__R9V70">
      <!-- Parking lot rendered to DOM node that we specify with React Portal -->
    </div>
  </div>
</body>
```

# Benefits

With a component rendered via React Portal, we can visually break out a component from it's parent. Say, we need Parking Lot to appear over the entire app. With Portal, it can do so as a 'child' of its parent component, while not being subject to any common rendering issues like overflows or z-indexes.

When components are rendered via Portal, they maintain all capabilities as if it were still a child component, such as:

- context and state (i.e. - pass data from vehicle card to Parking Lot)
- event bubbling (i.e. - if the parking lot needs to relay information back to its 'parent' component)

# Portal Wrapper

`src/components/Portal/index.js`
The Portal component allows us to import a reusable Portal wrapper that simply needs child elements and the id of the DOM element we wish to render the children to.

```js
//Portal Wrapper
function Portal({ children, rootId }) {
  return createPortal(children, document.getElementById(rootId));
}
```

In use on `src/components/ParkingLot/index.js`

```jsx
return (
  <Portal rootId="parkingLotRoot">
    //All of the below Parking Lot Component content will be rendered in the DOM
    node that has the ID of "parkingLotRoot" //Instead of in whatever component
    that is the true parent of the Parking Lot Component //This is achieved by
    providing the Portal component with a rootId prop
    <div className={styles["portal-parking-lot-wrapper"]}>
      <div className={styles["pl-header"]}>
        <p>Parking Lot (1)</p>
        <button onClick={() => closeParkingLot()}>&gt;</button>
      </div>
      <div className={styles["pl-main"]}>
        {vehicle.year} {vehicle.make} {vehicle.model} added to your Parking Lot.
        <img
          src={vehicle.imgsrc}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        />
      </div>
      <input type="text" onChange={(e) => (vehicle.note = e.target.value)} />
    </div>
  </Portal>
);
```
