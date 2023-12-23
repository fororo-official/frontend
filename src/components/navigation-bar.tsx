import Link from "next/link"
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet";
import { FiMenu } from "react-icons/fi";

export function NavigationBar() {
  return (
    <header className="flex items-center justify-between px-6 py-2 fixed left-0 right-0 top-0 bg-white bg-opacity-75 backdrop-blur border-b border-gray-200 z-10">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/forif.svg"
            alt="Logo"
            width={90}
            height={90}
          />
        </div>
      </Link>
      <nav className="flex items-center space-x-6 max-md:hidden">
        <NavTab href="/attendance">전자출결</NavTab>
        <NavTab href="/board">게시판</NavTab>
        <NavTab href="/profile">프로필</NavTab>
        <Button
          variant="outline"
        >
          로그인
        </Button>
      </nav>
      {/* dropdown menu */}
      <nav className="hidden max-md:flex items-center space-x-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
                variant="ghost"
                size='icon'
              >
                <FiMenu size={24} />
              </Button>
          </SheetTrigger>
          <SheetContent className="w-64">
            <SheetFooter>
              <SheetClose asChild>
                <div className="flex flex-col space-y-2">
                  <NavTab href="/attendance">전자출결</NavTab>
                  <NavTab href="/board">게시판</NavTab>
                  <NavTab href="/profile">프로필</NavTab>
                  <Button
                    variant="outline"
                  >로그인 / 회원가입</Button>
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

function NavTab({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50">
      {children}
    </Link>
  )
}