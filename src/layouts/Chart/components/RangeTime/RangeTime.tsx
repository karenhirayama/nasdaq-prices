import { FC } from "react";

const RangeTime: FC<any> = ({setInitialDate, setFinalDate}) => {

  return (
    <div>
      <div className="rangeTime">
        <div className="rangeTime__input">
          <div className="rangeTime__input__initial_date">
            <input type='date' />
          </div>
          <div className="rangeTime__input__final_date">
            <input type='date' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeTime;