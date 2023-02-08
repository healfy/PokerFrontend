import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

interface IProps {
    show: boolean,
    text: string,
    handleClose: () => void,
    title: string
}


export const ErrorInfo = (props: IProps) => {
    const {show, text, handleClose, title} = props;


    return (
        <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
        >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(event) => {handleClose();}}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    )
}