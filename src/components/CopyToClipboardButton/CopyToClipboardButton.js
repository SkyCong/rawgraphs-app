import React, { useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsClipboard } from 'react-icons/bs'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { useI18n } from '../../i18n/I18nContext'
import style from './style.module.css'

export function CopyToClipboardButton({ content }) {
  const copyToClipboard = useCopyToClipboard()
  const [pending, setPending] = useState(false)
  const { t } = useI18n()

  const handleCopy = useCallback(() => {
    if (!pending) {
      setPending(true)
      copyToClipboard(content)
      setTimeout(() => {
        setPending(false)
      }, 3000)
    }
  }, [content, copyToClipboard, pending])

  return (
    <Button
      variant="light"
      className={style['copy-to-clipboard-button'] + " d-flex flex-row align-items-center"}
      onClick={handleCopy}
    >
      {pending && (
        <>
          <IoMdCheckmarkCircle className="text-success" />
          <span className="ml-2">{t('copyToClipboard.copied')}</span>
        </>
      )}
      {!pending && (
        <>
          <BsClipboard />
          <span className="ml-2">{t('copyToClipboard.copy')}</span>
        </>
      )}
    </Button>
  )
}
