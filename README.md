✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

<br/>

## What to do after cloning the repo?

First do `npm i` to install all dependecies.

### Start the app

To start the development server run `npx nx serve atl-transit`. Open your browser and navigate to http://localhost:4200/.

### Start Storybook Showcase

To run your local storybook, use one of these commands, depending on the library: 
  
`npx nx run shared:storybook`  
`npx nx run station-ui:storybook`   

Open your browser and navigate to http://localhost:4400/.

<br/>

## Folder Structure

In this Angular Project, we are dividing some of main features in to their own libraries.
Similarly to Monorepos, this would make it easier to scale if need to add additional features and functionality. This can also helps with searching on where the code for a certain feature is located.

### Libraries :

-  <strong> Shared </strong> :
   -  Where we will keep out core UI Components, Types, Services, and Layouts.
-  <strong> Stations </strong> :

   -  Train Arrivals and Train Station Pages.

-  <strong> Buses </strong> :
   -  Bus Routes and the Route Arrivals

### Inside a Library Folder Structure:

### data folder

    + data-services ( ... )
        - state (where we manage state)
        - actions
        - effects
        - reducer
        - selectors

    + adapters ( where we transform data from
          api to the way we would like it be )
    + facades
    + mocks (mock data)
    + models (interfaces)
    + services
    + utils

### ui folder

    + view ( Different Screen and Pages )
        - `<train-arrivals-page/>`
        - `<train-station--page/>`

    + ui ( ui components for those views and screen )
        - storybook
        - src
        - libs
            - components (components go here)

✨ **⬆⬆ Will update this section above with more detailed explanation ⬆⬆** ✨

## API USED

-  Rail Arrival Data:     
   https://www.itsmarta.com/arrivals.aspx

-  20230504221309  
   http://labs.itsmarta.com/signpost/predictions

-  20230504221351  
   http://labs.itsmarta.com/signpost/trains

-  20230504221132  
   http://labs.itsmarta.com/signpost/trains

## Components and Storybook Folder Structure
