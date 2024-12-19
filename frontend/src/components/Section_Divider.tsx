

function SectionDivider() {
  return (
    <>
      {/* <div className="h-64 w-auto" style={{
        background: 'linear-gradient(135deg, #1d6db4 25%, transparent 25%) -55px 0, linear-gradient(225deg, #1d6db4 25%, transparent 25%) -55px 0, linear-gradient(315deg, #1d6db4 25%, transparent 25%), linear-gradient(45deg, #1d6db4 25%, transparent 25%)',
        backgroundSize: '110px 110px',
        backgroundColor: '#d9c25c'
      }}></div> */}
    {/* <div className="w-full h-64" style={{background: 'circle at top left,transparent 25%,#D9C25C 25.5%, #352be7 36%, transparent 37%, transparent 100%),radial-gradient(circle at bottom right,transparent 34%,#352be7 34.5%, #352be7 45.5%, transparent 46%, transparent 100%)',
        backgroundSize: '6em 6em',
        backgroundColor: '#1D6DB4',
        opacity: 1}}>
    </div> */}
    <div className="h-64 w-full" style={{backgroundImage: 
    'repeating-linear-gradient(-45deg, transparent, transparent 51px, #d6c722 51px, #d6c722 102px)',
backgroundColor: '#4017ce'}}>
    </div>    
    </>
  )
}

export default SectionDivider