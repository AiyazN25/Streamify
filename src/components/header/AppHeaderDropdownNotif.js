import {
  cilBasket,
  cilBell,
  cilChartPie,
  cilSpeedometer,
  cilUserFollow,
  cilUserUnfollow,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
} from '@coreui/react-pro'
import React from 'react'

const AppHeaderDropdownNotif = () => {
  const itemsCount = 5
  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle caret={false}>
        <CIcon icon={cilBell} size="lg" className="my-1 mx-2" />
        <CBadge
          shape="rounded-pill"
          color="danger-gradient"
          className="position-absolute top-0 end-0"
        >
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-body-secondary text-body-secondary fw-semibold rounded-top mb-2">
          Notifications
        </CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUserFollow} className="me-2 text-success" /> New User Registered
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilUserUnfollow} className="me-2 text-danger" /> User Deleted
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilChartPie} className="me-2 text-info" /> Sales Report Ready
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilBasket} className="me-2 text-primary" /> New Artist
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilSpeedometer} className="me-2 text-warning" /> Server Overloaded
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary text-body-secondary fw-semibold my-2">
          Server
        </CDropdownHeader>
        <CDropdownItem className="d-block py-2">
          <div className="text-uppercase small fw-semibold mb-1">Cpu Usage</div>
          <CProgress thin color="info-gradient" value={25} />
          <div className="text-body-secondary small">Cpu Usage Description</div>
        </CDropdownItem>
        <CDropdownItem className="d-block py-2">
          <div className="text-uppercase small fw-semibold mb-1">Memory Usage</div>
          <CProgress thin color="warning-gradient" value={70} />
          <div className="text-body-secondary small">11444GB/16384MB</div>
        </CDropdownItem>
        <CDropdownItem className="d-block py-2">
          <div className="text-uppercase small fw-semibold mb-1">Ssd Usage</div>
          <CProgress thin color="danger-gradient" value={90} />
          <div className="text-body-secondary small">243GB/256GB</div>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdownNotif
