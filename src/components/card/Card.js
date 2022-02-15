import "./card.css";
// import dummy from "../../images/dummy.png";
const Card = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="img-container">
        {data?.meta?.banners?.map((em, i) => (
          <img
            style={{
              width: `${98 / data?.meta?.banners.length}%`,
            }}
            src={em?.url}
            alt=""
          />
        ))}
      </div>
      <div className="over-flow-img-container">
        <img src={data?.meta?.logo?.url} alt="" />
      </div>

      <div className="card-title">{data?.meta?.companyName}</div>
      <div className="card-info">
        <div className="card-country">
          <span>{data?.addresses[0]?.city}</span>{" "}
          <span>{data?.addresses[0]?.country}</span> .
        </div>
        <div className="card-qty">Min Qty: {data?.minOrderQty}</div>
      </div>
      <div className="card-category">{data?.meta?.companyShortDesc}</div>
      <div className="card-view">View Details</div>
    </div>
  );
};

export default Card;
