import React from 'react'
import { Alert } from 'react-bootstrap'
import { useI18n } from '../../i18n/I18nContext'
/**
 *
 * @param {string} type The warning type: success, secondary, warning, danger
 * @param {string} error The error message to be displayed
 */
function WarningMessage({
  variant = 'warning',
  message,
  action = null,
}) {
  const { t } = useI18n()
  const actualMessage = message || t('warningMessage.default')
  return (
    <Alert
      variant={variant}
      className="my-2 d-flex flex-row justify-content-between align-items-center"
    >
      {actualMessage}
      {action}
    </Alert>
  )
}

export default WarningMessage
