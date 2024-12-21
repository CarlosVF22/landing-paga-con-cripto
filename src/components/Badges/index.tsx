import {
    TruckIcon,
    ArrowUturnLeftIcon,
    UserIcon,
} from "@heroicons/react/16/solid";

function Badges() {
    return (
        <div className="flex">
            <span className="inline-flex text-xs mr-2 items-center rounded-md shadow-md shadow-blue_primary bg-blue_primary px-2 py-1 font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                <TruckIcon className="size-4 mr-1 md:block hidden" /> Envío
                gratis
            </span>
            <span className="inline-flex mr-2 items-center rounded-md shadow-md shadow-blue_primary bg-blue_primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                <ArrowUturnLeftIcon className="size-4 mr-1 md:block hidden" />{" "}
                Devoluciones gratis
            </span>
            <span className="inline-flex items-center rounded-md bg-blue_primary shadow-md shadow-blue_primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                <UserIcon className="size-4 mr-1 md:block hidden" /> Atención
                24/7
            </span>
        </div>
    );
}

export default Badges;
