import { Component } from "react";
import PropTypes from 'prop-types';

import s from "./modal.module.css"

class Modal extends Component {

    static defaultProps = {
        close: () => {}
    }

    static propTypes = {
        close: PropTypes.func,
    }

    componentDidMount(){
        document.addEventListener("keydown", this.closeModal)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal)
    }

    closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            this.props.close()
        }
    }

    render(){
        const {closeModal} = this;
        return (
            <div className={s.overlay} onClick={closeModal}>
                <div className={s.modal}>
                    <span onClick={closeModal} className={s.close}>X</span>
                    <img className={s.photo} src={this.props.content.largeImageURL} alt={this.props.content.tags}/>
                </div>
            </div>
        )
    }
}

export default Modal;

Modal.defaultProps = {
    content: {},
}

Modal.propTypes = {
    status: PropTypes.bool.isRequired,
    data: PropTypes.object,
    content: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
}),
}