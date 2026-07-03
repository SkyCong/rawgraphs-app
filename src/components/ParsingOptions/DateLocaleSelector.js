import React, { useCallback } from 'react'
import { Dropdown } from 'react-bootstrap'
import { localeList } from '../../constants'
import { useI18n } from '../../i18n/I18nContext'

export default function DateLocaleSelector({
  title,
  value,
  onChange,
  ...props
}) {
  const { t } = useI18n()
  const handleChange = useCallback(
    (locale) => {
      if (onChange) {
        const nextLocale = locale
        onChange(nextLocale)
      }
    },
    [onChange]
  )

  return (
    <div className="option">
      {title}
      <Dropdown className="d-inline-block raw-dropdown">
        <Dropdown.Toggle variant="white" className="">
          {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>
            <span>
              {t('parsingOptions.fromD3').split('d3-time-format')[0]}{' '}
              <a
                href="https://github.com/d3/d3-time-format/tree/master/locale"
                target="_blank"
                rel="noopener noreferrer"
              >
                d3-time-format
              </a>
            </span>
          </Dropdown.Header>
          {Object.keys(localeList).map((d) => {
            return (
              <Dropdown.Item key={d} onSelect={() => handleChange(d)}>
                {d}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
