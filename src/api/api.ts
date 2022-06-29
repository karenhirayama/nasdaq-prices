export const getListPerPage = (page: number) => `https://api.stockdata.org/v1/entity/search?exchanges=nasdaq&page=${page}&api_token=${process.env.REACT_APP_API_KEY}`

export const getStockHistoricalData = (symbol: string) => `https://api.stockdata.org/v1/data/eod?sort=asc&symbols=${symbol}&api_token=${process.env.REACT_APP_API_KEY}`

export const getStockHistoricalByDate = (symbol: string, initialDate: string, finalDate: string) =>  `https://api.stockdata.org/v1/data/eod?sort=asc&symbols=${symbol}&date_from=${initialDate}&date_to=${finalDate}&api_token=${process.env.REACT_APP_API_KEY}`