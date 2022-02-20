import { Component } from 'react';
import { Link } from 'react-router-dom';
import Controls from './Controls';
import Publication from './Publication';
const LOCAL_KEY = 'reader_item_index';
export class Reader extends Component {
    state = {
        index: 0,
    };
    changeIndex = value => {
        this.setState(state => ({ index: state.index + value }));
    };
    componentDidUpdate(prevState) {
        if (prevState.index !== this.state.index) {
            localStorage.setItem(LOCAL_KEY, this.state.index)
        }
    };
    componentDidMount() {
        const savedItem = localStorage.getItem(LOCAL_KEY);
        if (savedItem) {
            this.setState({ index: Number(savedItem) });
        }
    };
    render() {
        const { index } = this.state;
        const currentItem = this.props.items[index];
        const totalItems = this.props.items.length;
        return (
            <>
                <Link to={`/`}>Video</Link>
                <Controls
                    current={index + 1}
                    onChange={this.changeIndex}
                    total={totalItems}
                />
                <p>
                    {index + 1}/{totalItems}
                </p>
                <Publication currentItem={currentItem} />
            </>
        );
    }
}
