# Luxhabitat Technical Test

# Tech test:

Create the template in html+css and implement the required functionalities(theres a folder called `info` where you will find all what you need).
To complete the exercise you will need to:

- [x] Implement all elements seen in the design.
- [x] Implement a form to add a new lead:
  - [x] This form will be on a modal
  - [x] Upon completion of the form, a new row on top of the table will be created with
        the data introduced by the user.
  - [x] All fields must include appropriate HTML native validation.
- [x] Upon clicking the “Load more” button, a new group of leads will be loaded and added
      below the ones already on the screen.
- [x] The line chart will use data from the file lead-evolution.json
- [x] The pie chart will use data from the file lead-by-type.json

# Technologies:

- VITE (https://vitejs.dev/)
- TypeScript (https://www.typescriptlang.org/)
- Vue 3 (https://vuejs.org/)
- Pinia (https://pinia.vuejs.org/)
- Faker.js (https://fakerjs.dev/)
- Element Plus (https://element-plus.org/es-ES/)
- vue-charts.js (https://www.chartjs.org/) (https://vue-chartjs.org/) (https://chartjs-plugin-datalabels.netlify.app/samples/charts/line.html) (https://github.com/chartjs/chartjs-plugin-datalabels/blob/master/docs/samples/charts/doughnut.md) (https://medium.com/@jogarcia/beautiful-line-chart-in-vue3-with-chart-js-901bac65d66e)
- PxToEM Calculator (http://pxtoem.com/)
- Font: Public Sans (https://fonts.google.com/specimen/Public+Sans)
- Unsplash photos (https://source.unsplash.com) (https://awik.io/generate-random-images-unsplash-without-using-api/) (https://source.unsplash.com/random/325x245/?house)

# Project tree

- [Assets](./src/assets/)
  - [fonts](./src/assets/fonts)
  - [svg](./src/assets/svg)
- [Components](./src/components)
  - [buttons](./src/components/buttons)
  - [Types](./src/components/Types)
  - [validator](./src/components/validator)
- [Mocks](./src/mocks)
- [Pages](./src/pages)
- [Stores](./src/stores)
- [Utils](./src/utils)

# How to:

- Download the project from https://github.com/edfrias/luxhabitat-tech-test
- Open a terminal and run `npm install` to get all dependencies
- In a terminal run `npm run dev`
- Open in the browser the url you'll see in the terminal (`http://localhost:5173/`)
