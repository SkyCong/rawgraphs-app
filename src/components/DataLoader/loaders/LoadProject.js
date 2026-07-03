import React, { useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import S from './LoadProject.module.scss'
import { deserializeProject } from '@rawgraphs/rawgraphs-core'
import charts from '../../../charts'
import { useI18n } from '../../../i18n/I18nContext'


export default function LoadProject({ onProjectSelected, setLoadingError }) {
  const { t } = useI18n()
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        try {
          const project = deserializeProject(e.target.result, charts)
          setLoadingError(null)
          onProjectSelected(project)
        } catch (e) {
          setLoadingError(e.message)
        }
      })
      if (acceptedFiles.length) {
        reader.readAsText(acceptedFiles[0])
      }
    },
    [onProjectSelected, setLoadingError]
  )
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    onDrop,
    accept: '.rawgraphs',
    maxFiles: 1,
  })
  return (
    <div
      className={classNames(S.dropzone, {
        [S.reject]: isDragReject,
        [S.accept]: isDragAccept,
      })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <span>将文件拖到此处或{' '}
        <Button className={S['browse-button']} color="primary">
          {t('common.browse')}
        </Button>
        {' '}从本机选择文件
      </span>
      {isDragAccept && <p>{t('dataLoader.allAccepted')}</p>}
      {isDragReject && <p>{t('dataLoader.someRejected')}</p>}
    </div>
  )
}
