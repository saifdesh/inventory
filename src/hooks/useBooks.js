import { useEffect, useState } from "react"

const useBooks = () => {
    const [count, setCounts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCounts(data));

    }, []);

    return [count, setCounts];

}

export default useBooks; 