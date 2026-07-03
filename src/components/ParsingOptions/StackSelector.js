import React, { useCallback } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useI18n } from '../../i18n/I18nContext'

export default function StackSelector({
  title,
  value,
  list,
  onChange,
  ...props
}) {
  const { t } = useI18n()
  const handleChange = useCallback(
    (nextDimension) => {
      if (onChange) {
        onChange(nextDimension)
      }
    },
    [onChange]
  )

  return (
    <div className="option">
      {title}
      <Dropdown className="d-inline-block raw-dropdown">
        <Dropdown.Toggle
          variant="white"
          className="truncate-160px"
          disabled={list.length === 0}
        >
          {value ? value : t('parsingOptions.column')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {value && (
            <Dropdown.Item onSelect={() => handleChange(null)}>
              {t('parsingOptions.doNotStack')}
            </Dropdown.Item>
          )}
          {Object.keys(list).map((d) => {
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
