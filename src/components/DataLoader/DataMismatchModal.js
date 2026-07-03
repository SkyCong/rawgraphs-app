import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useI18n } from '../../i18n/I18nContext'

function DataMismatchModal({
  replaceRequiresConfirmation,
  commitDataReplace,
  cancelDataReplace,
}) {
  const [showModal, setShowModal] = useState(true)
  const { t } = useI18n()

  const handleClose = () => {
    setShowModal(false)
  }
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
      <Modal.Header>
        <Modal.Title as="h5">
          {t('dataMismatch.title')}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {replaceRequiresConfirmation === 'parse-error' && (
          <>
            <p>{t('dataMismatch.errorParsing')}</p>
            <p>{t('dataMismatch.errorHint')}</p>
          </>
        )}
        {replaceRequiresConfirmation.startsWith('missing-column:') && (
          <>
            <p>
              {t('dataMismatch.missingDimension', { dim: replaceRequiresConfirmation.split(':')[1] })}
            </p>
            <p>{t('dataMismatch.errorHint')}</p>
          </>
        )}
        {replaceRequiresConfirmation === 'type-mismatch' && (
          <>
            <p>{t('dataMismatch.typeMismatch')}</p>
            <p>{t('dataMismatch.errorHint')}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={() => {
            commitDataReplace()
          }}
        >
          {t('dataMismatch.loadNewData')}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            cancelDataReplace()
          }}
        >
          {t('common.cancel')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DataMismatchModal
