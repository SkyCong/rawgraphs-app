import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useI18n } from '../../i18n/I18nContext'

export default function CustomChartWarnModal({
  toConfirmCustomChart,
  abortCustomChartLoad,
  confirmCustomChartLoad,
}) {
  const { t } = useI18n()
  return (
    <Modal
      show={toConfirmCustomChart !== null}
      onHide={() => abortCustomChartLoad(null)}
      backdrop="static"
      centered
      aria-labelledby="contained-modal-title-vcenter"
      className="raw-modal"
      contentClassName='border'
    >
      <Modal.Header closeButton>
        <Modal.Title>{t('customChartWarn.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          {t('customChartWarn.body')}
        </p>
        {toConfirmCustomChart && toConfirmCustomChart.type === 'project' && (
          <div
            title={toConfirmCustomChart.value.rawCustomChart.source}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {toConfirmCustomChart.value.rawCustomChart.source}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-between">
        <Button
          variant="light"
          onClick={() => {
            abortCustomChartLoad()
          }}
        >
          {t('customChartWarn.dontExecute')}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            confirmCustomChartLoad()
          }}
        >
          {t('customChartWarn.continue')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
