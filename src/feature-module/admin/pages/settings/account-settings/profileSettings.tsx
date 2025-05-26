import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import CustomSelect from '../../../common/select/commonSelect'
import { City, Country, State } from '../../../common/json/selectOption'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ProfileSettings = () => {
    const [value, setValue] = useState<any>()
  return (
    <div className="card profile-setting-section">
  <div className="card-header">
    <h5 className="fw-bold">Account Settings</h5>
  </div>
  <form >
    <div className="card-body pb-1">
      <h6 className="fw-bold mb-3">Basic Information</h6>
      <div className="border-bottom mb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Profile Photo</label>
              <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 text-dark frames">
                  <ImageWithBasePath
                    src="assets/admin/img/customer/customer-01.jpg"
                    className="img-fluid"
                    alt="brands"
                  />
                  <Link
                    to="#"
                    className="upload-img-trash btn btn-sm rounded-circle"
                  >
                    <i className="ti ti-trash fs-12" />
                  </Link>
                </div>
                <div className="profile-upload">
                  <div className="profile-uploader d-flex align-items-center">
                    <div className="drag-upload-btn btn btn-md btn-dark">
                      <i className="ti ti-photo-up fs-14" />
                      Change
                      <input
                        type="file"
                        className="form-control image-sign"
                        multiple
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="fs-14">Recommended size is 500px x 500px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                First Name<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Last Name<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Email Address<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Phone Number<span className="text-danger ms-1">*</span>
              </label>
              {/* <input
                type="text"
                className="form-control"
                id="phone"
                name="name"
              /> */}
              <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={value}
                onChange={setValue} />
            </div>
          </div>
        </div>
      </div>
      <h6 className="fw-bold mb-3">Address Information</h6>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Address Line</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Country</label>
            
            <CustomSelect
                options={Country}
                className="select d-flex"
                placeholder="Select"
                />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">State</label>
           
            <CustomSelect
                options={State}
                className="select d-flex"
                placeholder="Select"
                />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">City</label>
            
            <CustomSelect
                options={City}
                className="select d-flex"
                placeholder="Select"
                />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Postal Code</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="d-flex justify-content-end">
        <Link
          to="#"
          className="btn btn-light me-3"
          data-bs-dismiss="modal"
        >
          Cancel
        </Link>
        <button type="button" className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  </form>
</div>

  )
}

export default ProfileSettings