import './ImageBrowserMain.css';
import PropTypes from 'prop-types';


function EmptyFunction() {
  console.log('This was an empty function.');
}

export default function ImageBrowserMain( { userId,images } ) {
  return (
    <div className="ImageBrowserMain">
      <div id="photoGrid">
        <div className="grid col-12" id="grid">

          {images.map((image) => (
            <div key={image.Id} className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="grid-item" className="grid-image" src={`https://img.rec.net/${image.ImageName}?width=500`} />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// Default Property Values
ImageBrowserMain.defaultProps = {
  userId: 0,
}

// Property Definitions
ImageBrowserMain.propTypes = {
  userId: PropTypes.number.isRequired,
}