import './Error.css';

const Error = () => {
  return (
    <div className="error">
      <div className="error__title">
        <h1>Loading error</h1>
      </div>
      <div className="error__text">
        <p>Error occured during fetch data.</p>
        <div className="error__contact">
          <p>Please contact:</p>
          <a href="https://github.com/karenhirayama" target='blank'>Karen Mayumi Hirayama.</a>
        </div>
      </div>
    </div>
  )
};

export default Error