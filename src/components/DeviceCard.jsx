import MonitorIcon from "../assets/images/monitor.svg"

const DeviceCard = props => {
    const { deviceName, ddate, dtime } = props;

    return <div className="rounded-2xl bg-lightdark min-w-[263px] max-w-[350px] w-full px-8 py-5 mx-auto">
        <div className="w-full flex gap-5 items-center">
            <div className="p-3 bg-maindark rounded-lg">
                <img src={MonitorIcon} alt="Monitor" />
            </div>
            <div className="text-xl font-semibold">{ deviceName }</div>
        </div>
        <div className="text-sm font-semibold pt-4 pb-3">Last Update</div>
        <div className="flex">
            <div className="w-1/2">
                <div className="opacity-30 text-[11.41px]">Date</div>
                <div className="text-yellow-500 text-sm">{ ddate }</div>
            </div>
            <div className="w-1/2">
                <div className="opacity-30 text-[11.41px]">Date</div>
                <div className="text-yellow-500 text-sm">{ dtime }</div>
            </div>
        </div>
    </div>
}

export default DeviceCard;