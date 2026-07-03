import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import { BsCloud, BsUpload } from 'react-icons/bs'
import styles from './CustomChartLoader.module.scss'
import { useI18n } from '../../i18n/I18nContext'

function LoadFromFile({ loading, load }) {
  const { t } = useI18n()
  function onDrop(acceptedFiles) {
    if (acceptedFiles.length) {
      load(acceptedFiles[0])
    }
  }
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    disabled: loading,
    onDrop,
    accept: 'text/plain,text/javascript,.js',
    maxFiles: 1,
  })
  return (
    <div
      className={classNames(styles.dropzone, {
        [styles.reject]: isDragReject,
        [styles.accept]: isDragAccept,
      })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <span>将文件拖到此处或{' '}
        <Button className={styles['browse-button']} color="primary">
          {t('common.browse')}
        </Button>
        {' '}从本机选择文件
      </span>
      <div className={styles.dropin}>
        {isDragAccept && <p>{t('dataLoader.allAccepted')}</p>}
        {isDragReject && <p>{t('dataLoader.someRejected')}</p>}
      </div>
    </div>
  )
}

function LoadFromString({ load, loading, placeholder }) {
  const { t } = useI18n()
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        load(value)
      }}
    >
      <input
        disabled={loading}
        className="form-control mb-2"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text-right">
        <button
          type="submit"
          disabled={value.trim() === '' || loading}
          className="btn btn-primary"
          onClick={() => {}}
        >
          {t('customChartLoader.submit')}
        </button>
      </div>
    </form>
  )
}

function CustomChartLoaderForm({
  uploadCustomCharts,
  loadCustomChartsFromUrl,
  loadCustomChartsFromNpm,
  onClose,
}) {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [type, setType] = useState('file')

  function handleError(e) {
    setLoading(false)
    if (e.isAbortByUser) {
      return
    }
    console.log(e)
    setError(e)
  }

  function changeImportType(type) {
    setError(null)
    setType(type)
  }

  return (
    <div className="row" style={{ minHeight: 300 }}>
      <div className="col-md-4">
        <div
          onClick={() => {
            changeImportType('file')
          }}
          className={classNames(
            'd-flex align-items-center cursor-pointer',
            styles.loadingOption,
            {
              [styles.active]: type === 'file',
            }
          )}
        >
          <BsUpload className="w-25" />
          <h4 className="m-0 d-inline-block">{t('customChartLoader.fromFile')}</h4>
        </div>
        <div
          onClick={() => changeImportType('url')}
          className={classNames(
            'd-flex align-items-center cursor-pointer',
            styles.loadingOption,
            {
              [styles.active]: type === 'url',
            }
          )}
        >
          <BsCloud className="w-25" />
          <h4 className="m-0 d-inline-block">{t('customChartLoader.fromUrl')}</h4>
        </div>
        <div
          onClick={() => changeImportType('npm')}
          className={classNames(
            'd-flex align-items-center cursor-pointer',
            styles.loadingOption,
            {
              [styles.active]: type === 'npm',
            }
          )}
        >
          <BsCloud className="w-25" />
          <h4 className="m-0 d-inline-block">{t('customChartLoader.fromNpm')}</h4>
        </div>
      </div>
      <div className="col-md-8">
        {type === 'npm' && (
          <LoadFromString
            loading={loading}
            load={(pkg) => {
              setError(null)
              setLoading(true)
              loadCustomChartsFromNpm(pkg).then(onClose, handleError)
            }}
            key="npm"
            placeholder={t('customChartLoader.npmPlaceholder')}
          />
        )}
        {type === 'url' && (
          <LoadFromString
            loading={loading}
            load={(url) => {
              setError(null)
              setLoading(true)
              loadCustomChartsFromUrl(url).then(onClose, handleError)
            }}
            key="url"
            placeholder={t('customChartLoader.urlPlaceholder')}
          />
        )}
        {type === 'file' && (
          <LoadFromFile
            loading={loading}
            load={(url) => {
              setError(null)
              setLoading(true)
              uploadCustomCharts(url).then(onClose, handleError)
            }}
            key="url"
            placeholder={t('customChartLoader.urlPlaceholder')}
          />
        )}
        {error && (
          <div className="alert alert-danger mt-2">
            {t('customChartLoader.error')}
          </div>
        )}
      </div>
    </div>
  )
}

function CustomChartLoader({ isOpen, onClose, ...props }) {
  const { t } = useI18n()
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      backdrop="static"
      centered
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="raw-modal"
      contentClassName="bg-white"
    >
      <Modal.Header closeButton>
        <Modal.Title>{t('customChartLoader.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CustomChartLoaderForm {...props} onClose={onClose} />
      </Modal.Body>
      <Modal.Footer>
        <div className='text-center w-100'>
          {t('customChartLoader.docs')}{' '}
          <a href="https://rawgraphs.io" target="_blank" rel="noreferrer">
            rawgraphs.io
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default memo(CustomChartLoader)
