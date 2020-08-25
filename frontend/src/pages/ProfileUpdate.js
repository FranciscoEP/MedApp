import React, { Component } from 'react'
import PROFILE_SERVICE from '../services/profile'
import ProfileForm from '../components/ProfileForm'
import { MyContext } from '../context'
import { message } from 'antd'
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

  componentDidMount = async (profileData) => {
    const { data } = await PROFILE_SERVICE.PROFILE_UPDATE(profileData)
    const { profile } = data
    this.setState({ profile })
  }

  onFinish = async (profile) => {
    const { imgURL } = this.state
    const response = await PROFILE_SERVICE.PROFILE_UPDATE({ ...profile, imgURL })
    this.context.logUser(response.data.profile)
    this.profileSuccess()
    this.props.history.push('/profile')
  }

  profileSuccess = () => {
    message.success('Profile updated')
  }

  render() {
    return (
      <div>
        <ProfileForm
          title="Equipment Information"
          onFinish={this?.onFinish}
          setImgURL={this.setImgURL}
          img={this.state.ImgURL}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
ProfileUpdate.contextType = MyContext
export default ProfileUpdate

//
