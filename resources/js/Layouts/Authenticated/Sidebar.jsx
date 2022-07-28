import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "./MenuItem";
import {UserMenu,UserOthers} from "./MenuList";

function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/assets/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((menu,i)=>(
                            <MenuItem 
                                key={`${i}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                        
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu,i)=>(
                            <MenuItem 
                                key={`${i}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                        <SubscriptionDetail
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDay={
                                auth.activePlan.remainingActiveDay
                            }
                            activeDay={auth.activePlan.activeDay}
                            name={auth.activePlan.name}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
