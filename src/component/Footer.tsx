const Footer = () => {
  return (
    <>
      <div className='bg-[#e7edeb]'>
        <div className='max-w-7xl mx-auto max-xl:max-w-5xl'>
          <div className='pt-24 pb-6'>
            <div className='mx-auto gap-6 flex  flex-col max-sm:w-11/12 max-lg:w-11/12'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <div className=''>
                      <img
                        src='https://infinity.devcodefire.com/wp-content/uploads/2024/10/infinityteam.png'
                        className='h-14 '
                        alt=''
                      />
                    </div>
                  </div>
                  <p className='text-base text-[#4b544f]'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center max-md:justify-start max-md:items-start'>
                  <div className='h-full'>
                    <h3 className='text-xl font-semibold mb-4'>Our Company</h3>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='#'
                          className='text-muted-foreground hover:text-primary text-sm text-[#4b544f]'
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-muted-foreground hover:text-primary text-sm text-[#4b544f]'
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-muted-foreground hover:text-primary text-sm text-[#4b544f]'
                        >
                          User Terms
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-muted-foreground hover:text-primary text-sm text-[#4b544f]'
                        >
                          Help Centre
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-semibold mb-4'>Get in touch</h3>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-2 max-lg:flex-col max-lg:items-start max-md:flex-row max-md:items-center'>
                      <div className='w-8 h-8 rounded-full flex items-center justify-center bg-[#d2dbd8]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-[18px]'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='#000'
                            d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z'
                          />
                        </svg>
                      </div>
                      <div className='text-base gap-1 flex flex-col max-xl:text-sm'>
                        <a href='' className='text-[#4b544f] text-base'>
                          USA: +91 02 2585 0556
                        </a>
                        <a href='' className='text-[#4b544f] text-base'>
                          UK: +61 02 2585 0556
                        </a>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 max-lg:flex-col max-lg:items-start max-md:flex-row max-md:items-center'>
                      <div className='w-8 h-8 rounded-full flex items-center justify-center bg-[#d2dbd8]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-[18px]'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='#000'
                            d='M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z'
                          />
                        </svg>
                      </div>
                      <div className='text-base gap-1 flex flex-col max-xl:text-sm'>
                        <a href='' className='text-[#4b544f] text-base'>
                          Contacthelp@Demoui.co
                        </a>
                        <a href='' className='text-[#4b544f] text-base'>
                          Info@Demoui.co
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-12 pt-4 border-t-[2px] border-[#d7dfdc] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
                <p className='text-sm text-muted-foreground'>
                  © 2022 Consultic by fleexstudio. All Rights Reserved.
                </p>
                <div className='flex gap-7'>
                  <div className='flex w-9 h-9 rounded-full bg-white items-center justify-center hover:bg-[#243f32]'>
                    <a href='#' className='text-black hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-black hover:fill-white'
                        viewBox='0 0 512 512'
                      >
                        <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253' />
                      </svg>
                    </a>
                  </div>
                  <div className='flex w-9 h-9 rounded-full bg-white items-center justify-center hover:bg-[#243f32]'>
                    <a href='#' className='text-black hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-black hover:fill-white'
                        viewBox='0 0 512 512'
                      >
                        <path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256' />
                      </svg>
                    </a>
                  </div>
                  <div className='flex w-9 h-9 rounded-full bg-white items-center justify-center hover:bg-[#243f32]'>
                    <a href='#' className='text-black hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-black hover:fill-white'
                        viewBox='0 0 512 512'
                      >
                        <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1' />
                      </svg>
                    </a>
                  </div>
                  <div className='flex w-9 h-9 rounded-full bg-white items-center justify-center hover:bg-[#243f32]'>
                    <a href='#' className='text-black hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-black hover:fill-white'
                        viewBox='0 0 512 512'
                      >
                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
