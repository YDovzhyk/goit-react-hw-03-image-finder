import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from "./searchbar.module.css";

class Searchbar extends Component {
    static defaultProps = {
        onsubmit: () => {}
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {
        search: "",
        id: "",
        }

    searchId = nanoid()
        
    handleChange = ({target}) => {
        const {value, name} = target;
        this.setState({
            [name]: value,
        })
        this.setState({id: nanoid()});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({search: "", id: "",});
    };

render() {
    const {handleChange, handleSubmit, searchId} = this;
        const {search} = this.state;
    return (
    <header className={s.searchbar}>
        <form onSubmit={handleSubmit} className={s.form}>
            <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
            </button>

            <input
                id={searchId}
                name="search"
                className={s.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={search}
                onChange={handleChange}
            />
        </form>
    </header>
    )
}
}

export default Searchbar;
