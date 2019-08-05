async function fetchData() {
    try {
        const response = await fetch('http://localhost:8000/moodObservation/events')
            .then(res => res.json());
        const data = response.map((fetchedData: any) => JSON.parse(fetchedData.payload));
        return data;
    } catch (e) {
        console.log(e);
    }
}

// .then(data => data.map((fetchedData: any) => JSON.parse(fetchedData.payload)))
export default fetchData;
