import { FC } from "react";

const RangeTime: FC<any> = ({ searchByDate, setSearchByDate, getHistoricalPriceByDate, handleClearSearch }) => {

  const handleSearchChange = (e: any) => {
    setSearchByDate((searchByDate: any) => ({ ...searchByDate, [e.target.name]: e.target.value }) as any);
  };

  return (
    <div>
      <div className="rangeTime">
        <div className="rangeTime__input">
          <h4>Search by time range</h4>
          <div className="rangeTime__input__section">
            <label htmlFor='initialDate'>Initial date</label>
            <input type='date' id='initialDate' name='initialDate' value={searchByDate.initialDate} onChange={handleSearchChange} />
          </div>
          <div className="rangeTime__input__section">
            <label htmlFor='finalDate'>Final date</label>
            <input type='date' name='finalDate' value={searchByDate.finalDate} onChange={handleSearchChange} />
          </div>
        </div>
        <div className="rangeTime__btn">
          <button className="rangeTime__btn__cancel" onClick={handleClearSearch}>Clear search</button>
          <button className="rangeTime__btn__confirm" onClick={getHistoricalPriceByDate}>Search by date</button>
        </div>
      </div>
    </div>
  )
}

export default RangeTime;