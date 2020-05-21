import React, { Component } from 'react'
import PROFILE_SERVICE from '../services/profile'
import ProfileForm from '../components/ProfileForm'
import { Link } from 'react-router-dom'

import '../index.css'

export class ProfileUpdate extends Component {
  state = { profile: '', imgUrl: '' }

  setImgURL = (imgURL) => {
    this.setState({
      imgURL,
    })
  }

  onChange = (info) => {
    if (info.file.status !== 'uploading') {
      this.setImgURL(info.file.response.secure_url)
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`)
    }
  }

  componentDidMount = async (data) => {
    const response = await PROFILE_SERVICE.PROFILE_UPDATE(data)
    const profile = response.data.profile
    this.setState({ profile })
  }

  onFinish = async (profile) => {
    const { imgURL } = this.state
    const response = await PROFILE_SERVICE.PROFILE_UPDATE({ ...profile, imgURL })
    this.props.history.push('/profile')
  }

  render() {
    return (
      <div>
        <ProfileForm
          title="Equipment Information"
          onFinish={this.onFinish}
          setImgURL={this.setImgURL}
          img={this.state.ImgURL}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default ProfileUpdate

//
