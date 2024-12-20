const cdImages = {
  image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
  image10: '/src/assets/images/ernys-grI-lghNqMI-unsplash.jpg',
  image11: '/src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
  image12: '/src/assets/images/quino-al-8gWEAAXJjtI-unsplash.jpg',

};


const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
  primaryAccentColor: '',
  secondaryAccentColor: '',
  primaryBackgroundColorDark: '#165287',
  primaryBackgroundColorDefault: '#1D6DB4',
  primaryBackgroundColorLight: '#ACC6DD',
  secondaryBackgroundColorDark: '#165287',
  secondaryBackgroundColorDefaukt: '#165287',
  secondaryBackgroundColorLight: '#165287',
  tertiaryBackgroundColorDark: '#165287',
  tertiaryBackgroundColorDefault: '#165287',
  tertiaryBackgroundColorLight: '#165287',
  quaternaryBackgroundColorDark: '#165287',
  quaternaryBackgroundColorDefault: '#165287',
  quaternaryBackgroundColorLight: '#165287',
  primaryFontColor: '#191A1E',
  secondaryFontColor: '#817E72',
  tertiaryFontColor: '#D6D5CB'
};

const cdCopy = {
  sectionContact_Heading: 'Wie Sie uns erreichen können',

};



function SectionContact() {
  return (
    <>
     <div className='min-h-screen flex flex-col justify-center items-center' >
        <div className="flex flex-col-reverse h-full justify-around items-center md:flex-row">
  
            {/* left box */}
            <div className="flex flex-col p-5 justify-center items-center h-1/2 w-full  md:m-12 md:h-fit md:w-9/12 md:items-center">
              <div className="flex flex-col p-8 h-auto w-auto justify-center items-start md:full ">
                <h2 style={{ color: cdColors.secondaryFontColor }}>{cdCopy.sectionContact_Heading}</h2>
                <br></br>
                <div className="flex flex-row justify-start items-start">

                {/* Phone Icon */}
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">
                  <g clip-path="url(#clip0_17_1069)">
                    <path d="M22.75 1.24731H5.25C3.86929 1.24731 2.75 2.3666 2.75 3.74731V36.2473C2.75 37.628 3.86929 38.7473 5.25 38.7473H22.75C24.1307 38.7473 25.25 37.628 25.25 36.2473V3.74731C25.25 2.3666 24.1307 1.24731 22.75 1.24731Z" stroke="#2E2936" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M12.75 33.7473H15.25" stroke="#2E2936" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19 1.24731V3.74731C19 4.41036 18.7366 5.04624 18.2678 5.51508C17.7989 5.98392 17.163 6.24731 16.5 6.24731H11.5C10.837 6.24731 10.2011 5.98392 9.73223 5.51508C9.26339 5.04624 9 4.41036 9 3.74731V1.24731" stroke="#2E2936" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_17_1069">
                      <rect width="40" height="40" fill="white" transform="translate(-6 -0.00268555)"></rect>
                    </clipPath>
                  </defs>
							  </svg>
                <span className="flex flex-row justify-center items-center">+49 1800 123123</span>



              <div className="flex flex-row justify-center items-center">
                {/* Mail Icon */}
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="37" height="40" viewBox="0 0 37 40" fill="none">
								  <path d="M5.07004 6.66398H32.27C33.1718 6.66398 34.0366 7.00639 34.6742 7.61588C35.3118 8.22538 35.67 9.05203 35.67 9.91398V29.414C35.67 30.2759 35.3118 31.1026 34.6742 31.7121C34.0366 32.3216 33.1718 32.664 32.27 32.664H5.07004C4.16831 32.664 3.3035 32.3216 2.66588 31.7121C2.02826 31.1026 1.67004 30.2759 1.67004 29.414V9.91398C1.67004 8.12648 3.20004 6.66398 5.07004 6.66398ZM32.27 12.1565V9.91398H5.07004V12.1565L18.67 18.6565L32.27 12.1565ZM32.27 15.7965L19.435 21.9227C19.1978 22.037 18.9358 22.0966 18.67 22.0966C18.4043 22.0966 18.1423 22.037 17.905 21.9227L5.07004 15.7965V29.414H32.27V15.7965Z" fill="#2E2936"></path>
							  </svg>
                <span className="">E-Mail-Adresse</span >
              </div>

            </div>
            <br></br>
  
            <form className="flex flex-col justify-start items-start">
              <div className="flex flex-col w-full">
              <label>Vor & Nachname*</label>
              <input></input>
              <br></br>

              <label>Email Adresse*</label>
              <input></input>
              <br></br>

              <label>Telefonnummer</label>
              <input></input>
              <br></br>

              <label>Nachricht*</label>
              <textarea className="text-md font-mono h-40 px-2 text-gray-300" placeholder='Beschreiben Sie Ihr Vorhaben oder Ihr Anliegen'></textarea>
              <br></br>

              <label className="text-sm font-mono text-gray-700">Bei mit * gekennzeichneten Felder handelt es sich um Pflichtfelder</label>
              <br></br>
              <div className="flex flex-row justify-start items-center">
                <input type="checkbox" className="m-2"></input>
                <label className="text-sm font-mono text-gray-700">Mit dem Senden der Nachricht akzeptiere ich die Datenschutzbedingungen</label>
              </div>
              <br></br>
              </div>
              <button className="">Nachricht senden</button>
            </form>
            <br></br>
            <br></br>
          </div>
          </div>

          {/* right box */}
          <div className="flex flex-col h-fit m-6 w-auto justify-around items-center md:h-fit md:w-7/12 md:-mt-72">
            <img className="min-w-52" src={cdImages.image12}></img>
          </div>

        </div>
      </div>
    </>
  )
}

export default SectionContact