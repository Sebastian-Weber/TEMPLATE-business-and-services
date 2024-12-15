const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png'

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

function Section_Gallery() {
  return (
    <>
      <div className='min-h-screen mt-10 px-2 2xl:px-20' style={{ backgroundColor:cdColors.secondaryColor }}>
        <div className=" bg-orange-400">

          <div className="flex flex-row">

            {/* Dummy Card 1 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

            {/* Dummy Card 2 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

            {/* Dummy Card 3 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

          </div>

          <div className="flex flex-row">

            {/* Dummy Card 4 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

            {/* Dummy Card 5 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

          </div>

          <div className="flex flex-row"> 

            {/* Dummy Card 6 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

            {/* Dummy Card 7 */}
            <div className="m-4">
            <img className='h-full w-auto' src={cdImages.placeholderImage} alt="Placeholder"></img>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Section_Gallery