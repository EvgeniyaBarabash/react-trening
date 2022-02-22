import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getPublicationById } from '../../servise/publicationsApi';
import { Link } from 'react-router-dom';
import { deletePublicationById } from '../../servise/publicationsApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

export function ListItem() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [isDeleted, setDeleted] = useState(false);
    useEffect(() => {
        async function fetchById() {
            try {
                const item = await getPublicationById(itemId);
                setItem(item);
                console.log(item);
            } catch (error) {
                console.log(error);
            }
        }
        fetchById();
    }, [itemId]);

    async function deleteItem() {
        try {
            setDeleted(true);
            await deletePublicationById(itemId);
            toast.success('Публикация успешно удалена!');
        } catch (error) {
            toast.error('erorr');
        } finally {
            setDeleted(false);
        }
    }

    return (
        <>
            <Link to="/list"> К публикациям</Link>
            <ToastContainer />
            <button
                type="button"
                onClick={deleteItem}
                disabled={isDeleted}
                style={{ display: 'flex' }}
            >
                Delete {isDeleted && <Loader size="sm" />}
            </button>
            {item && <h3>{item.name}</h3>}
            {item && <img src="{item.avatar}" />}
        </>
    );
}
