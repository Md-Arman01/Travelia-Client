import PropTypes from 'prop-types'

const TourAbout = ({item}) => {
    return (
        <div>
            <h1 className="border-b-4 border-orange-400 w-fit my-5 text-5xl font-Rancho font-semibold ">Tour About :</h1>
             <div>
                <p className="text-lg text-gray-500 font-medium">{item?.about}</p>
             </div>
        </div>
    );
};
TourAbout.propTypes ={
    item: PropTypes.object.isRequired
}

export default TourAbout;