import './Subscription.scss';

const Subscription = () => {
  return (
    <div className="container">
      <div className="subscription">
        <h2 className="subscription-title">Спіймай всі акції!</h2>
        <p className="subscription-text">
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
          будуть з`влятись у нашому магазині. А у нас їх багато :D
        </p>
        <form className="subscription-form">
          <input placeholder="введіть" className="subscription-input" />
          <button className="subscription-button" type="submit">
            Підписатись
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
