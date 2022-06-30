import { FC, useEffect, useState } from "react";
import './RangeTime.css';

const RangeTime: FC<any> = ({ handleShowSearchInput, showSearchInput, searchByDate, setSearchByDate, getHistoricalPriceByDate, handleClearSearch }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSearchChange = (e: any) => {
    setSearchByDate((searchByDate: any) => ({ ...searchByDate, [e.target.name]: e.target.value }) as any);
  };

  const handleCancelSearch = () => {
    handleClearSearch();
    handleShowSearchInput();
  };

  useEffect(() => {
    const initial = new Date(searchByDate.initialDate);
    const final = new Date(searchByDate.finalDate);
    if (initial >= final) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [searchByDate])

  return (
    <div className="rangeTime" style={showSearchInput ? { display: 'flex' } : { display: 'none' }}>
      <div className="rangeTime__container">
        <div className="rangeTime__input">
          <h4>Search by time range</h4>
          <div className="rangeTime__input__section">
            <label htmlFor='initialDate'>Initial date:</label>
            <input type='date' id='initialDate' name='initialDate' value={searchByDate.initialDate} onChange={handleSearchChange} />
          </div>
          <div className="rangeTime__input__section">
            <label htmlFor='finalDate'>Final date:</label>
            <input type='date' name='finalDate' value={searchByDate.finalDate} onChange={handleSearchChange} />

          </div>
          {showAlert && <div className="rangeTime__input__error">
            <span>Please check the dates.</span>
          </div>}
        </div>
        <div className="rangeTime__btn">
          <button className="rangeTime__btn__cancel" onClick={handleCancelSearch}>Clear search</button>
          {showAlert ? <button className="rangeTime__btn__disable">Search by date</button> : <button className="rangeTime__btn__confirm" onClick={getHistoricalPriceByDate}>Search by date</button>}
        </div>
      </div>
    </div>
  )
}

export default RangeTime;