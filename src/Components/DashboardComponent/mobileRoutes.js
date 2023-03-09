import { ReactComponent as Members } from "../../assets/dashboard/sidebar/members.svg"
import { ReactComponent as Diet } from "../../assets/dashboard/sidebar/diet.svg"
import { ReactComponent as Profile } from "../../assets/dashboard/sidebar/profile.svg"
import { ReactComponent as Home } from "../../assets/dashboard/main/home.svg"

export const mobileRoutes = [
    {
        id: 1,
        title: "Home",
        svg: Home,
        active: true
    },
    {
        id: 2,
        title: "Members",
        svg: Members,
        active: false

    },
    {
        id: 1,
        title: "Plan",
        svg: Diet,
        active: false

    },
    {
        id: 1,
        title: "Profile",
        svg: Profile,
        active: false

    },
]