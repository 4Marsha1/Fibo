import { ReactComponent as AddMember } from "../../assets/dashboard/main/add_members.svg"
import { ReactComponent as ManageStaff } from "../../assets/dashboard/main/manage_staff.svg"
import { ReactComponent as Gym } from "../../assets/dashboard/main/gym.svg"
import { ReactComponent as Fees } from "../../assets/dashboard/main/fees.svg"


export const quickActions = [
    {
        id: 1,
        title: 'Add Members',
        svg: AddMember
    },
    {
        id: 2,
        title: 'Manage Staffs',
        svg: ManageStaff
    },
    {
        id: 3,
        title: 'Set Up Gym branch',
        svg: Gym
    },
    {
        id: 4,
        title: 'Manage Subscription Plans',
        svg: Fees
    },
]