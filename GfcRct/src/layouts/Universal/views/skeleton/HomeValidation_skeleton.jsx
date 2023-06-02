import React from 'react'
import { Link } from 'react-router-dom'
import ProductDisplaySkeleton from '../../components/core/ProductDisplayTab_skeleton'

export default function HomeValidation_skeleton() {
    return (
        <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-20'>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex animate-pulse sm:justify-center">
                    <div className="relative h-6 w-80 rounded-full bg-red-100 px-3 py-1 text-sm leading-6 text-gray-600 ring-2 ring-red-50 hover:ring-red-400 ">
                        <a href="#" className="font-semibold">
                            <span className="absolute inset-0" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-pulse">
                        <div class="h-3.5 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[640px] mb-3.5 mx-auto"></div>
                        <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                    </h1>
                        <div role="status" class="mt-3.5 space-y-2.5 animate-pulse">
                            <div class="flex justify-center items-center w-full space-x-2">
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div class="flex justify-center items-center w-full space-x-2">
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div class="flex justify-center items-center w-full space-x-2 ">
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md animate-pulse w-40 h-8 bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 transition:1s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            <Link to='/aboutus' ><div class="h-4 bg-gray-700 rounded-full dark:bg-gray-600 w-40 animate-pulse"></div></Link>
                        </a>
                    </div>
                </div>
            </div>
            <ProductDisplaySkeleton />
        </div>
    )
}
