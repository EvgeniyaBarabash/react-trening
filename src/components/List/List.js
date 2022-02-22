import { useState, useEffect } from 'react';
import { getPublications } from "../../servise/publicationsApi";
import Navigation from 'components/Navigation/Navigation';
import Loader from "../Loader/Loader";
import { Link } from 'react-router-dom';
export default function List() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchItem() {
            setLoading(true);
            try {
                const items = await getPublications();
                console.log(items)
                setItems(items)
            } catch (error) {

            } finally {
                setLoading(false);
            }
        }
        fetchItem()
    }, [])

    return (
        <>
            <Navigation />
            {loading && <Loader size=" lg" />}
            <ol>
                {items.map((item) => {
                    return <li key={item.id}> <Link to={`/list/${item.id}`}>{item.name}</Link></li>
                })}
            </ol>
        </>
    )
}