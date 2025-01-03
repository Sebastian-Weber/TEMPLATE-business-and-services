

const cdColors = {
  primaryColor: '#A8CF4E',
  secondaryColor: '#FBF179',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // green
  primaryBackgroundColorLight: '#C5DF88',
  primaryBackgroundColorDefault: '#A8CF4E',
  primaryBackgroundColorDark: '#8FB042',

  // yellow   
  secondaryBackgroundColorLight: '#FCF6A5',
  secondaryBackgroundColorDefault: '#FBF179',
  secondaryBackgroundColorDark: '#DBD269',

  // teal
  tertiaryBackgroundColorLight: '#9EDFB9',
  tertiaryBackgroundColorDefault: '#6FCF97',
  tertiaryBackgroundColorDark: '#5EB080',

  // blue
  quaternaryBackgroundColorLight: '#80CDDE',
  quaternaryBackgroundColorDefault: '#41B4CE',
  quaternaryBackgroundColorDark: '#41B4CE',

  // brown
  quinaryBackgroundColorLight: '#CDA888',
  quinaryBackgroundColorDefault: '#B57E4D',
  quinaryBackgroundColorDark: '#9A6B42',

  // white
  whiteBackground: '#F7F7F7',

  // black
  blackBackground: '#1A1A1A',

  primaryFontColor: '#212121',
  secondaryFontColor: '#6D6D6D',
  tertiaryFontColor: ''
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
        backgroundColor: cdColors.quaternaryBackgroundColorLight,
        }}>  
    </div>


    </>
  )
}

export default SectionDivider



