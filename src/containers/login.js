import React from 'react';
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";

function Login() {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <div class="card card-info">
                <div class="card-header">
                  <h3 class="card-title">Login</h3>
                </div>
                <AvForm class="form-horizontal">
                  <div class="card-body">
                    <AvGroup className="row">
                      <label for="email" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <AvField
                          name="email"
                          type="text"
                          placeholder="Enter email"
                          required errorMessage="Please enter email."
                        />
                      </div>
                    </AvGroup>
                    <AvGroup className="row">
                      <label for="password" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <AvField
                          name="password"
                          type="password"
                          placeholder="Enter password."
                          required errorMessage="Please enter password."
                        />
                      </div>
                    </AvGroup>
                  </div>
                  <div class="card-footer">
                    <button type="submit" class="btn btn-info">Sign in</button>
                  </div>
                </AvForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
