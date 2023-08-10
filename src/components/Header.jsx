function Header() {
  return (
    <div>
       <header className="w-full container ">
        <div className="container mx-auto  flex items-end justify-end h-14 px-6">
          <span className="mr-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z"
                stroke="#3C3E4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 28L22.2 22.2"
                stroke="#3C3E4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="drop">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M4 16H28"
                stroke="#3C3E4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8H28"
                stroke="#3C3E4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 24H28"
                stroke="#3C3E4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header
