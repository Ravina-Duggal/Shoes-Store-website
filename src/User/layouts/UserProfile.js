export default function UserProfile() {
    return (
        <>
            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-3">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <img
                                    src="/assets/img/profile-img2.jpg"
                                    alt="Profile"
                                    className="rounded-circle  img-fluid profile-side-img mb-3"
                                />
                                <h3>Ravina Duggal</h3>
                                <h5>Full Stack developer</h5>
                                <div className="social-links mt-2">
                                    <a href="#" className="twitter">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <ul className="nav nav-tabs nav-tabs-bordered">
                                    <li className="nav-item">
                                        <button
                                            className="nav-link active red-color"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-overview"
                                        >
                                            Overview
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            className="nav-link red-color"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-edit"
                                        >
                                            Edit Profile
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            className="nav-link red-color"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-settings "
                                        >
                                            Settings
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            className="nav-link red-color"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-change-password"
                                        >
                                            Change Password
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2">
                                    <div
                                        className="tab-pane fade show active profile-overview"
                                        id="profile-overview"
                                    >
                                        <h5 className="card-title">About</h5>
                                        <p className="small fst-italic">
                                        I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.
                                        </p>

                                        <h5 className="card-title">Profile Details</h5>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                            <div className="col-lg-9 col-md-8">Ravina Duggal</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Collage/University
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                Guru Nanak Dev University Regional Campus Jalandhar
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Role</div>
                                            <div className="col-lg-9 col-md-8">Student</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Country</div>
                                            <div className="col-lg-9 col-md-8">India</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Address</div>
                                            <div className="col-lg-9 col-md-8">
                                               Nangal shama Jalandhar Punjab-144007
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Phone</div>
                                            <div className="col-lg-9 col-md-8">(+91) 9878947313</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Email</div>
                                            <div className="col-lg-9 col-md-8">
                                            ravinaduggal14@gmail.com
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane fade profile-edit pt-3"
                                        id="profile-edit"
                                    >
                                        {/* <!-- Profile Edit Form --> */}
                                        <form>
                                            <div className="row mb-3">
                                                <label
                                                    for="profileImage"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Profile Image
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <img
                                                        src="/assets/img/profile-img2.jpg"
                                                        alt="Profile"
                                                        className="img-fluid"
                                                    />
                                                    <div className="pt-2">
                                                        <a
                                                            href="#"
                                                            className="btn btn-primary btn-sm"
                                                            title="Upload new profile image"
                                                        >
                                                            <i className="bi bi-upload"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn btn-danger btn-sm"
                                                            title="Remove my profile image"
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="fullName"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Full Name
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="fullName"
                                                        type="text"
                                                        className="form-control"
                                                        id="fullName"
                                                        value="Ravina Duggal"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="about"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    About
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <textarea
                                                        name="about"
                                                        className="form-control"
                                                        id="about"
                                                    >
                                                       I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.
                                                    </textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="company"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Collage/University
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="company"
                                                        type="text"
                                                        className="form-control"
                                                        id="company"
                                                        value="Guru Nanak Dev University Regional Campus Jalandhar"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Job"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Role
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="job"
                                                        type="text"
                                                        className="form-control"
                                                        id="Job"
                                                        value="Student"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Country"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Country
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="country"
                                                        type="text"
                                                        className="form-control"
                                                        id="Country"
                                                        value="India"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Address"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Address
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="address"
                                                        type="text"
                                                        className="form-control"
                                                        id="Address"
                                                        value="Nangal shama Jalandhar Punjab-144007"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Phone"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Phone
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        className="form-control"
                                                        id="Phone"
                                                        value="(+91) 9878947313"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Email"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        id="Email"
                                                        value="ravinaduggal14@gmail.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Twitter"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Twitter Profile
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="twitter"
                                                        type="text"
                                                        className="form-control"
                                                        id="Twitter"
                                                        value="https://twitter.com/?lang=en"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Facebook"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Facebook Profile
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="facebook"
                                                        type="text"
                                                        className="form-control"
                                                        id="Facebook"
                                                        value="https://www.facebook.com/"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Instagram"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Instagram Profile
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="instagram"
                                                        type="text"
                                                        className="form-control"
                                                        id="Instagram"
                                                        value="https://instagram.com/#"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="Linkedin"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Linkedin Profile
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="linkedin"
                                                        type="text"
                                                        className="form-control"
                                                        id="Linkedin"
                                                        value="https://linkedin.com/#"
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn profile-color">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                        {/* <!-- End Profile Edit Form --> */}
                                    </div>

                                    <div className="tab-pane fade pt-3" id="profile-settings">
                                        {/* <!-- Settings Form --> */}
                                        <form>
                                            <div className="row my-5 py-5">
                                                <label
                                                    for="fullName"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Email Notifications
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="changesMade"
                                                            checked
                                                        />
                                                        <label
                                                            className="form-check-label "
                                                            for="changesMade"
                                                        >
                                                            Changes made to your account
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input "
                                                            type="checkbox"
                                                            id="newProducts"
                                                            checked
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            for="newProducts"
                                                        >
                                                            Information on new products and services
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input "
                                                            type="checkbox"
                                                            id="proOffers"
                                                        />
                                                        <label className="form-check-label" for="proOffers">
                                                            Marketing and promo offers
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input "
                                                            type="checkbox"
                                                            id="securityNotify"
                                                            checked
                                                            disabled
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            for="securityNotify"
                                                        >
                                                            Security alerts
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn profile-color">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                        {/* <!-- End settings Form --> */}
                                    </div>

                                    <div
                                        className="tab-pane fade pt-3"
                                        id="profile-change-password"
                                    >
                                        {/* <!-- Change Password Form --> */}
                                        <form>
                                            <div className="row mb-3">
                                                <label
                                                    for="currentPassword"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Current Password
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        className="form-control"
                                                        id="currentPassword"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="newPassword"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    New Password
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="newpassword"
                                                        type="password"
                                                        className="form-control"
                                                        id="newPassword"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    for="renewPassword"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Re-enter New Password
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="renewpassword"
                                                        type="password"
                                                        className="form-control"
                                                        id="renewPassword"
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn profile-color">
                                                    Change Password
                                                </button>
                                            </div>
                                        </form>
                                        {/* <!-- End Change Password Form --> */}
                                    </div>
                                </div>
                                {/* <!-- End Bordered Tabs --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
