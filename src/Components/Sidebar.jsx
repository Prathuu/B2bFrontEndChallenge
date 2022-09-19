import React from 'react'
import "../Sass/app.css"
export default function Sidebar() {
    return (
        <div className='sidebar-body d-flex flex-column'>
            <div className="logo overflow-hidden">
                <img className='img-fluid' src={require('../images/logo.png')} alt="" />
            </div>
            <div className="container-fluid mt-3 p-0">
                <ul className="list-group font-weight-bold m-0">
                    <li className="list-group-item">
                        <i className="bi bi-house-door"></i>
                        Dashboard
                    </li>
                    <li className="list-group-item">
                        <i className="bi bi-star"></i>
                        Intels
                        <span className="badge bg-danger rounded-pill">4 unread</span>
                    </li>
                    <li className="list-group-item">
                        <i className="bi bi-person"></i>
                        Leads
                        <span className="badge bg-danger rounded-pill">4 unseen</span>
                    </li>
                    <li className='list-group-item d-flex flex-column justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between w-100'>
                            <p className="logotext">
                                <i className="bi bi-person-lines-fill"></i>
                                Accounts
                            </p>
                            <button className='btn'
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsAccount">
                                <i className='bi bi-chevron-down'></i>
                            </button>
                        </div>
                        <div className='collapse' id="collapsAccount">
                            <ul className='list-group '>
                                <li className='list-group-item'>Manage All</li>
                                <li className='list-group-item'>Track new account</li>
                                <li className='list-group-item'>Bulk Import</li>
                            </ul>
                        </div>
                    </li>
                    <li className='list-group-item d-flex flex-column justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between w-100'>
                            <p className="logotext">
                                <i className="bi bi-gear"></i>
                                Preferances
                            </p>
                            <button className='btn'
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsPreferences">
                                <i className='bi bi-chevron-down'></i>
                            </button>
                        </div>
                        <div className="collapse" id="collapsPreferences">
                            <ul className='list-group' >
                                <li className='list-group-item'>Product Focus</li>
                                <li className='list-group-item'>Intel Preferences</li>
                                <li className='list-group-item'>Load Persona</li>
                            </ul>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <i className="bi bi-link"></i>
                        Integrations
                    </li>
                    <li className="list-group-item">
                        <i className="bi bi-microsoft-teams"></i>
                        Team
                    </li>
                    <li className="list-group-item">
                        <i className="bi bi-info-circle"></i>
                        Help/Support
                    </li>
                </ul>
            </div >
        </div >
    )
}
