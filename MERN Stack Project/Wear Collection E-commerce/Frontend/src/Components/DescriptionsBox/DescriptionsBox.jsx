import "./DescriptionsBox.css";
const DescriptionsBox = ({ product }) => {
  console.log(product);
  return (
    <div className="descriptionsbox">
      <div className="descriptionsbox-navigator">
        <div className="descriptionsbox-nav-box">Description</div>
        <div className="descriptionsbox-nav-fade">
          Review ({product.rating.count})
        </div>
      </div>

      <div className="descriptonsbox-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DescriptionsBox;
