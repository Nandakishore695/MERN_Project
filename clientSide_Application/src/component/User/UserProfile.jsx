import React from "react";

const UserProfile = () => {
  return (
    <section className="container p-xl-5">
      <div class="container text-center">
        <div class="row">
          <div class="col text-start">
            <p>Account</p>
            <p>
            Nandakishore Vishwanath</p>
          </div>
          <div class="row">
          <div class="col text-start">Column</div>
          <div class="col text-start border">
            <h1>Profile Details</h1>
            <ul>
              <li>Full Name :	Nandakishore Vishwanath</li>
              <li>Mobile Number :	7893797371</li>
              <li>Email ID :	nandakishore695@gmail.com</li>
              <li>Gender :	Male</li>
              <li>Location :	Hyderabad</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
