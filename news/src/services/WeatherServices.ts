import axios from "axios";

const fetchDate = async () => {
    try {
        const response = await axios
            .get('http://localhost:5000/weather');

        // setData(result);
    } catch (error: any) {
        console.log(error.message)
        // setError(error.message);
    } finally {
        console.log('final')
        // setLoading(false);
    }
}