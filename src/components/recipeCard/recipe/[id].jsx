const recepieDetails = ({ data }) => {
    console.log('RECIPE', data);
    return (
        <div key={data.id}>
            <div>
                <h1>Recepie Details</h1>
                <p>{data.name}</p>
            </div>
        </div>
    );
};

export default recepieDetails;
