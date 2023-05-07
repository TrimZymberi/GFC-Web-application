import React from 'react'

// ^ For any inconvenience this component is supposed to be a short quick way of creating/adding (Employee, Driver, Product, Category) straight from dashboard
export default function QuickAdd() {
    return (
        <div className='row g-4'>
            <div className='col-md-3 p-2'>
                <div className='p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2 fw-bold text-white'>Employee+</h3>
                        <p className='fs-6 text-white'>You can add your employees here!</p>
                    </div>
                    <button type='button' className='btn btn-black bg-white fw-bold'>
                        Employee+
                    </button>
                </div>
            </div>
            <div className='col-md-3 p-2'>
                <div className='p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2 fw-bold text-white'>Driver+</h3>
                        <p className='fs-6 text-white'>You can add your Drivers here!</p>
                    </div>
                    <button type='button' className='btn btn-black bg-white fw-bold p-2'>
                        Driver+
                    </button>
                </div>
            </div>
            <div className='col-md-3 p-2'>
                <div className='p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2 fw-bold text-white'>Product+</h3>
                        <p className='fs-6 text-white'>You can add your Products here!</p>
                    </div>
                    <button type='button' className='btn btn-black bg-white fw-bold'>
                        Product+
                    </button>
                </div>
            </div>
            <div className='col-md-3 p-2'>
                <div className='p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2 fw-bold text-white'>Category+</h3>
                        <p className='fs-6 text-white'>You can add your Categories here!</p>
                    </div>
                    <button type='button' className='btn btn-black bg-white fw-bold'>
                        Category+
                    </button>
                </div>
            </div>
        </div>
    )
}
