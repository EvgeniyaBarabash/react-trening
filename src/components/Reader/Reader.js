import { useEffect, useState, useRef } from 'react';
import Navigation from '../Navigation/Navigation';
import Controls from './Controls';
import Publication from './Publication';
const LOCAL_KEY = 'reader_item_index';

export default function Reader({ items }) {
    const [index, setIndex] = useState(0);
    const isMounted = useRef(false);

    // const [index, setIndex] = useState(()=>{
    //     const savedItem = localStorage.getItem(LOCAL_KEY);
    //     return savedItem ? Number(savedItem) :0;
    // });

    const changeIndex = value => {
        setIndex(prevIndex => prevIndex + value);
    };
    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem(LOCAL_KEY, index);
        }
        isMounted.current = true;
    }, [index]);

    useEffect(() => {
        const savedItem = localStorage.getItem(LOCAL_KEY);
        if (savedItem) {
            setIndex(Number(savedItem));
        }
    }, []);
    const currentItem = items[index];
    const totalItems = items.length;
    return (
        <>
            <Navigation />
            <Controls current={index + 1} onChange={changeIndex} total={totalItems} />
            <p>
                {index + 1}/{totalItems}
            </p>
            <Publication currentItem={currentItem} />
        </>
    );
}

// export class Reader extends Component {
//     state = {
//         index: 0,
//     };
//     changeIndex = value => {
//         this.setState(state => ({ index: state.index + value }));
//     };
//     componentDidUpdate(prevState) {
//         if (prevState.index !== this.state.index) {
//             localStorage.setItem(LOCAL_KEY, this.state.index)
//         }
//     };
//     componentDidMount() {
//         const savedItem = localStorage.getItem(LOCAL_KEY);
//         if (savedItem) {
//             this.setState({ index: Number(savedItem) });
//         }
//     };
//     render() {
//         const { index } = this.state;
//         const currentItem = this.props.items[index];
//         const totalItems = this.props.items.length;
//         return (
//             <>
//                 <Link to={`/`}>Video</Link>
//                 <Controls
//                     current={index + 1}
//                     onChange={this.changeIndex}
//                     total={totalItems}
//                 />
//                 <p>
//                     {index + 1}/{totalItems}
//                 </p>
//                 <Publication currentItem={currentItem} />
//             </>
//         );
//     }
// }
