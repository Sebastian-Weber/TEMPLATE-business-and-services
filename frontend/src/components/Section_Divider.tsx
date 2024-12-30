

const cdColors = {
  primaryColor: '#A8CF4E',
  secondaryColor: '#F3F4A7',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // yellow
  primaryBackgroundColorDark: '#9FA053',
  primaryBackgroundColorDefault: '#EDEF7C',
  primaryBackgroundColorLight: '#F3F4A7',

  // green
  secondaryBackgroundColorDark: '#718B34',
  secondaryBackgroundColorDefault: '#A8CF4E',
  secondaryBackgroundColorLight: '#C5DF88',

  // teal
  tertiaryBackgroundColorDark: '#4A8B65',
  tertiaryBackgroundColorDefault: '#6FCF97',
  tertiaryBackgroundColorLight: '#9EDFB9',

  // blue
  quaternaryBackgroundColorDark: '#338EA2',
  quaternaryBackgroundColorDefault: '#4CD4F2',
  quaternaryBackgroundColorLight: '#87E2F6',

  // brown
  quinaryBackgroundColorDark: '#795434',
  quinaryBackgroundColorDefault: '#B57E4D',
  quinaryBackgroundColorLight: '#CDA888',

  // white
  whiteBackground: '#F7F7F7',

  // black
  blackBackground: '#1A1A1A',

  primaryFontColor: '#262E3C',
  secondaryFontColor: '#6D6D6D',
  tertiaryFontColor: '#D6D5CB'
};

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
    {/* <div className="h-64 w-full" style={{backgroundImage: 
    'repeating-linear-gradient(-45deg, transparent, transparent 51px, #d6c722 51px, #d6c722 102px)',
backgroundColor: '#4017ce'}}>
    </div> */}
    {/* <div className="h-64 w-full" style={{background: 'radial-gradient(circle at 50% 100%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%), radial-gradient(circle at 100% 50%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%), radial-gradient(circle at 50% 0%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%), radial-gradient(circle at 0 50%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%)', backgroundSize: '6em 6em', backgroundColor: '#d9d909', opacity: 1}}>
    </div> */}
    {/* <div className="h-64 w-full" style={{background: 'radial-gradient(circle at 50% 100%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%), radial-gradient(circle at 100% 50%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%), radial-gradient(circle at 50% 0%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%), radial-gradient(circle at 0 50%, #0000ff80 5%, #0000ff 5% 10%, #0000ff80 10% 15%, #0000ff 15% 20%, #0000ff80 20% 25%, #0000ff 25% 30%, #0000ff80 30% 35%, #0000ff 35% 40%, transparent 40%)',
        backgroundSize: '6em 6em',
        backgroundColor: '#d9d909',
        opacity: 0.66}}>  
    </div>
    <div className="h-64 w-full" style={{background: 'repeating-linear-gradient(0deg, #e09818 0, #e09818 20%, transparent 0, transparent 50%), repeating-linear-gradient(135deg, #0000ff 0, #0000ff 10%, transparent 0, transparent 50%)',
        backgroundSize: '4em 4em',
        backgroundColor: '#e09818',
        opacity: 0.55}}>  
    </div> */}
    <div className="h-80 w-full" style={{background: 
        'radial-gradient(circle at top left,transparent 25%, #EDEF7C 25.5%, #EDEF7C 36%, transparent 37%, transparent 100%),radial-gradient(circle at bottom right,transparent 34%,#1D6DB4 34.5%, #1D6DB4 45.5%, transparent 46%, transparent 100%)',
        backgroundSize: '6em 6em',
        backgroundColor: cdColors.quaternaryBackgroundColorDefault,
        }}>  
    </div>


    </>
  )
}

export default SectionDivider



