import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 Shovon Halder
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="https://www.facebook.com/profile.php?id=100080779660559" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-7 h-7"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-7 h-7"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="https://x.com/SHalder0004" className="text-gray-500">
                            <svg
                                className="w-7 h-7"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="https://github.com/Shovon0004" className="text-gray-500">
                            <svg
                                className="w-7 h-7"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/shovon-halder-5ab775266/" className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/shovon-halder-5ab775266/" className="text-gray-500">
                            <svg width="25px" height="25px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
  <path fill="#494c4e" d="M8.964 15a3.115 3.115 0 0 1-1.63-.462l-7.32-4.482V17a1 1 0 0 0 1 1H16.92a1 1 0 0 0 1-1v-6.944l-7.32 4.48A3.116 3.116 0 0 1 8.964 15z"/>
  <path fill="#494c4e" d="M17.73 6.31l-1.8-1.91V1.04A1.043 1.043 0 0 0 14.89 0H3.036A1.044 1.044 0 0 0 2 1.04v3.42L.268 6.31a.95.95 0 0 0-.26.79.34.34 0 0 0 .01.1 1.07 1.07 0 0 0 .52.84l7.833 4.79a1.15 1.15 0 0 0 .6.17 1.14 1.14 0 0 0 .588-.17l7.832-4.79a1.078 1.078 0 0 0 .41-.44 1 1 0 0 0-.07-1.29zM10.95 8H4.987a1 1 0 0 1 0-2h5.963a1 1 0 0 1 0 2zm1.99-3.99H4.987a1.01 1.01 0 0 1 0-2.02h7.953a1.01 1.01 0 0 1 0 2.02z"/>
</svg>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link to="https://leetcode.com/u/shovon_halder00/" className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">

  <path fill="currentColor" d="m21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485c0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052c.708-.713.735-1.848.047-2.536l-3.473-3.511a6.793 6.793 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113c0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937c1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791c0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797c0-.989-.76-1.791-1.693-1.791z"/>

</svg>
                            
                            <span className="sr-only">LeetCode</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}