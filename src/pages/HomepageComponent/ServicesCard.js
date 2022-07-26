import { Link } from 'react-router-dom';

function ServiceCard() {
    return (
        <>
            <div className="card p-3">
                <div className="card-body text-center" style={{ border: "1px solid black" }}>
                    <i className="fa fa-camera" style={{ fontSize: "50px" }}></i>
                    <h5 className='pt-3'>Photography/ Videography</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi ducimus perspiciatis assumenda doloremque cupiditate officiis non accusamus expedita iure.</p>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;
