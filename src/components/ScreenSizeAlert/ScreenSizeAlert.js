import React, { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { Modal, Button } from 'react-bootstrap'
import { useI18n } from '../../i18n/I18nContext'

// import styles from './ScreenSizeAlert.module.scss'

function ScreenSizeAlert() {
  const size = useWindowSize()
  const [showModal, setShowModal] = useState(size.width < 992)
  const [modalWasClosed, setModalWasClosed] = useState(false)
  const { t } = useI18n()

  const handleClose = () => {
    setShowModal(false)
    setModalWasClosed(true)
  }

  useEffect(() => {
    if (modalWasClosed === false) {
      setShowModal(size.width < 992)
    }
  }, [modalWasClosed, size])

  return (
    <Modal
      className="raw-modal"
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title as="h5">
          <span role="img" aria-label="Party icon">
            🎉
          </span>{' '}
          {t('screenSizeAlert.welcome')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="big">
          {t('screenSizeAlert.bigScreen')}
        </p>
        <p>
          {t('screenSizeAlert.resize')}
        </p>
        <p>{t('screenSizeAlert.touchNotSupported')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          {t('screenSizeAlert.gotIt')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ScreenSizeAlert
