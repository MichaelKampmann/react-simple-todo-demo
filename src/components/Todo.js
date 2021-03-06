import { useState } from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  function deleteHandler() {
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }

  return (
      <div>
        <div className='card'>
          <h2>{props.title}</h2>
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
        </div>
        { modalIsOpen && <Modal title={props.title} onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo
