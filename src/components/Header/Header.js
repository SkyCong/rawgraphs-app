import React from 'react'
import styles from './Header.module.scss'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { FaGlobe } from 'react-icons/fa'
import { useI18n } from '../../i18n/I18nContext'

export default function Header({ menuItems }) {
  const { locale, setLocale } = useI18n()
  const langLabel = locale === 'zh-CN' ? '中文' : 'EN'

  return (
    <Navbar bg="white" expand="lg" sticky="top" className={styles.navbar}>
      <Navbar.Brand href="/"><b>RAW</b><span className="text-primary">Graphs</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          {menuItems && menuItems.length > 0 && menuItems.map((d, i) => {
            return (
              <Nav.Link key={'item' + i} href={d.href}>
                {d.label}
              </Nav.Link>
            )
          })}
          <Dropdown className="ml-2">
            <Dropdown.Toggle variant="light" size="sm" id="lang-toggle">
              <FaGlobe className="mr-1" />{langLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight>
              <Dropdown.Item
                active={locale === 'zh-CN'}
                onClick={() => setLocale('zh-CN')}
              >
                中文
              </Dropdown.Item>
              <Dropdown.Item
                active={locale === 'en-US'}
                onClick={() => setLocale('en-US')}
              >
                English
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
