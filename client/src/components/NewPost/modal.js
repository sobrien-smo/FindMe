import React from 'react'

const Modal = ({ children, show, setModal }) => {
  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modalClose"
          type="button"
          onClick={() => setModal(false)}
        >
          X
        </button>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  )

  return content
}

export default Modal