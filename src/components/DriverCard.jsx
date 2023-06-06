
const DriverCard = ({ name, rating, img, car}) => {
    return (
        <div>
            <p>
              <strong>Name:</strong> {name} 
            </p>
            <p>
              <strong>Rating:</strong> {rating}
            </p>
            <div>
        <img className="imageDriverCard " src={img} alt="Profile" />
      </div>
            <p>
              <strong>Car Model:</strong> {car.model} 
            </p>
            <p>
              <strong>License Plate:</strong> {car.licencePlate}
            </p>
          </div>
       
      );
  }

export default DriverCard;