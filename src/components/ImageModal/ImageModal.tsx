import Modal from 'react-modal';
import stylModal from './ImageModal.module.css';
import {ModalParamsType} from './ImageModal.types'

export default function ImageModal({isOpen, onClose, url, description}: ModalParamsType) {
    return (
            <Modal
                className={stylModal.modal}
                isOpen={isOpen}
                overlayClassName={stylModal.overlay}
                ariaHideApp={false}
                onRequestClose={onClose}
                shouldCloseOnEsc={true}
            >
                <img className={stylModal.img} src={url} alt={description} />          
            </Modal>
  );
}