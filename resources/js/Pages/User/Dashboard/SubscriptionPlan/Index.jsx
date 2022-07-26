import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Inertia } from '@inertiajs/inertia'

function SubscriptionPlan({ auth,subscriptionPlans }) {

    const selectSubscription = (id)=>{
        Inertia.post(route('user.dashboard.subscriptionPlan.userSubscribe',{subscriptionPlan:id}))
    }
    return (
        <Authenticated auth={auth}>
            <div className="ml-[300px] px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">

                        {subscriptionPlans.map((subscriptionPlan,i)=>(
                            <SubscriptionCard
                                key={`subscriptionPlan-${subscriptionPlan.id}`}
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInMonth={subscriptionPlan.active_period_in_months}
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={subscriptionPlan.name === 'Premium'}
                                onSelectSubscribtion={()=>selectSubscription(subscriptionPlan.id)}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default SubscriptionPlan;
