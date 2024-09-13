import React, { useEffect } from 'react'
import { createSelector } from 'reselect'

import { cilBolt, cilDollar, cilMusicNote, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSmartTable,
  CWidgetStatsF,
} from '@coreui/react-pro'

import { CChartBar, CChartLine, CChartPie } from '@coreui/react-chartjs'
import { useDispatch, useSelector } from 'react-redux'

const url = 'http://localhost:3000/db'
const selectTotalUsers = (state) => state.userGrowth[state.userGrowth.length - 1]?.total
const selectActiveUsers = (state) => state.userGrowth[state.userGrowth.length - 1]?.active
const selectTotalUserGrowth = createSelector(
  (state) => state.userGrowth,
  (userGrowth) => userGrowth.map((userGrowth) => userGrowth.total),
)
const selectActiveUserGrowth = createSelector(
  (state) => state.userGrowth,
  (userGrowth) => userGrowth.map((userGrowth) => userGrowth.active),
)
const selectTotalStreams = (state) => state.songs.totalStreams
const selectTotalRevenueAds = (state) => state.revenue.ads
const selectTotalRevenueSubs = (state) => state.revenue.subs
const selectTopRecentArtist = (state) => state.songs.topRecentArtist
const selectRecentStreams = (state) => state.songs.recentStreams
const selectTopStreams = (state) => state.songs.topStreams
const selectSelectedSong = (state) => state.songSelected

const Dashboard = () => {
  const dispatch = useDispatch()
  const totalUsers = useSelector(selectTotalUsers)
  const activeUsers = useSelector(selectActiveUsers)
  const totalUserGrowth = useSelector(selectTotalUserGrowth)
  const activeUserGrowth = useSelector(selectActiveUserGrowth)
  const totalStreams = useSelector(selectTotalStreams)
  const totalRevenueAds = useSelector(selectTotalRevenueAds)
  const totalRevenueSubs = useSelector(selectTotalRevenueSubs)
  const totalRevenue = totalRevenueAds + totalRevenueSubs

  const topRecentArtist = useSelector(selectTopRecentArtist)
  const recentStreams = useSelector(selectRecentStreams)
  const topStreams = useSelector(selectTopStreams)

  const selectedSong = useSelector(selectSelectedSong)
  const columns = [
    { key: 'name', sorter: false, _style: { width: '25%' } },
    { key: 'artist', sorter: false, _style: { width: '25%' } },
    {
      key: 'lastStreamed',
      filter: false,
      _style: { width: '20%' },
    },
    { key: 'streamCount', label: 'Streams', _style: { width: '15%' }, filter: false },
    {
      key: 'userId',
      label: 'User',
      _style: { width: '15%' },
      filter: false,
      sorter: false,
    },
  ]

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'loadAllMetrics', payload: data })
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Key Metrics</CCardHeader>
        <CCardBody>
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilUser} size="xl" />}
                padding={false}
                title="Total Users"
                value={totalUsers}
                color="primary"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilUser} size="xl" />}
                padding={false}
                title="Active Users"
                value={activeUsers}
                color="info"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilMusicNote} size="xl" />}
                padding={false}
                title="Total Streams"
                value={totalStreams}
                color="warning"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilDollar} size="xl" />}
                padding={false}
                title="Revenue"
                value={totalRevenue}
                color="success"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilBolt} size="xl" />}
                padding={false}
                title="Top Recent Artist"
                value={topRecentArtist}
                color="dark"
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader>Top 5 Recently Streamed Songs</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: topStreams.map((stream) => stream.name),
                  datasets: [
                    {
                      label: 'Total Streams In Past 30 Days',
                      backgroundColor: '#f87979',
                      data: topStreams.map((stream) => stream.streamCount),
                    },
                  ],
                }}
                options={{
                  onClick: function (evt, element) {
                    const myChart = evt.chart
                    const points = myChart.getElementsAtEventForMode(
                      evt,
                      'nearest',
                      { intersect: true },
                      true,
                    )
                    if (points.length) {
                      const songName = myChart.data.labels[points[0].index]
                      dispatch({ type: 'setSong', payload: songName })
                    }
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader>User Growth</CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: [
                    'September',
                    'October',
                    'November',
                    'December',
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                  ],
                  datasets: [
                    {
                      label: 'Total Users',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: totalUserGrowth,
                    },
                    {
                      label: 'Active Users',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: activeUserGrowth,
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={3}>
          <CCard className="mb-4">
            <CCardHeader>Revenue Distribution</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['Ads', 'Subscriptions'],
                  datasets: [
                    {
                      data: [totalRevenueAds, totalRevenueSubs],
                      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={9}>
          <CCard className="mb-4">
            <CCardHeader>Recent Streams</CCardHeader>
            <CCardBody className="overflow-scroll">
              <CSmartTable
                columnFilterValue={{ name: selectedSong }}
                tableProps={{
                  striped: true,
                  hover: true,
                }}
                activePage={1}
                items={recentStreams}
                columns={columns}
                columnFilter
                itemsPerPageSelect
                itemsPerPage={5}
                columnSorter
                pagination
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
