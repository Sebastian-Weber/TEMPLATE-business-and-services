


function Footer() {
  return (
    <>
      {/* <div className="w-full absolute left-0 bottom-0 bg-slate-200">Footer w-full</div> */}
      {/* <div className="w-screen absolute left-0 bottom-0 bg-pink-300">Footer w-screen</div> */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full left-0 bottom-0 p-6 bg-pink-300">Footer
        <div className="flex flex-row md:flex-col justify-around items-center w-1/4 md:1/3 h-48 bg-red-400">Icon</div>
        <div className="flex flex-row md:flex-col justify-around items-center w-3/4 md:1/3 h-48 bg-purple-400">Links</div>
        <div className="flex flex-row md:flex-col justify-around items-center w-1/2 md/2/3 h-48 bg-blue-400">Button</div>
      </div>
      {/* <div className="w-svw absolute left-0 bottom-0 bg-pink-400">Footer w-svw</div>
      <div className="w-dvw absolute left-0 bottom-0 bg-pink-500">Footer w-dvw</div>
      <div className="w-lvw absolute left-0 bottom-0 bg-pink-400">Footer w-lvw</div> */}

      {/* <div className="max-w-fit absolute left-0 bg-slate-600">Footer max-w-fit</div> */}
    </>
  )
}

export default Footer
