# NASDAQ STOCK HISTORICAL PRICE 

The project is build with [STOCKDATA.ORG](https://www.stockdata.org/) to display the informations, and it can see in [Nasdaq Stock Marked](https://62be4a9d680e1d0de7e79642--nasdaq-historical-price-stock-marked.netlify.app/).

## Tecnologies

This project is build with:

[ReactJS](https://pt-br.reactjs.org/)
[Axios](https://axios-http.com/docs/intro)
[React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
[React-ChartJS-2](https://react-chartjs-2.js.org/)

## User Story

A user can view the list of all companies listed in the NASDAQ stock marked, also can see a historical price of a specify stock.
### Homepage

<img src="./HomePage_list.png" alt="Homepage list of all companies" width="300px"></img>
<img src="./HomePage_btn.png" alt="Buttons to see more companies" width="300px"></img>

The homepage has a list of all companies listed in the NASDAQ stock marked.

### Historical price

<img src="./StockPage.png" alt="Historical price of the stock" width="300px"></img>

The page displays the historical price of the stock.

If you want to search by a specify range time, click in the button "Click here to search by time", and this action open a modal with the inputs.

<img src="./StockPage_search_input.png" alt="Modal to search by range time" width="300px"></img>

### Not found page

<img src="./NotFound.png" alt="Not found page" width="300px"></img>

If the user try to go to a page that doesn't exist, the user will be directed to a Not Found page.

### Error in fetch data

<img src="./LoadingError.png" alt="Message to error in fetch data" width="300px"></img>

If the fetch data fails or the search in the API fails, the user will be directed to a not found page.

## Start the application

To run the application, first make sure you have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/). The follow steps are with yarn, but it works with npm.

### `yarn install`

Run in the terminal `yarn install` to install `node-modules`.

### `yarn start`

After run in the terminal `yarn start`, and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deploy

The implementation of the application is deploy with [Netlify](https://www.netlify.com/).