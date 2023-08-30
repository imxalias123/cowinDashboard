// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    data: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const fetchedData = await response.json()
    console.log(fetchedData)
    const updatedData = {
      last7DaysVaccination: fetchedData.last_7_days_vaccination.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose1,
        dose2: each.dose2,
      })),
      vaccinationByAge: fetchedData.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
        gender: each.gender,
      })),
      vaccinationByGender: fetchedData.vaccination_by_gender.map(each => ({
        count: each.count,
        gender: each.gender,
      })),
    }
    this.setState({
      data: updatedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderVaccinationStatus = () => {
    const {data} = this.state
    return <VaccinationCoverage data={data.last7DaysVaccination} />
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVaccinationStatus()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <div className="website-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="logo-heading">Co-WIN</h1>
        </div>
        <h1 className="para">CoWIN Vaccination in India</h1>
        {this.renderApiStatus()}
      </div>
    )
  }
}

export default CowinDashboard
