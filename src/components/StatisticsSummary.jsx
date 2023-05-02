import React from 'react'

export default function StatisticsSummary() {
    return (
        <div className='row g-4'>
                <div className='col-md-3 p-3'>
                    <div className='p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2 fw-bold'>Products</h3>
                            <p className='fs-5'>20</p>
                        </div>
                        <i className='bi bi-cart-plus fs-1 text-primary'></i>
                    </div>
                </div>
                <div className='col-md-3 p-3'>
                    <div className='p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2 fw-bold'>Sales</h3>
                            <p className='fs-5'>2450€</p>
                        </div>
                        <i className='bi bi-currency-euro fs-1 text-success'></i>
                    </div>
                </div>
                <div className='col-md-3 p-3'>
                    <div className='p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2 fw-bold'>Delivery</h3>
                            <p className='fs-5'>2250</p>
                        </div>
                        <i className='bi bi-truck fs-1 text-warning'></i>
                    </div>
                </div>
                <div className='col-md-3 p-3'>
                    <div className='p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2 fw-bold'>Increase</h3>
                            <p className='fs-5 '>20%</p>
                        </div>
                        <i className='bi bi-graph-up fs-1 text-danger'></i>
                    </div>
                </div>
            </div>
  )
}
