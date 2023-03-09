import { ReactComponent as Dashboard } from "../../assets/dashboard/sidebar/dashboard.svg"
import { ReactComponent as Members } from "../../assets/dashboard/sidebar/members.svg"
import { ReactComponent as Exercise } from "../../assets/dashboard/sidebar/exercise.svg"
import { ReactComponent as Diet } from "../../assets/dashboard/sidebar/diet.svg"
import { ReactComponent as Profile } from "../../assets/dashboard/sidebar/profile.svg"
import { ReactComponent as Logout } from "../../assets/dashboard/sidebar/logout.svg"

export const routes = [
    {
        id: 1,
        title: 'Dashboard',
        svg: Dashboard,
        active: true
    },
    {
        id: 2,
        title: 'Members',
        svg: Members,
        active: false
    },
    {
        id: 3,
        title: 'Exercise Plans',
        svg: Exercise,
        active: false
    },
    {
        id: 4,
        title: 'Diet Plans',
        svg: Diet,
        active: false
    },
    {
        id: 5,
        title: 'Profile',
        svg: Profile,
        active: false
    },
    {
        id: 6,
        title: 'Logout',
        svg: Logout,
        active: false
    },
]