
function SectionTextAndImage() {
  return (
    <>
      <div className='min-h-screen min-w-full flex flex-col md:flex-row justify-around items-center bg-orange-300'>Text and Image
        <div className="flex flex-col justify-around items-center w-96 h-96 bg-red-400">
          <h2>Heading</h2>
          <p>Paragraph</p>
          <ul>List
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <div className="flex flex-col justify-around items-center w-96 h-96 bg-blue-400">
          <img></img>
        </div>
      </div>
    </>
  )
}

export default SectionTextAndImage