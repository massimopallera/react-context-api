import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="d-flex justify-content-sm-between justify-content-center py-3 px-4 align-items-center">
      <h1 className="d-none d-sm-block">React Form</h1>
      <Navbar />
    </header>
  )
}