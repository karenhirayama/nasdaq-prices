export const getListPerPage = (page: number) => `https://api.stockdata.org/v1/entity/search?exchanges=nasdaq&page=${page}&api_token=${process.env.REACT_APP_API_KEY}`

// `https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=${process.env.REACT_APP_API_KEY}`