import { FC } from "react"
import s from "./UserNav.module.css"
import Link from "next/link"
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from "@components/ui/context"
import useCart from "@common/cart/use-cart"

const UserNav: FC = () => {
  const ui=useUI()
    const { data } = useCart()

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={ui.openSidebar}/>
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
           
              <Heart />
          
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
