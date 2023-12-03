# ATL Transit Concept + <br> Railway Atlanta (RYA) : Design System

![Atlanta Railway Banner](/libs/assets/images/docs/atlanta-project-railway-banner.png)

Made with Angular 16 and Storybook 7

## Inital set up

After cloning the repo, start with running the following command:

```bash
$ npm i
```

Afterwards, you are able to run the application locally and run Storybook as well. Here are the commands for running storybook and serving the app.

<br>

**Serve the App**:

```bash
$ npx nx run atl-transit:serve
```

_Will be serving on_ `http://localhost:4200` :

<br>

**Storybook**:

```bash
$ npx nx run atl-transit:storybook
```

_Will be serving on_ `http://localhost:4400`

<br>

## Guideline and Documentations

Here are links to seperate docs for guidelines if you would to contribute to this project.

-  [Component Guideline](./docs/_COMPONENT_GUIDE.md)
-  [Merge Request Guideline](./docs/_MERGE_REQUEST_GUIDE.md)
-  [Folder Structure](./docs/_FOLDER_STRUCTURE.md)
-  [Component Documentation Guideline](./docs/_COMPONENT_DOCUMENATION_GUIDE.md)
-  More Coming Soon

<br>

## About this project

This project presents a conceptual web application aimed at transforming the display and accessibility of information related to Atlanta's Public Transportation. It focuses on providing real-time updates on train and bus times, locations, arrivals, and other crucial aspects of public transit.

This project centers around a **Design System**. This system is carefully built to provide a uniform and easy-to-use interface throughout the web application. It also ensures a consistent user experience for any future updates or expansions of the application

<br>

## Why use Storybook?

To document and showcase the components of the Design System, we utilize Storybook. Storybook serves as a development environment for UI components, allowing us to visualize the different states of these components in a sandbox separate from the main application. This approach promotes better component reuse, testability

<br>

##

Disclaimer: This is a conceptual Train Arrival Page and App. Simulated information may not be accurate or real-time. We are not affiliated with MARTA or any transportation authority. Information on this site is for demonstration purposes only. We aim for accuracy but cannot guarantee real-time train arrival data.

<br>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨
