# Session Four

## Issue

The problem we were hitting at the end of this session was that our state was updating and our UI render was not. This is because we we're not triggering any re-render in our actual application.

## The Fix

In order to fix the problem, we need to actually trigger a re-render in the DOM. For this, we are using `RenderApplication.render` in our state object. React, as we will see, has a a very complex but elegant solution to re-render only those components that are affected by the state change. We will not do that but you can at least now get the idea of what's happening in a reactive (note this has nothing to do with React itself).

## Challenge

See if you can find a way to alter our current setup to make this example framework more like React so that we're only re-rendering elements that actually get affected by the state change.