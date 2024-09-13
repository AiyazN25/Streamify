import { cilEnvelopeOpen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import React from 'react'

import avatar1 from './../../assets/images/avatars/1.jpg'
import avatar2 from './../../assets/images/avatars/2.jpg'
import avatar3 from './../../assets/images/avatars/3.jpg'
import avatar4 from './../../assets/images/avatars/4.jpg'
import avatar5 from './../../assets/images/avatars/5.jpg'

const AppHeaderDropdownMssg = () => {
  const itemsCount = 4
  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle caret={false}>
        <CIcon icon={cilEnvelopeOpen} size="lg" className="my-1 mx-2" />
        <CBadge
          shape="rounded-pill"
          color="info-gradient"
          className="position-absolute top-0 end-0"
        >
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" style={{ minWidth: '24rem' }}>
        <CDropdownHeader className="bg-body-secondary text-body-secondary fw-semibold rounded-top mb-2">
          Messages
        </CDropdownHeader>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src={avatar1} status="success" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between text-body-secondary small mt-1">
                <div>Jessica Williams</div>
                <div>Just now</div>
              </div>
              <div className="fw-semibold">
                <span className="text-danger">!</span> Urgent: System Maintenance Tonight
              </div>
              <div className="small text-body-secondary">
                Attention team, we&#39;ll be conducting critical system maintenance tonight from 10
                PM to 2 AM. Plan accordingly...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src={avatar2} status="warning" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Richard Johnson</div>
                <div>5 minutes ago</div>
              </div>
              <div className="fw-semibold">
                <span className="text-danger">!</span> Project Update: Milestone Achieved
              </div>
              <div className="small text-body-secondary">
                Kudos on hitting sales targets last quarter! Let&#39;s keep the momentum. New goals,
                new victories ahead...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src={avatar4} status="secondary" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Angela Rodriguez</div>
                <div>1:52 PM</div>
              </div>
              <div className="fw-semibold">Social Media Campaign Launch</div>
              <div className="small text-body-secondary">
                Exciting news! Our new social media campaign goes live tomorrow. Brace yourselves
                for engagement...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src={avatar5} status="success" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Jane Lewis</div>
                <div>4:03 PM</div>
              </div>
              <div className="fw-semibold">Inventory Checkpoint</div>
              <div className="small text-body-secondary">
                Team, it&#39;s time for our monthly inventory check. Accurate counts ensure smooth
                operations. Let&#39;s nail it...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src={avatar3} status="secondary" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Ryan Miller</div>
                <div>3 days ago</div>
              </div>
              <div className="fw-semibold">Customer Feedback Results</div>
              <div className="small text-body-secondary">
                Our latest customer feedback is in. Let&#39;s analyze and discuss improvements for
                an even better service...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem className="text-center fw-semibold" href="#">
          View All Messages
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdownMssg
