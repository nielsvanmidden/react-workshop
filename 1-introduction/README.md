# Creating a Toaster

## Goal
Goal of this exercise is getting a basic understanding of React component types, using state and using events.

## Exercise
Create a toaster. A Toaster is basically a list of notifications (alerts) that shows up from the bottom of the page. Each notification should have a dismiss button. And whenever that one is clicked it should dissapear from the list.

Attached you will find a json file that respresents data for three toaster messages.
```
src/js/__data__/index.json
```

Approximate time to finish: 1.5 hours.

## Setup

Clone repo and open navigate to `1-introduction`
```
https://github.com/nielsvanmidden/react-workshop.git
```

Install packages
```
npm install
```

Run Storybook
```
npm run storybook
```

Open your browser
```
http://localhost:6006
```

## Guidance
Please use the following markup for rendering alerts
```
<div class="alert  alert--toast  alert--info" role="alert">
  <h3 class="alert__title"><!-- Title --></h3>
  <div class="c-media  c-media--center">
    <div class="c-media__body">
      <!-- Description -->
    </div>
  </div>
  <button type="button" class="alert__close  ui-btn  ui-btn--icon  ui-btn--lg" aria-label="close">
    <svg version="1.1" viewBox="0 0 14 14" class="svg-inline--bi bi-cross bi-lg" aria-hidden="true">
      <path fill-rule="evenodd" d="M7 7.378l3.363 3.363a.496.496 0 0 0 .703-.004c.19-.19.197-.51.004-.703L7.707 6.67l3.363-3.363a.496.496 0 0 0-.004-.703.502.502 0 0 0-.703-.004L7 5.964 3.637 2.6a.496.496 0 0 0-.703.004.502.502 0 0 0-.004.703L6.293 6.67 2.93 10.034a.496.496 0 0 0 .004.703c.19.19.51.197.703.004L7 7.378z"></path>
    </svg>
  </button>
</div>
```

Note that alerts (based on type) can have the following classnames:
* alert--info
* alert--warning
* alert--success
