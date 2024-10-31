function Header() {
  return (
    <div className="flex justify-between items-center text-white">
      <h1 className="text-2xl leading-none">Hello, <br/> <p className="text-4xl font-semibold">Sarthak👋</p></h1>
      <button className="bg-red-600 h-8 py-6 px-4 flex items-center rounded-md tracking-tight leading-none">Logout</button>
    </div>
  )
}

export default Header